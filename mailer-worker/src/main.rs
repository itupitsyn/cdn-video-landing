use anyhow::Result;
use lettre::transport::smtp::authentication::Credentials;
use lettre::{AsyncSmtpTransport, AsyncTransport, Message, Tokio1Executor};
use sqlx::postgres::PgPoolOptions;
use tokio::time::{Duration, sleep};

#[tokio::main]
async fn main() -> Result<()> {
    dotenvy::dotenv().ok();
    let db_url = std::env::var("DATABASE_URL")?;
    let smtp_host = std::env::var("SMTP_HOST").expect("SMTP_HOST must be set");
    let smtp_port = std::env::var("SMTP_PORT").expect("SMTP_PORT must be set");
    let smtp_user = std::env::var("SMTP_USER").expect("SMTP_USER must be set");
    let smtp_pass = std::env::var("SMTP_PASS").expect("SMTP_PASS must be set");
    let target_email = std::env::var("TARGET_EMAIL").expect("TARGET_EMAIL must be set");
    let pool = PgPoolOptions::new()
        .max_connections(5)
        .connect(&db_url)
        .await?;

    println!("The worker has started");

    loop {
        let result = process_mailer(
            &pool,
            smtp_host.clone(),
            smtp_port.clone(),
            smtp_user.clone(),
            smtp_pass.clone(),
            target_email.clone(),
        )
        .await;

        if let Err(e) = result {
            eprintln!("Error processing requests: {:?}", e);
        }

        sleep(Duration::from_secs(300)).await;
    }
}

async fn process_mailer(
    pool: &sqlx::PgPool,
    smtp_host: String,
    smtp_port: String,
    smtp_user: String,
    smtp_pass: String,
    target_email: String,
) -> Result<()> {
    let rows = sqlx::query(
        r#"SELECT id, site, traffic, telegram, "createdAt" FROM "Request" WHERE "isSent" = false"#,
    )
    .fetch_all(pool)
    .await?;

    if rows.is_empty() {
        return Ok(());
    }

    let mut table_body = String::new();
    let mut ids_to_update = Vec::new();
    let req_count = rows.len();

    for row in rows {
        let id: i32 = sqlx::Row::get(&row, "id");
        let site: String = sqlx::Row::get(&row, "site");
        let traffic: i32 = sqlx::Row::get(&row, "traffic");
        let telegram: String = sqlx::Row::get(&row, "telegram");
        let created_at: chrono::NaiveDateTime = sqlx::Row::get(&row, "createdAt");

        ids_to_update.push(id);

        table_body.push_str(&format!(
                "<tr>
      <td style=\"border: 1px solid #ddd; padding: 8px; max-width: 300px; overflow-wrap: break-word; vertical-align: top;\">{}</td>
      <td style=\"border: 1px solid #ddd; padding: 8px; max-width: 300px; overflow-wrap: break-word; vertical-align: top;\">{}</td>
      <td style=\"border: 1px solid #ddd; padding: 8px; max-width: 300px; overflow-wrap: break-word; vertical-align: top;\">{}</td>
      <td style=\"border: 1px solid #ddd; padding: 8px; max-width: 300px; overflow-wrap: break-word; vertical-align: top;\">{}</td>
    </tr>",
                site,
                traffic,
                telegram,
                created_at.format("%Y-%m-%d %H:%M").to_string()
            ));
    }

    let html_content = format!(
            "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
<html xmlns=\"http://www.w3.org/1999/xhtml\" lang=\"ru\">
<head>
  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>
  <style>
    body {{ margin: 0; padding: 0; font-family: Arial, sans-serif; }}
  </style>
</head>
<body style=\"margin: 0; padding: 0\">
  <h2>Новые заявки (CDN Videohub)</h2>
  <table style=\"border-collapse: collapse;\">
    <thead>
      <tr>
        <th style=\"border: 1px solid #ddd; padding: 8px;\">Сайт</th>
        <th style=\"border: 1px solid #ddd; padding: 8px;\">Трафик в сутки</th>
        <th style=\"border: 1px solid #ddd; padding: 8px;\">Телеграм</th>
        <th style=\"border: 1px solid #ddd; padding: 8px;\">Дата</th>
      </tr>
    </thead>
    <tbody>{}</tbody>
  </table>
  </body>
</html>",
            table_body
        );

    let subject = format!("[CDN Videohub] Новые заявки: {} шт", req_count);

    let email_obj = Message::builder()
        .from(smtp_user.parse()?)
        .to(target_email.parse()?)
        .subject(subject)
        .header(lettre::message::header::ContentType::TEXT_HTML)
        .body(html_content)?;

    let mailer = AsyncSmtpTransport::<Tokio1Executor>::relay(smtp_host.as_str())?
        .port(smtp_port.parse()?)
        .credentials(Credentials::new(smtp_user.parse()?, smtp_pass.parse()?))
        .build();

    if let Ok(_) = mailer.send(email_obj).await {
        sqlx::query(r#"UPDATE "Request" SET "isSent" = true WHERE id = ANY($1)"#)
            .bind(&ids_to_update)
            .execute(pool)
            .await?;
        println!("Sent: {} new requests", ids_to_update.len());
    }

    Ok(())
}

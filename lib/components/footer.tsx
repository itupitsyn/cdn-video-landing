import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="container py-9">
      <div className="leading-pup font-gotham-pro text-center text-[57px] font-bold tracking-tight max-[420px]:text-4xl">
        CDNvideoHub
      </div>

      <div className="flex flex-wrap gap-5.25 pt-6.25">
        <a
          href="https://t.me/CVHsupportBot"
          className="hover:white/80 text-[22px] leading-extrasubpup underline underline-offset-4 transition-colors max-[420px]:text-xl"
        >
          @CVHsupportBot
        </a>
        <a
          href="mailto:partner@cdnvideohub.com"
          className="hover:white/80 text-[22px] leading-extrasubpup underline underline-offset-4 transition-colors max-[420px]:text-xl"
        >
          partner@cdnvideohub.com
        </a>
      </div>

      <div className="leading-subpup flex flex-col gap-6 pt-7.5 text-[18px] tracking-tight text-white/50">
        <div>Политика конфиденциальности</div>
        <div>Согласие на обработку персональных данных</div>
        <div>Пользовательское соглашение</div>
      </div>

      <div className="font-gotham-pro pt-7.5 leading-extrasubpup tracking-tight text-[#8C8C8C]">
        © CDNvideoHub — монетизация видеоконтента
      </div>
    </footer>
  );
};

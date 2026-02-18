import { FC } from 'react';

import { cn } from '../utils/cn';

const data = [
  {
    id: 0,
    q: 'Какие категории сайтов вы принимаете?',
    a: 'В нашей библиотеке доступны аниме, дорамы, турция и западный контент, с РФ контентом не работаем',
  },
  {
    id: 1,
    q: 'Можете восстановить площадку после блокировки?',
    a: 'Вы можете временно установить другой плеер на первое место до появления тайтла в нашей базе. Для точного ответа нужно изучить сайт. Успешный опыт у нас есть',
  },
  {
    id: 2,
    q: 'Можно сделать интеграцию через API?',
    a: 'В нашей библиотеке доступны аниме, дорамы, турция и западный контент, с РФ контентом не работаем',
  },
  {
    id: 3,
    q: 'У вас есть модуль для DLE?',
    a: 'Дорамы, сериалы, фильмы, аниме, мультфильмы, турецкий контент',
  },
  {
    id: 4,
    q: 'Когда начисляете выплаты?',
    a: 'База работает со всеми типами ID',
  },
  {
    id: 5,
    q: 'Какую рекламу вы размещаете?',
    a: 'В нашей библиотеке доступны аниме, дорамы, турция и западный контент, с РФ контентом не работаем',
  },
];

export const QA: FC = () => {
  return (
    <section className="tablet:pt-25 air:pt-30 desktop:pt-40 container pt-22.5">
      <h2 className="font-gotham-pro leading-subpup tablet:text-[50px] air:text-[60px] desktop:text-[62px] text-center text-[30px] tracking-tight">
        Вопросы и ответы
      </h2>

      <div className="tablet:gap-6 flex flex-col gap-2 pt-7.5">
        {data.map((item, idx) => (
          <div
            key={item.id}
            className={cn(
              'tablet:px-7.5 tablet:py-8.5 air:flex-row air:gap-5 air:pl-6 air:pr-0 flex flex-col gap-4.75 px-5 py-6',
              idx > 0 && 'tablet:rounded-[30px] air:rounded-none border-t border-solid border-white/20',
            )}
          >
            <h3 className="font-golos-text leading-pup tablet:text-[22px] air:text-[24px] air:w-1/2 desktop:text-[28px] text-[18px]">
              {item.q}
            </h3>
            <p className="leading-extrasubpup tablet:text-[20px] air:w-1/2 desktop:text-[22px] text-white/70">
              {item.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

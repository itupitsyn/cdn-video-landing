import { FC } from 'react';

import { cn } from '../utils/cn';

const data = [
  {
    id: 0,
    q: 'Какие категории сайтов вы принимаете?',
    a: 'В нашей библиотеке доступны аниме, дорамы, турция и западный контент, с РФ контентом не работаем',
  },
  {
    id: 1,
    q: 'Можете восстановить площадку после блокировки?',
    a: 'Вы можете временно установить другой плеер на первое место до появления тайтла в нашей базе. Для точного ответа нужно изучить сайт. Успешный опыт у нас есть',
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
    a: 'База работает со всеми типами ID',
  },
  {
    id: 5,
    q: 'Какую рекламу вы размещаете?',
    a: 'В нашей библиотеке доступны аниме, дорамы, турция и западный контент, с РФ контентом не работаем',
  },
];

export const QA: FC = () => {
  return (
    <section className="container pt-27.5 sm:pt-25">
      <h2 className="font-gotham-pro leading-subpup text-center text-[30px] tracking-tight sm:text-[50px] lg:text-[62px]">
        Вопросы и ответы
      </h2>

      <div className="flex flex-col gap-2 pt-7.5">
        {data.map((item, idx) => (
          <div
            key={item.id}
            className={cn(
              'flex flex-col gap-4.75 px-5 py-6 sm:px-7.5 sm:py-8.5 lg:flex-row lg:gap-5 lg:px-6',
              idx > 0 && 'border-t border-solid border-white/20 sm:rounded-[30px] lg:rounded-none',
            )}
          >
            <h3 className="font-golos-text leading-pup text-[18px] sm:text-[22px] lg:w-1/2 lg:text-[28px]">{item.q}</h3>
            <p className="leading-extrasubpup text-white/70 sm:text-[20px] lg:w-1/2 lg:text-[22px]">{item.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

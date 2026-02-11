import { FC, ReactNode } from 'react';

import { cn } from '../utils/cn';
import { SendRequestLink } from './send-request-link';

interface CardProps {
  text: ReactNode;
  number: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ text, number, className }) => {
  return (
    <div
      className={cn(
        'relative flex min-h-53.5 flex-col overflow-hidden rounded-[40px] sm:min-h-65.75 lg:min-h-78.25',
        className,
      )}
    >
      <div
        className={cn(
          'absolute top-0 right-0 bottom-0 left-0 rounded-[41px] bg-[linear-gradient(136.71deg,#5C6AFF_3.11%,#2A3BFF_20.69%,#0014F5_40.02%,#00025B_94.5%)]',
          'mask-exclude! [mask-clip:content-box,border-box]! p-px [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]',
        )}
      />
      <div className="flex grow flex-col justify-between rounded-[39px] px-4 py-5 sm:p-6 lg:p-5">
        <div className="font-kode-mono leading-pup text-[52px] font-semibold lg:text-[72px]">{number}</div>

        <p className="leading-pup sm:leading-extrasubpup sm:text-[18px] lg:text-[22px]">{text}</p>
      </div>
    </div>
  );
};

export const HowItWorks: FC = () => {
  return (
    <section className="container pt-27.5 sm:pt-25 lg:pt-40">
      <h2 className="font-gotham-pro leading-subpup text-center text-[30px] tracking-tight sm:text-[50px]">
        Как это работает
      </h2>
      <p className="leading-pup pt-3 text-center sm:hidden">
        Подключение не требует перестройки сайта или собственной рекламной инфраструктуры
      </p>

      <p className="leading-pup hidden pt-7.5 text-center whitespace-pre-wrap sm:block lg:hidden">
        {'Подключение не требует перестройки сайта\nили собственной рекламной инфраструктуры'}
      </p>

      <p className="leading-pup hidden pt-7.5 text-center text-[28px] whitespace-pre-wrap lg:block">
        {'Подключение не требует перестройки сайта nили собственной\nрекламной инфраструктуры'}
      </p>

      <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 pt-7.5 sm:pt-12.5 lg:grid-cols-4 lg:gap-x-5">
        <Card number={1} text="Оставьте заявку на сайте" />
        <Card
          number={2}
          text={
            <>
              С вами свяжется менеджер и проконсультир
              <wbr />
              ует по всем вопросам
            </>
          }
        />
        <Card number={3} text="Подключите ваш первый сайт в личном кабинете" />
        <div className="sm:hidden" />
        <div className="sm:hidden" />
        <Card number={4} text="Начните зарабатывать" />
      </div>

      <div className="flex flex-col items-center pt-5 sm:pt-7.5 lg:pt-20">
        <SendRequestLink />
      </div>
    </section>
  );
};

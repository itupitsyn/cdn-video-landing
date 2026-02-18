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
        'tablet:min-h-65.75 air:min-h-69.25 desktop:min-h-78.25 relative flex min-h-53.5 flex-col overflow-hidden rounded-[40px]',
        className,
      )}
    >
      <div
        className={cn(
          'absolute top-0 right-0 bottom-0 left-0 rounded-[41px] bg-[linear-gradient(136.71deg,#5C6AFF_3.11%,#2A3BFF_20.69%,#0014F5_40.02%,#00025B_94.5%)]',
          'mask-exclude! [mask-clip:content-box,border-box]! p-px [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]',
        )}
      />
      <div className="tablet:p-6 desktop:p-5 flex grow flex-col justify-between rounded-[39px] px-4 py-5">
        <div className="font-kode-mono leading-pup desktop:text-[72px] air:text-[64px] text-[52px] font-semibold">
          {number}
        </div>

        <p className="leading-pup tablet:leading-extrasubpup tablet:text-[18px] air:text-[20px] desktop:text-[22px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export const HowItWorks: FC = () => {
  return (
    <section className="tablet:pt-25 air:pt-29.75 desktop:pt-40 container pt-22.5">
      <h2 className="font-gotham-pro leading-subpup tablet:text-[50px] air:text-[60px] text-center text-[30px] tracking-tight">
        Как это работает
      </h2>
      <p className="leading-pup tablet:hidden pt-3 text-center">
        Подключение не требует перестройки сайта или собственной рекламной инфраструктуры
      </p>

      <p className="leading-pup tablet:block desktop:hidden hidden pt-7.5 text-center whitespace-pre-wrap">
        {'Подключение не требует перестройки сайта\nили собственной рекламной инфраструктуры'}
      </p>

      <p className="leading-pup air:block desktop:text-[28px] hidden pt-7.5 text-center text-[24px] whitespace-pre-wrap">
        {'Подключение не требует перестройки сайта nили собственной\nрекламной инфраструктуры'}
      </p>

      <div className="tablet:pt-12.5 air:grid-cols-4 desktop:gap-x-5 air:pt-11 grid grid-cols-2 gap-x-3 gap-y-2.5 pt-7.5">
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
        <div className="tablet:hidden" />
        <div className="tablet:hidden" />
        <Card number={4} text="Начните зарабатывать" />
      </div>

      <div className="tablet:pt-7.5 desktop:pt-20 air:pt-17.5 flex flex-col items-center pt-5">
        <SendRequestLink />
      </div>
    </section>
  );
};

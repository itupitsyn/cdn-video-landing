import { FC } from 'react';

import { cn } from '../utils/cn';

interface FeatureProps {
  text: string;
}

const Feature: FC<FeatureProps> = ({ text }) => {
  return (
    <div className={cn('relative flex h-45.75 flex-col overflow-hidden rounded-[40px] sm:h-61')}>
      <div
        className={cn(
          'absolute top-0 right-0 bottom-0 left-0 rounded-[41px] bg-[linear-gradient(136.71deg,#F50004_3.11%,#2E1818_94.5%)]',
          'mask-exclude! [mask-clip:content-box,border-box]! p-px [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]',
        )}
      />
      <div className="flex grow flex-col justify-end rounded-[39px] px-4 py-5 sm:p-6">
        <p className="leading-pup sm:text-xl">{text}</p>
      </div>
    </div>
  );
};

export const Features: FC = () => {
  return (
    <>
      <section className="container grid grid-cols-2 gap-x-3 gap-y-2.5 pt-7.5 sm:hidden">
        <Feature text="База контента более 60 000 тайтлов" />
        <Feature text="Выделенный менеджер поддержки " />
        <div />
        <Feature text="Белый фиксированный CPM 40₽" />
        <Feature text="Юридическая помощь в восстановлении площадок " />
        <Feature text="Высокая скорость выхода новинок " />
        <Feature text="Выплаты каждый месяц " />
      </section>

      <section className="container hidden grid-cols-3 gap-x-3 gap-y-2.5 pt-7.5 sm:grid">
        <Feature text="База контента более 60 000 тайтлов" />
        <Feature text="Белый фиксированный CPM 40₽" />
        <Feature text="Выплаты каждый месяц " />
        <Feature text="Юридическая помощь в восстановлении площадок " />
        <Feature text="Выделенный менеджер поддержки " />
        <Feature text="Высокая скорость выхода новинок " />
      </section>
    </>
  );
};

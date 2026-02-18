import { FC } from 'react';

import { cn } from '../utils/cn';

interface FeatureProps {
  text: string;
}

const Feature: FC<FeatureProps> = ({ text }) => {
  return (
    <div
      className={cn(
        'tablet:h-61 desktop:h-63.5 air:h-56.25 relative flex h-53.5 flex-col overflow-hidden rounded-[40px]',
      )}
    >
      <div
        className={cn(
          'absolute top-0 right-0 bottom-0 left-0 rounded-[41px] bg-[linear-gradient(136.71deg,#F50004_3.11%,#2E1818_94.5%)]',
          'mask-exclude! [mask-clip:content-box,border-box]! p-px [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]',
        )}
      />
      <div className="tablet:p-6 desktop:px-7.5 desktop:py-5 flex grow flex-col justify-end rounded-[39px] px-4 py-5">
        <p className="leading-pup tablet:text-[20px] air:text-[24px] desktop:text-[28px]">{text}</p>
      </div>
    </div>
  );
};

export const Features: FC = () => {
  return (
    <>
      <section className="tablet:hidden container grid grid-cols-2 gap-x-3 gap-y-2.5 pt-25">
        <Feature text="База контента более 60 000 тайтлов" />
        <Feature text="Выделенный менеджер поддержки " />
        <div />
        <Feature text="Белый фиксированный CPM 40₽" />
        <Feature text="Юридическая помощь в восстановлении площадок " />
        <Feature text="Высокая скорость выхода новинок " />
        <Feature text="Выплаты каждый месяц " />
      </section>

      <section className="tablet:grid air:hidden container hidden grid-cols-3 gap-x-3 gap-y-2.5 pt-12.5">
        <Feature text="База контента более 60 000 тайтлов" />
        <Feature text="Белый фиксированный CPM 40₽" />
        <Feature text="Выплаты каждый месяц " />
        <Feature text="Юридическая помощь в восстановлении площадок " />
        <Feature text="Выделенный менеджер поддержки " />
        <Feature text="Высокая скорость выхода новинок " />
      </section>

      <section className="air:grid desktop:pt-20 air:gap-x-4 air:gap-y-3 container hidden grid-cols-4 gap-x-5 gap-y-3.25 pt-17.5">
        <Feature text="База контента более 60 000 тайтлов" />
        <div />
        <Feature text="Выделенный менеджер поддержки " />
        <Feature text="Юридическая помощь в восстановлении площадок " />
        <Feature text="Белый фиксированный CPM 40₽" />
        <Feature text="Выплаты каждый месяц " />
        <Feature text="Высокая скорость выхода новинок " />
      </section>
    </>
  );
};

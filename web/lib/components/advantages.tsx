import { FC } from 'react';

import { IconCheck } from '../assets';
import { cn } from '../utils/cn';

interface AdvantageProps {
  text: string;
  className?: string;
}

const Advantage: FC<AdvantageProps> = ({ text, className }) => {
  return (
    <div
      className={cn(
        'tablet:min-h-65.75 desktop:min-h-78.25 air:min-h-69.25 relative flex min-h-53.5 flex-col overflow-hidden rounded-[40px]',
        className,
      )}
    >
      <div
        className={cn(
          'absolute top-0 right-0 bottom-0 left-0 rounded-[41px] bg-[linear-gradient(136.71deg,#F50004_3.11%,#2E1818_94.5%)]',
          'mask-exclude! [mask-clip:content-box,border-box]! p-px [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]',
        )}
      />
      <div className="tablet:p-6 desktop:px-7.5 desktop:py-5 flex grow flex-col justify-between rounded-[39px] px-4 py-5">
        <IconCheck className="desktop:size-7.75" />

        <p className="leading-pup tablet:leading-extrasubpup tablet:text-[18px] air:text-[20px] desktop:text-[22px]">
          {text}
        </p>
      </div>
    </div>
  );
};

export const Advantages: FC = () => {
  return (
    <section className="tablet:pt-25 desktop:pt-40 air:pt-29.75 container pt-22.5">
      <h2 className="font-gotham-pro leading-subpup tablet:text-[50px] desktop:text-[72px] air:text-[60px] text-center text-[30px] tracking-tight">
        Просто и быстро
      </h2>

      <p className="leading-pup tablet:hidden pt-3 text-center">
        CDNvideoHub позволяет подключить готовый видеоплеер с рекламной монетизацией и получать доход с каждого запуска
        видео
      </p>

      <p className="leading-pup tablet:block air:hidden hidden pt-7.5 text-center text-[20px] whitespace-pre-wrap">
        {
          'CDNvideoHub позволяет подключить готовый\nвидеоплеер с рекламной монетизацией и получать\nдоход с каждого запуска видео'
        }
      </p>

      <p className="leading-pup air:block desktop:text-[28px] hidden pt-7.5 text-center text-[24px] whitespace-pre-wrap">
        {
          'CDNvideoHub позволяет подключить готовый видеоплеер\nс рекламной монетизацией и получать доход с каждого запуска видео'
        }
      </p>

      <div className="tablet:grid-cols-3 tablet:pt-12.5 air:pt-11.5 air:grid-cols-4 desktop:pt-12.5 grid grid-cols-2 gap-x-3 gap-y-2.5 pt-7.5">
        <Advantage
          className="tablet:row-span-1 air:col-span-2 row-span-2"
          text="Без разработки собственного ad-stack"
        />
        <Advantage text="Без поиска рекламодателей" />
        <Advantage text="Без операционных рисков" />
      </div>
    </section>
  );
};

import { FC } from 'react';

import { IconCheck } from '../assets';
import { cn } from '../utils/cn';

interface AdvantageProps {
  text: string;
  className?: string;
}

const Advantage: FC<AdvantageProps> = ({ text, className }) => {
  return (
    <div className={cn('relative flex min-h-53.5 flex-col overflow-hidden rounded-[40px]', className)}>
      <div
        className={cn(
          'absolute top-0 right-0 bottom-0 left-0 rounded-[41px] bg-[linear-gradient(136.71deg,#F50004_3.11%,#2E1818_94.5%)]',
          'mask-exclude! [mask-clip:content-box,border-box]! p-px [mask:linear-gradient(#fff_0_0)_padding-box,linear-gradient(#fff_0_0)]',
        )}
      />
      <div className="flex grow flex-col justify-between rounded-[39px] px-4 py-5">
        <IconCheck />

        <p className="leading-pup">{text}</p>
      </div>
    </div>
  );
};

export const Advantages: FC = () => {
  return (
    <section className="container pt-27.5">
      <h2 className="font-gotham-pro leading-subpup text-center text-[30px]">Просто и быстро</h2>
      <p className="leading-pup pt-3 text-center">
        CDNvideoHub позволяет подключить готовый видеоплеер с рекламной монетизацией и получать доход с каждого запуска
        видео
      </p>

      <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 pt-7.5">
        <Advantage className="row-span-2" text="Без разработки собственного ad-stack" />
        <Advantage text="Без поиска рекламодателей" />
        <Advantage text="Без операционных рисков" />
      </div>
    </section>
  );
};

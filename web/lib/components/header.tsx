import { FC } from 'react';

import { cn } from '../utils/cn';
import { BecomePartnerLink } from './become-partner-link';
import { VideoPlayer } from './video-player';

export const Header: FC = () => {
  return (
    <header className="flex flex-col items-center">
      <div className="container flex flex-col items-center">
        <h1
          className={cn(
            'font-gotham-pro leading-pup pt-27.5 pr-2 text-[50px] font-bold tracking-tighter',
            'tablet:pt-15 tablet:text-[75px]',
            'air:text-[97px] air:pt-22',
            'desktop:pt-20 desktop:text-[117px]',
            'huge:pt-37.5',
            'bg-[linear-gradient(90deg,rgba(210,0,0,0.4)_0%,rgba(62,0,0,0.4)_34.5%,rgba(0,29,146,0.4)_100%),linear-gradient(0deg,#F50004,#F50004)]',
            'bg-clip-text text-transparent',
          )}
        >
          CDN VideoHub
        </h1>

        <p className={cn('leading-pup pt-3 text-center whitespace-pre-wrap', 'tablet:hidden')}>
          {'Установи плеер CDNvideoHub\nи зарабатывай на каждом\nпоказе рекламы'}
        </p>
        <p
          className={cn(
            'leading-pup hidden pt-2 text-center whitespace-pre-wrap',
            'tablet:block',
            'air:text-[24px] air:pt-0',
            'desktop:text-[28px]',
          )}
        >
          {'Установи плеер CDNvideoHub и зарабатывай\nна каждом показе рекламы'}
        </p>
      </div>

      <VideoPlayer className="tablet:mt-6 desktop:mt-12.5 air:mt-7 mt-7.75" />

      <div className="tablet:mt-7.75 air:mt-9.5 desktop:mt-7.5 container mt-25 flex flex-col items-center">
        <BecomePartnerLink />
      </div>
    </header>
  );
};

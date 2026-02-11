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
            'font-gotham-pro pt-29 text-[50px] leading-[120%] font-bold tracking-tighter',
            'sm:pt-15 sm:text-[75px]',
            'lg:pt-37.5 lg:text-[117px]',
            'bg-[linear-gradient(90deg,rgba(210,0,0,0.4)_0%,rgba(62,0,0,0.4)_34.5%,rgba(0,29,146,0.4)_100%),linear-gradient(0deg,#F50004,#F50004)]',
            'bg-clip-text text-transparent',
          )}
        >
          CDN VideoHub
        </h1>

        <p className="leading-pup pt-3 text-center whitespace-pre-wrap sm:hidden">
          {'Установи плеер CDNvideoHub\nи зарабатывай на каждом\nпоказе рекламы'}
        </p>
        <p className="leading-pup hidden pt-2 text-center whitespace-pre-wrap sm:block lg:text-[28px]">
          {'Установи плеер CDNvideoHub и зарабатывай\nна каждом показе рекламы'}
        </p>
      </div>

      <VideoPlayer className="mt-7.75 sm:mt-6 lg:mt-12.5" />

      <div className="container mt-41 flex flex-col items-center sm:mt-7.75">
        <BecomePartnerLink />
      </div>
    </header>
  );
};

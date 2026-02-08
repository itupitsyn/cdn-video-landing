import { FC } from 'react';

import { cn } from '../utils/cn';
import { LinkButton } from './link-button';
import { VideoPlayer } from './video-player';

export const Header: FC = () => {
  return (
    <section className="flex flex-col items-center pt-29">
      <div className="container flex flex-col items-center">
        <h1
          className={cn(
            'font-gotham-pro text-[50px] leading-[120%] font-bold tracking-tighter',
            'bg-[linear-gradient(90deg,rgba(210,0,0,0.4)_0%,rgba(62,0,0,0.4)_34.5%,rgba(0,29,146,0.4)_100%),linear-gradient(0deg,#F50004,#F50004)]',
            'bg-clip-text text-transparent',
          )}
        >
          CDN VideoHub
        </h1>

        <p className="leading-pup pt-3 text-center whitespace-pre-wrap">
          {'Установи плеер CDNvideoHub\nи зарабатывай на каждом\nпоказе рекламы'}
        </p>
      </div>

      <VideoPlayer className="mt-7.75" />

      <div className="container mt-41 flex flex-col items-center">
        <LinkButton color="red" className="w-full text-center sm:max-w-99.75 lg:max-w-172.5">
          Стать партнером
        </LinkButton>
      </div>
    </section>
  );
};

'use client';

import { FC } from 'react';

import { FullscreenIcon, KebabIcon, PlayIcon, Timer, VolumeIcon } from '../assets';
import { cn } from '../utils/cn';
import { Posters } from './posters';

interface VideoPlayerProps {
  className?: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ className }) => {
  return (
    <div className={cn('flex w-full flex-col items-center overflow-hidden', className)}>
      <div
        className={cn(
          'relative mx-5 h-52 w-full max-w-93.25 rounded-[30px] bg-black',
          'lg:h-119.75 lg:max-w-214.5',
          'sm:h-95.75 sm:max-w-162.25',
        )}
      >
        <div className="absolute top-0 left-0 z-2 h-[80%] w-4 rounded-[inherit] bg-black sm:w-15 lg:h-[90%] lg:w-10" />
        <div className="absolute top-0 right-0 z-2 h-[80%] w-4 rounded-[inherit] bg-black sm:w-15 lg:h-[90%] lg:w-10" />

        <div className="px-4 pt-7 sm:px-7.5 sm:pt-15 lg:px-10 lg:pt-19.5">
          <Posters />
        </div>

        <div
          className={cn(
            'absolute bottom-2 flex w-full flex-col gap-1',
            'sm:bottom-3.5 sm:gap-1.5',
            'lg:bottom-4.5 lg:gap-2.25',
          )}
        >
          <div className={cn('mr-3.5 ml-3.25 flex justify-between', 'sm:mr-6.5 sm:ml-5.5', 'lg:mr-8.75 lg:ml-7')}>
            <div className="flex items-center gap-1">
              <div className="flex size-5 items-center justify-center sm:size-8.75 lg:size-11.25">
                <PlayIcon className="sm:size-4.25 lg:size-5.75" />
              </div>

              <Timer className="sm:h-3.5 sm:w-14.5 lg:h-4.75 lg:w-19.25" />
            </div>

            <div className="flex items-center gap-1 sm:gap-1.75 lg:gap-2.25">
              <div className="flex size-5 items-center justify-center sm:size-8.75 lg:size-11.25">
                <VolumeIcon className="sm:size-4.25 lg:size-5.75" />
              </div>

              <div className="flex size-5 items-center justify-center sm:size-8.75 lg:size-11.25">
                <FullscreenIcon className="sm:size-4.25 lg:size-5.75" />
              </div>

              <div className="flex size-5 items-center justify-center sm:size-8.75 lg:size-11.25">
                <KebabIcon className="sm:size-4.25 lg:size-5.75" />
              </div>
            </div>
          </div>

          <hr
            className={cn(
              'mr-3.75 ml-3 h-0.5 rounded-full border-0 bg-white/70',
              'sm:mr-6.75 sm:ml-5 sm:h-0.75',
              'lg:mr-8.75 lg:ml-6.5 lg:h-1.25',
            )}
          />
        </div>
      </div>
    </div>
  );
};

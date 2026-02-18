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
          'relative mx-5 h-52 w-full max-w-93.25 rounded-[14px] bg-black',
          'tablet:h-90.75 tablet:max-w-162.25 tablet:rounded-[7px]',
          'air:rounded-[14px] air:max-w-163 air:h-91',
          'desktop:h-119.75 desktop:max-w-214.5 desktop:rounded-[18px]',
        )}
      >
        <div className="tablet:w-15 desktop:h-[90%] desktop:w-10 absolute top-0 left-0 z-2 h-[87%] w-4 rounded-[inherit] bg-black" />
        <div className="tablet:w-15 desktop:h-[90%] desktop:w-10 absolute top-0 right-0 z-2 h-[87%] w-4 rounded-[inherit] bg-black" />

        <div className="tablet:px-7.5 tablet:pt-15 desktop:px-10 desktop:pt-19.5 px-4 pt-7">
          <Posters />
        </div>

        <div
          className={cn(
            'absolute bottom-2 flex w-full flex-col gap-1',
            'tablet:bottom-3.5 tablet:gap-1.5',
            'desktop:bottom-4.5 desktop:gap-2.25',
          )}
        >
          <div
            className={cn(
              'mr-3.5 ml-3.25 flex justify-between',
              'tablet:mr-6.5 tablet:ml-5.5',
              'desktop:mr-8.75 desktop:ml-7',
            )}
          >
            <div className="flex items-center gap-1">
              <div className="tablet:size-8.75 desktop:size-11.25 flex size-5 items-center justify-center">
                <PlayIcon className="tablet:size-4.25 desktop:size-5.75" />
              </div>

              <Timer className="tablet:h-3.5 tablet:w-14.5 desktop:h-4.75 desktop:w-19.25" />
            </div>

            <div className="tablet:gap-1.75 desktop:gap-2.25 flex items-center gap-1">
              <div className="tablet:size-8.75 desktop:size-11.25 flex size-5 items-center justify-center">
                <VolumeIcon className="tablet:size-4.25 desktop:size-5.75" />
              </div>

              <div className="tablet:size-8.75 desktop:size-11.25 flex size-5 items-center justify-center">
                <FullscreenIcon className="tablet:size-4.25 desktop:size-5.75" />
              </div>

              <div className="tablet:size-8.75 desktop:size-11.25 flex size-5 items-center justify-center">
                <KebabIcon className="tablet:size-4.25 desktop:size-5.75" />
              </div>
            </div>
          </div>

          <hr
            className={cn(
              'mr-3.75 ml-3 h-0.5 rounded-full border-0 bg-white/70',
              'tablet:mr-6.75 tablet:ml-5 tablet:h-0.75',
              'desktop:mr-8.75 desktop:ml-6.5 desktop:h-1.25',
            )}
          />
        </div>
      </div>
    </div>
  );
};

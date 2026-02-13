import { FC } from 'react';

import { BG1, BG2, BG2SM, BG3, BG3SM, BG4, BG4SM } from '../assets';
import { cn } from '../utils/cn';

export const Background: FC = () => {
  return (
    <div className="absolute inset-0 -z-1 overflow-hidden">
      <div className="relative container h-full w-full">
        <div
          className={cn(
            'absolute top-39.75 left-33.25 size-99 bg-[#FF001AB8] opacity-40 blur-[134px]',
            'sm:top-29.25 sm:left-74 sm:size-148.25 sm:blur-[200px]',
            'lg:top-102.25 lg:left-169.5 lg:size-169.25 lg:blur-[224px]',
          )}
        />
        <div
          className={cn(
            'absolute -top-32 -left-54 h-233 w-118.75 rotate-[-36deg] bg-[radial-gradient(27.23%_50%_at_50%_50%,#3700FF_0%,rgba(234,0,255,0)_100%)] opacity-40 blur-[137.5px]',
            'sm:-top-33 sm:-left-60 sm:h-283.75 sm:w-144.75 sm:blur-[167px]',
            'lg:-top-50 lg:-left-60 lg:h-348 lg:w-247.25',
          )}
        />

        <BG1
          className={cn(
            'absolute top-90.25 -left-126.75 h-263.5 w-254.5',
            'sm:top-67.75 sm:-left-115.5 sm:h-302.25 sm:w-293.75',
            'lg:top-112.5 lg:-left-115.5 lg:h-382 lg:w-353.75',
          )}
        />

        <BG2 className="absolute top-287.5 -left-53.25 h-236.25 w-269.25 sm:hidden" />
        <BG2SM
          className={cn(
            'absolute top-207.25 left-36.25 hidden h-284.75 w-324.25 sm:block',
            'lg:top-251.75 lg:left-107 lg:h-364.75 lg:w-387.5',
          )}
        />

        <BG3 className="absolute top-404.75 -left-157.25 size-373.5 sm:hidden" />
        <BG3SM
          className={cn(
            'absolute top-254.25 -left-199.25 hidden size-472.75 sm:block',
            'top-327 -left-267.5 lg:size-635.25',
          )}
        />

        <BG4 className="absolute top-1255.5 -left-18.5 h-313.5 w-333 sm:hidden" />
        <BG4SM
          className={cn(
            'absolute top-1195 left-34.5 hidden h-314.5 w-348.25 sm:block',
            'lg:top-1202.25 lg:left-97 lg:h-364.75 lg:w-397.5',
          )}
        />
      </div>
    </div>
  );
};

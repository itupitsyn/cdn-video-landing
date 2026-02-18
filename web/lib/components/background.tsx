import Image from 'next/image';
import { FC } from 'react';

import { BG1, BG2, BG2SM, BG3, BG3SM, BG4, BG4Air } from '../assets';
import BG1Huge from '../assets/images/bg1-huge.webp';
import BG2Huge from '../assets/images/bg2-huge.webp';
import BG3Huge from '../assets/images/bg3-huge.webp';
import BG4Huge from '../assets/images/bg4-huge.webp';
import { cn } from '../utils/cn';

export const Background: FC = () => {
  return (
    <div className="absolute inset-0 -z-1 overflow-hidden">
      <div className="relative container h-full w-full">
        <div
          className={cn(
            'absolute top-39.75 left-33.25 size-99 bg-[#FF001AB8] opacity-40 blur-[134px]',
            'tablet:top-29.25 tablet:left-74 tablet:size-148.25 tablet:blur-[200px]',
            'desktop:top-102.25 desktop:left-169.5 desktop:size-169.25 desktop:blur-[224px]',
          )}
        />
        <div
          className={cn(
            'absolute -top-32 -left-54 h-233 w-118.75 rotate-[-36deg] bg-[radial-gradient(27.23%_50%_at_50%_50%,#3700FF_0%,rgba(234,0,255,0)_100%)] opacity-40 blur-[137.5px]',
            'tablet:-top-33 tablet:-left-60 tablet:h-283.75 tablet:w-144.75 tablet:blur-[167px]',
            'desktop:-top-50 desktop:-left-60 desktop:h-348 desktop:w-247.25',
          )}
        />
        <BG1
          className={cn(
            'absolute top-90.25 -left-126.75 h-263.5 w-254.5',
            'tablet:top-67.75 tablet:-left-115.5 tablet:h-302.25 tablet:w-293.75',
            'desktop:top-112.5 desktop:-left-115.5 desktop:h-382 desktop:w-353.75',
            'huge:hidden',
          )}
        />
        <Image
          src={BG1Huge}
          alt=""
          className="huge:block absolute top-229.25 -left-162.75 hidden h-375 w-360.5"
          width={3101}
          height={2983}
        />
        <BG2 className="tablet:hidden absolute top-287.5 -left-53.25 h-236.25 w-269.25" />
        <BG2SM
          className={cn(
            'tablet:block absolute top-207.25 left-36.25 hidden h-284.75 w-324.25',
            'desktop:top-251.75 desktop:left-107 desktop:h-364.75 desktop:w-387.5',
            'huge:hidden',
          )}
        />
        <Image
          src={BG2Huge}
          alt=""
          className="huge:block absolute top-291.25 left-119.5 hidden h-325.25 w-387.5"
          width={3185}
          height={2716}
        />

        <BG3 className="tablet:hidden absolute top-404.75 -left-157.25 size-373.5" />
        <BG3SM
          className={cn(
            'tablet:block absolute top-254.25 -left-199.25 hidden size-472.75',
            'desktop:size-635.25 top-327 -left-267.5',
            'huge:hidden',
          )}
        />
        <Image
          src={BG3Huge}
          alt=""
          className="huge:block absolute top-389.75 -left-51.25 hidden size-575"
          width={4654}
          height={4654}
        />

        <BG4
          className={cn(
            'absolute -right-212.5 -bottom-100 h-314.5 w-348.25',
            'tablet:-bottom-112.5 tablet:-right-174',
            'air:hidden',
          )}
        />
        <BG4Air
          className={cn(
            'absolute hidden',
            'air:block air:-bottom-125 air:-right-134 air:w-397.5 air:h-364.75',
            'huge:hidden',
          )}
        />
        <Image
          src={BG4Huge}
          alt=""
          className="huge:block absolute top-1088.25 left-152 hidden h-373.5 w-532.75 rotate-12"
          width={4262}
          height={2988}
        />
      </div>
    </div>
  );
};

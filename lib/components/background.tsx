import { FC } from 'react';

import { BG1, BG2, BG3, BG4 } from '../assets';

export const Background: FC = () => {
  return (
    <div className="absolute inset-0 -z-1 overflow-hidden">
      <div className="absolute top-39.75 left-33.25 size-99 bg-[#FF001AB8] opacity-40 blur-[134px]" />
      <div className="absolute -top-32 -left-54 h-233 w-118.75 rotate-[-36deg] bg-[radial-gradient(27.23%_50%_at_50%_50%,#3700FF_0%,rgba(234,0,255,0)_100%)] opacity-40 blur-[137.5]" />

      <BG1 className="absolute top-90.25 -left-126.75 h-263.5 w-254.5" />
      <BG2 className="absolute top-287.5 -left-53.25 h-236.25 w-269.25" />
      <BG3 className="absolute top-404.75 -left-157.25 h-373.5 w-373.5" />
      <BG4 className="absolute top-1255.5 -left-18.5 h-313.5 w-333" />
    </div>
  );
};

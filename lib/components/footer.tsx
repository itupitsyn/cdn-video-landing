import { FC } from 'react';

import { cn } from '../utils/cn';

export const Footer: FC = () => {
  return (
    <footer className="container py-9 sm:pt-17.25 sm:pb-8.75 lg:pt-11.25 lg:pb-18">
      <div
        className={cn(
          'leading-pup! font-gotham-pro text-4xl font-bold tracking-tighter',
          'b50:text-[112px] b27:text-[57px] sm:text-7xl',
        )}
      >
        CDNvideoHub
      </div>

      <div className="flex flex-col gap-7.5 pt-6.25 sm:gap-20 lg:max-w-303.5 lg:flex-row-reverse lg:justify-between lg:gap-8 lg:pt-14.25">
        <div className="flex flex-wrap gap-5.25 lg:flex-col">
          <a
            href="https://t.me/CVHsupportBot"
            className="hover:white/80 leading-extrasubpup b27:text-[22px] text-xl underline underline-offset-4 transition-colors"
          >
            @CVHsupportBot
          </a>
          <a
            href="mailto:partner@cdnvideohub.com"
            className="hover:white/80 leading-extrasubpup b27:text-[22px] text-xl underline underline-offset-4 transition-colors"
          >
            partner@cdnvideohub.com
          </a>
        </div>

        <div className="leading-subpup sm:leading-extrasubpup flex flex-col gap-6 text-[18px] tracking-tighter text-white/50 sm:gap-5.25 sm:text-[22px] sm:text-white lg:text-white/50">
          <div>Политика конфиденциальности</div>
          <div>Согласие на обработку персональных данных</div>
          <div>Пользовательское соглашение</div>
        </div>
      </div>

      <div className="font-gotham-pro leading-extrasubpup pt-7.5 tracking-tighter text-[#8C8C8C] sm:pt-12.75 sm:text-2xl">
        © CDNvideoHub — монетизация видеоконтента
      </div>
    </footer>
  );
};

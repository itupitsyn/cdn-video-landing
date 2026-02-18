import { FC } from 'react';

import { cn } from '../utils/cn';

export const Footer: FC = () => {
  return (
    <footer className="tablet:pt-17.25 tablet:pb-8.75 desktop:pt-11.25 desktop:pb-18 air:pt-40 air:pb-24 container pt-22.5 pb-8">
      <div
        className={cn(
          'leading-pup! font-gotham-pro text-4xl font-bold tracking-[-0.065em]',
          'b50:text-[112px] b27:text-[57px] tablet:text-7xl',
        )}
      >
        CDNvideoHub
      </div>

      <div className="tablet:gap-20 air:max-w-303.5 air:flex-row-reverse air:justify-between air:gap-8 air:pt-14.25 flex flex-col gap-7.5 pt-6.5">
        <div className="air:flex-col flex flex-wrap gap-5.25">
          <a
            href="https://t.me/CVHsupportBot"
            className="leading-extrasubpup b27:text-[22px] text-xl underline decoration-1 underline-offset-6 transition-colors hover:text-white/80"
          >
            @CVHsupportBot
          </a>
          <a
            href="mailto:partner@cdnvideohub.com"
            className="leading-extrasubpup b27:text-[22px] text-xl underline decoration-1 underline-offset-6 transition-colors hover:text-white/80"
          >
            partner@cdnvideohub.com
          </a>
        </div>

        <div className="leading-subpup tablet:leading-extrasubpup tablet:gap-6 tablet:text-[22px] tablet:text-white air:text-white/50 flex flex-col gap-6 text-[18px] tracking-tighter text-white/50">
          <div>Политика конфиденциальности</div>
          <div>Согласие на обработку персональных данных</div>
          <div>Пользовательское соглашение</div>
        </div>
      </div>

      <div className="font-gotham-pro leading-extrasubpup tablet:pt-12.75 tablet:text-2xl pt-7.5 tracking-tighter text-[#8C8C8C]">
        © CDNvideoHub — монетизация видеоконтента
      </div>
    </footer>
  );
};

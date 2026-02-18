import Link from 'next/link';
import { AnchorHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import { cn } from '@/lib/utils/cn';

interface LinkButtonProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  variant?: 'outline' | 'default';
  color?: 'red' | 'blue' | 'black';
}

export const LinkButton: FC<LinkButtonProps> = ({ className, href, variant, color, ...props }) => {
  return (
    <Link
      href={href || ''}
      {...props}
      className={cn(
        'leading-extrapup py-5.25 font-medium transition-colors hover:cursor-pointer',
        'rounded-[30px] border border-solid',
        'tablet:py-3.75 tablet:text-[18px]',
        'air:text-[20px] air:py-5.25',
        'desktop:py-5.75 desktop:text-[24px]',
        variant === 'outline'
          ? {
              'border-[#F50004] hover:bg-[#F50004]': color === 'red',
              'border-[#0015FF] hover:bg-[#0015FF]': color === 'blue',
              'border-black hover:bg-black': color === 'black',
            }
          : {
              'border-[#F50004] bg-[#F50004] hover:bg-transparent': color === 'red',
              'border-[#0015FF] bg-[#0015FF] hover:bg-transparent': color === 'blue',
              'border-black bg-black hover:bg-transparent': color === 'black',
            },
        className,
      )}
    />
  );
};

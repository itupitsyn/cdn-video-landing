import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';

import { cn } from '@/lib/utils/cn';

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  variant?: 'outline' | 'default';
  color?: 'red' | 'blue' | 'black';
}

export const Button: FC<ButtonProps> = ({ className, variant = 'default', color = 'black', ...props }) => {
  return (
    <button
      {...props}
      className={cn(
        'leading-extrapup py-5 font-medium transition-colors hover:cursor-pointer sm:py-3.75 sm:text-[18px] lg:py-5.75 lg:text-2xl',
        'rounded-[30px] border border-solid',
        variant === 'outline'
          ? {
              'border-[#F50004] hover:bg-[#F50004]': color === 'red',
              'border-[#0015FF] hover:bg-[#0015FF]': color === 'blue',
              'border-black hover:bg-black': color === 'black',
            }
          : {
              'border-[#F50004] bg-[#F50004] hover:bg-transparent': color === 'red',
              'border-[#0015FF] bg-[#0015FF] hover:bg-transparent': color === 'blue',
              'border-black bg-black hover:border-[#0015FF] hover:bg-[#0015FF]': color === 'black',
            },
        className,
      )}
    />
  );
};

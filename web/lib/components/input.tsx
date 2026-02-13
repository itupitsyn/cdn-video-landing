import { DetailedHTMLProps, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils/cn';

export interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  isInvalid?: boolean;
  errorText?: string;
}

const Component: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { className, isInvalid, errorText, ...props },
  ref,
) => {
  return (
    <div className={cn('relative inline-flex flex-col', className)}>
      <input
        ref={ref}
        className={cn(
          'border border-solid',
          isInvalid ? 'border-red-600' : 'border-white/20 hover:border-white/50 focus:border-white/50',
          'leading-extrasubpup rounded-[30px] px-6 py-5.5 text-[18px] text-white/60 transition-colors outline-none placeholder:text-white/60 sm:px-6 sm:py-6 lg:px-6 lg:py-7.5 lg:text-2xl',
          'not-placeholder-shown:text-white focus:text-white',
        )}
        {...props}
      />

      {errorText && <div className="leading-pup absolute bottom-1.5 left-5 text-xs text-red-600">{errorText}</div>}
    </div>
  );
};

export const Input = forwardRef(Component);

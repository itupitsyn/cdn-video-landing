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
          'text-input-border placeholder:text-input-border border-b border-solid px-1 py-3.5 leading-[110%] font-light tracking-tight transition-colors outline-none lg:text-xl',
          'not-placeholder-shown:text-white focus:text-white',
          isInvalid ? 'border-error' : 'border-input-border not-placeholder-shown:border-white focus:border-white',
        )}
        {...props}
      />

      {errorText && <div className="leading-pup absolute top-[110%] left-0 text-xs text-red-600">{errorText}</div>}
    </div>
  );
};

export const Input = forwardRef(Component);

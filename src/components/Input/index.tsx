import * as React from 'react';
import { cn } from '@/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isValid?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isValid = true, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'w-full cursor-pointer border border-light-gray px-3 py-2 rounded-lg tracking-tighter placeholder:font-medium placeholder:text-cool-gray focus-visible:outline-none focus-visible:border-purplish-blue disabled:cursor-not-allowed disabled:opacity-50',
          className,
          !isValid &&
            'border-strawberry-red focus-visible:border-strawberry-red',
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = 'Input';

export { Input };

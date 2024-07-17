import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import { Spinner } from '@/components/Loaders';

const buttonVariants = cva(
  'inline-flex items-center justify-center transition-colors ease-out duration-300 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-marine-blue text-magnolia rounded-lg tracking-tight font-medium hover:bg-purplish-blue hover:opacity-75 active:bg-primary/95 disabled:bg-[#EFEFF0] disabled:text-[#AFB1B6]',
        secondary: 'p-0 bg-transparent text-cool-gray hover:bg-transparent',
      },
      size: {
        default: 'px-7 py-2.5',
        sm: 'h-6 px-[0.6rem] py-[0.4rem] text-[0.6rem]',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-8 md:h-10 w-8 md:w-10',
        none: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
        disabled={isLoading ? true : props.disabled}
      >
        {isLoading ? <Spinner /> : children}
      </button>
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };

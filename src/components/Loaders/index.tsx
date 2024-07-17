import { cn } from '@/utils';

export const Spinner = ({ className }: { className?: string }) => (
  <svg
    className={cn('spinner', className)}
    viewBox="25 25 50 50"
    strokeWidth="5"
  >
    <circle cx="50" cy="50" r="20" />
  </svg>
);

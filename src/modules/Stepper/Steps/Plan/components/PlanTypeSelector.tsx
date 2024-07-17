import { useController } from 'react-hook-form';
import { Switch } from '@/components/Switch';
import { cn } from '@/utils';

export const PlanTypeSelector = () => {
  const {
    field: { value: planType, onChange },
  } = useController({ name: 'type' });
  const checked = planType === 'yearly';

  const handleChange = (checked: boolean) => {
    onChange(checked ? 'yearly' : 'monthly');
  };

  return (
    <div className="w-full bg-alabaster rounded-xl p-3 flex gap-6 justify-center items-center mt-2">
      <span
        className={cn('text-sm font-semibold tracking-tight text-cool-gray', {
          'text-marine-blue': !checked,
        })}
      >
        Monthly
      </span>
      <Switch checked={checked} onChange={handleChange} />
      <span
        className={cn('text-sm font-semibold tracking-tight text-cool-gray', {
          'text-marine-blue': checked,
        })}
      >
        Yearly
      </span>
    </div>
  );
};

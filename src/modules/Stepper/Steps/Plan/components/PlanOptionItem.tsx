import { FC } from 'react';
import { cn } from '@/utils';

interface PlanOptionItemProps {
  name: string;
  price: number;
  icon: string;
  isMonthlyPlan: boolean;
  isSelected: boolean;
  onClick(): void;
}

export const PlanOptionItem: FC<PlanOptionItemProps> = ({
  name,
  price,
  isMonthlyPlan,
  icon,
  isSelected,
  onClick,
}) => {
  const planSuffix = isMonthlyPlan ? 'mo' : 'yr';

  return (
    <div
      className={cn(
        'flex md:flex-col gap-4 md:gap-0 p-4 rounded-lg border border-light-gray cursor-pointer hover:border-purplish-blue',
        {
          'border-purplish-blue bg-alabaster': isSelected,
        },
      )}
      onClick={onClick}
      role="button"
    >
      <img src={icon} alt={name} className="md:mb-8 w-10 " />
      <div>
        <p className="text-marine-blue font-semibold mb-1 tracking-tight">
          {name}
        </p>
        <p className="text-cool-gray text-sm font-medium mb-1">{`${price}/${planSuffix}`}</p>
        {!isMonthlyPlan && (
          <p className="text-xs tracking-tight text-marine-blue font-medium">
            2 months free
          </p>
        )}
      </div>
    </div>
  );
};

import { ChangeEvent, FC } from 'react';
import { cn } from '@/utils';

interface AddOnOptionItemProps {
  name: string;
  description: string;
  price: number;
  isMonthlyPlan: boolean;
  isSelected: boolean;
  onChange(_: ChangeEvent<HTMLInputElement>): void;
}

export const AddOnOptionItem: FC<AddOnOptionItemProps> = ({
  name,
  description,
  price,
  isMonthlyPlan,
  isSelected,
  onChange,
}) => {
  const priceSuffix = isMonthlyPlan ? 'mo' : 'yr';

  return (
    <label
      htmlFor={name}
      className={cn(
        'flex items-center justify-between p-4 rounded-lg border border-light-gray cursor-pointer hover:border-purplish-blue',
        { 'border-purplish-blue bg-alabaster': isSelected },
      )}
    >
      <div className="flex items-center gap-4">
        <div className="relative h-5">
          <input
            type="checkbox"
            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purbg-purplish-blue checked:bg-purplish-blue checked:before:bg-purplish-blue"
            id={name}
            checked={isSelected}
            onChange={onChange}
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-marine-blue font-semibold tracking-tight">
            {name}
          </p>
          <p className="text-cool-gray text-sm tracking-tight">{description}</p>
        </div>
      </div>
      <div className="font-medium text-purplish-blue text-sm">{`+$${price}/${priceSuffix}`}</div>
    </label>
  );
};

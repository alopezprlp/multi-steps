import { ChangeEvent } from 'react';
import { useController } from 'react-hook-form';

import { addOnOptions } from '../data';

import { AddOnOptionItem } from './AddOnOptionItem';
import usePlans from '@/hooks/usePlans.ts';
import { AddOn } from '@/store/slices/addOnSlice.ts';
import { FormMessage } from '@/components/Forms';

export const AddOnsOptions = () => {
  const {
    plans: { type },
  } = usePlans();

  const isMonthlyPlan = type === 'monthly';

  const {
    fieldState: { error },
    field: { value, onChange },
  } = useController({ name: 'addOn' });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    option: { name: string; price: number },
  ) => {
    onChange(
      event.target.checked
        ? [...value, option]
        : value.filter(({ name }: { name: string }) => name !== option.name),
    );
  };

  return (
    <>
      {error ? (
        <div className={'flex justify-end'}>
          <FormMessage>{error?.message}</FormMessage>
        </div>
      ) : null}

      <ul className="flex flex-col gap-4">
        {addOnOptions.map(
          ({ name, description, monthlyPrice, yearlyPrice }, index) => (
            <li key={index}>
              <AddOnOptionItem
                name={name}
                description={description}
                price={isMonthlyPlan ? monthlyPrice : yearlyPrice}
                isMonthlyPlan={isMonthlyPlan}
                isSelected={(value as AddOn[]).some(
                  ({ name: addOnName }) => addOnName === name,
                )}
                onChange={event =>
                  handleChange(event, {
                    name,
                    price: isMonthlyPlan ? monthlyPrice : yearlyPrice,
                  })
                }
              />
            </li>
          ),
        )}
      </ul>
    </>
  );
};

import { ButtonsLayout, LayoutForm } from '@/layouts';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/Forms';
import { Button } from '@/components/Button';
import useSteps from '@/hooks/useSteps.ts';
import {
  StateAddOnType,
  StateAddOnSchema,
} from '@/modules/Stepper/Steps/Add-ons/validations.ts';
import useAddOn from '@/hooks/useAddOn.ts';
import { AddOnsOptions } from '@/modules/Stepper/Steps/Add-ons/components/AddOnsOptions.tsx';

export const AddOns = () => {
  const { prev, next } = useSteps();
  const { saveAddOns, addon } = useAddOn();

  const form = useForm<StateAddOnType>({
    resolver: zodResolver(StateAddOnSchema),
    defaultValues: {
      addOn: addon ?? [],
    },
  });

  function onSubmit(data: StateAddOnType) {
    saveAddOns(data);
    next();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full">
        <LayoutForm>
          <AddOnsOptions />
          <ButtonsLayout>
            <Button variant={'secondary'} onClick={prev}>
              Go Back
            </Button>
            <Button type="submit">Next Step</Button>
          </ButtonsLayout>
        </LayoutForm>
      </form>
    </Form>
  );
};

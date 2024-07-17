import { ButtonsLayout, LayoutForm } from '@/layouts';
import useSteps from '@/hooks';

import { PlanOptions } from './PlanOptions';
import { PlanTypeSelector } from './PlanTypeSelector';
import { Form } from '@/components/Forms';
import { Button } from '@/components/Button';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  FormPlansSchema,
  FormPlansValues,
} from '@/modules/Stepper/Steps/Plan/validations.ts';
import usePlans from '@/hooks/usePlans.ts';
import { Plan } from '@/store/slices/planSlice.ts';

export const Plans = () => {
  const { prev, next } = useSteps();
  const { plans, savePlans } = usePlans();
  const form = useForm<FormPlansValues>({
    resolver: zodResolver(FormPlansSchema),
    defaultValues: {
      name: plans.name ?? 'Arcade',
      price: plans?.price ?? 9,
      type: plans?.type ?? 'monthly',
    },
  });

  function onSubmit(data: FormPlansValues) {
    savePlans(data as Plan);
    next();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full">
        <LayoutForm>
          <PlanOptions />
          <PlanTypeSelector />
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

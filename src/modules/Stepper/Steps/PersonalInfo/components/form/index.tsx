import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/Forms';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { ButtonsLayout, LayoutForm } from '@/layouts';
import {
  FormPersonalInfoSchema,
  FormPersonalInfoValues,
} from '@/modules/Stepper/Steps/PersonalInfo/components/form/validations.ts';
import usePersonalInformation from '@/hooks/usePersonalInformation.ts';
import useSteps from '@/hooks';

export function PersonalInfoForm() {
  const { savePersonalInformation, user } = usePersonalInformation();
  const { next } = useSteps();
  const form = useForm<FormPersonalInfoValues>({
    resolver: zodResolver(FormPersonalInfoSchema),
    defaultValues: {
      name: user?.name ?? '',
      email: user?.email ?? '',
      phone: user?.phone ?? '',
    },
  });

  function onSubmit(data: FormPersonalInfoValues) {
    savePersonalInformation(data);
    next();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full h-full">
        <LayoutForm>
          <FormField
            control={form.control}
            name="name"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <div className={'flex items-center justify-between'}>
                  <FormLabel>Name</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    placeholder="e.g. Stephen King"
                    {...field}
                    isValid={!errors['name']}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <div className={'flex items-center justify-between'}>
                  <FormLabel>Email Address</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    placeholder="e.g. stephenking@lorem.com"
                    {...field}
                    isValid={!errors['email']}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field, formState: { errors } }) => (
              <FormItem>
                <div className={'flex items-center justify-between'}>
                  <FormLabel>Phone Number</FormLabel>
                  <FormMessage />
                </div>
                <FormControl>
                  <Input
                    placeholder="e.g. +1 234 567 8901"
                    {...field}
                    isValid={!errors['phone']}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <ButtonsLayout>
            <Button type="submit">Next Step</Button>
          </ButtonsLayout>
        </LayoutForm>
      </form>
    </Form>
  );
}

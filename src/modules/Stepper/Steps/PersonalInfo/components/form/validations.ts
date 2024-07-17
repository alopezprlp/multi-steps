import { z } from 'zod';

import { validatePhoneNumber } from '@/utils';

export const FormPersonalInfoSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  phone: z
    .string()
    .min(1, {
      message: 'Phone is required',
    })
    .refine(
      data => {
        return validatePhoneNumber(data);
      },
      { message: 'Invalid phone number' },
    ),
  email: z.string().email(),
});

export type FormPersonalInfoValues = z.infer<typeof FormPersonalInfoSchema>;

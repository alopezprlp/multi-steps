import { z } from 'zod';

export const FormPlansSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  price: z.number().min(1, {
    message: 'Price is required',
  }),
  type: z.string().min(1, {
    message: 'Type is required',
  }),
});

export type FormPlansValues = z.infer<typeof FormPlansSchema>;

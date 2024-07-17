import { z } from 'zod';

export const AddOnSchema = z.object({
  name: z.string().min(1, {
    message: 'Name is required',
  }),
  price: z.number().min(0, {
    message: 'Price must be a positive number',
  }),
});

export const StateAddOnSchema = z.object({
  addOn: z.array(AddOnSchema),
});

export type StateAddOnType = z.infer<typeof StateAddOnSchema>;

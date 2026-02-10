import { z } from 'zod';

export const inputSchema = z.object({
  url: z
    .url({ error: 'Некорректный формат' })
    .trim()
    .min(1, { error: 'Обязательное поле' })
    .max(2048, { error: 'Максимальная длина 2048' }),
  traffic: z.coerce.number<number>({ error: 'Обязательное поле' }).min(1, { error: 'Обязательное поле' }),
  telegram: z
    .string({ error: 'Обязательное поле' })
    .trim()
    .min(1, { error: 'Обязательное поле' })
    .max(1024, { error: 'Максимальная длина 1024' }),
});

export const REQUEST_FORM_ID = 'request-form';

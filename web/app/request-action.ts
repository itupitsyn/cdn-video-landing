'use server'; // don't forget to add this!

import { returnValidationErrors } from 'next-safe-action';

import { inputSchema } from '@/lib/constants/request-form';
import prisma from '@/lib/prisma';
import { actionClient } from '@/lib/utils/safe-action';

export const sendRequest = actionClient
  .inputSchema(inputSchema)
  .action(async ({ parsedInput: { telegram, traffic, site } }) => {
    try {
      const request = await prisma.request.create({
        data: {
          site: site.trim(),
          traffic: traffic,
          telegram: telegram.trim(),
        },
      });
      return request;
    } catch (error) {
      console.error(error);
      return returnValidationErrors(inputSchema, { _errors: [error instanceof Error ? error.message : String(error)] });
    }
  });

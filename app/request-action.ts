'use server'; // don't forget to add this!

import { returnValidationErrors } from 'next-safe-action';

import { inputSchema } from '@/lib/constants/request-form';
import { actionClient } from '@/lib/utils/safe-action';

// import prisma from '@/lib/prisma';
// import { getCleanPhoneNumber } from '@/lib/utils/form';

export const sendRequest = actionClient
  .inputSchema(inputSchema)
  .action(async ({ parsedInput: { telegram, traffic, url } }) => {
    try {
      // const request = await prisma.request.create({
      //   data: {
      //     email: email.trim(),
      //     message: message.trim(),
      //     name: name.trim(),
      //     phoneNumber: getCleanPhoneNumber(phoneNumber),
      //     theme: theme.trim(),
      //   },
      // });
      // return request;
    } catch (error) {
      // console.error(error);
      // return returnValidationErrors(inputSchema, { _errors: [error instanceof Error ? error.message : String(error)] });
    }
  });

'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useCallback, useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';

import { sendRequest } from '@/app/request-action';

import { IconCheckInCircle } from '../assets';
import { inputSchema, REQUEST_FORM_ID } from '../constants/request-form';
import { cn } from '../utils/cn';
import { Button } from './button';
import { Input } from './input';

export type RequestFormData = z.infer<typeof inputSchema>;

export const RequestForm: FC = () => {
  const [unexpectedError, setUnexpectedError] = useState<string>();

  const methods = useForm<RequestFormData>({
    resolver: zodResolver(inputSchema),
    defaultValues: {
      telegram: '',
      traffic: undefined,
      url: '',
    },
  });

  const {
    reset,
    handleSubmit,
    control,
    formState: { isSubmitSuccessful, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<RequestFormData> = useCallback(async (formData) => {
    try {
      const res = await sendRequest(formData);
      const { validationErrors, serverError } = res;
      if (!validationErrors && !serverError) {
        // setIsSuccess(true);
        return;
      }
      setUnexpectedError('Неизвестная ошибка');
    } catch {
      setUnexpectedError('Неизвестная ошибка');
    }
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset(undefined, {
        keepErrors: false,
        keepDefaultValues: true,
        keepDirty: false,
        keepDirtyValues: false,
        keepIsSubmitted: false,
        keepIsValid: false,
        keepSubmitCount: false,
        keepTouched: false,
        keepIsSubmitSuccessful: false,
        keepIsValidating: false,
        keepValues: false,
        keepFieldsRef: false,
      });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="mt-27.5 sm:mt-25 lg:mx-5 lg:mt-40">
      <form
        id={REQUEST_FORM_ID}
        noValidate
        className={cn(
          'bg-[radial-gradient(76.89%_116.45%_at_47.55%_100%,rgba(0,21,255,0.7)_0%,rgba(0,21,255,0)_100%),radial-gradient(121.69%_219.56%_at_47.55%_100%,rgba(0,21,255,0.7)_0%,rgba(0,21,255,0)_100%)]',
          'container flex flex-col gap-7.5 rounded-2xl pb-3',
          'sm:px-9! sm:pb-9 lg:grid lg:grid-cols-2 lg:gap-6.25 lg:px-5! lg:pb-5',
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-7.5">
          <h2 className="font-gotham-pro leading-pup lg:leading-subpup pt-10 text-center text-[30px] tracking-tight sm:hidden lg:block lg:pt-12.5 lg:text-left lg:text-[72px] lg:whitespace-pre-wrap">
            {'Начать можно \nза пару минут'}
          </h2>

          <h2 className="font-gotham-pro leading-subpup hidden pt-15.5 text-center text-[50px] tracking-tight sm:block lg:hidden">
            Начать за пару минут
          </h2>

          <p className="leading-pup text-center font-light tracking-tight sm:hidden">
            Отправьте заявку — персональный менеджер свяжется с вами в течении пары минут и поможет с подключением
          </p>
        </div>

        <div className="hidden lg:block" />

        <div className="flex flex-col gap-7.5">
          <p className="leading-pup hidden text-center font-light tracking-tight whitespace-pre-wrap sm:block lg:hidden">
            {'Отправьте заявку — персональный менеджер свяжется\nс вами в течении пары минут и поможет с подключением'}
          </p>

          <p className="leading-pup hidden text-[24px] font-light tracking-tight whitespace-pre-wrap lg:block">
            {'Отправьте заявку — персональный менеджер\nсвяжется с вами в течении пары минут\nи поможет с подключением'}
          </p>

          <div className="flex flex-col gap-2 sm:gap-4.5 sm:px-5 sm:pt-5 lg:gap-3.25 lg:px-0">
            <p className="leading-pup text-white/60 sm:text-xl">Условия подключения</p>

            <ul className="leading-extrasubpup! flex flex-col gap-7 text-[18px] sm:text-xl lg:text-[22px]">
              <li className="flex items-center gap-2.5 sm:gap-5">
                <IconCheckInCircle className="flex-none sm:size-6.25" />
                Трафик от 2000 уников в сутки 
              </li>
              <li className="flex items-center gap-2.5 sm:gap-5">
                <IconCheckInCircle className="flex-none sm:size-6.25" />
                Доступ в метрику
              </li>
              <li className="flex items-center gap-2.5 sm:gap-5">
                <IconCheckInCircle className="flex-none sm:size-6.25" />
                Наш плеер на первом месте
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-7.5">
          <div className="flex flex-col gap-3 lg:gap-4">
            {unexpectedError && <div className="leading-[120%] text-red-600">{unexpectedError}</div>}
            <Controller
              control={control}
              name="url"
              render={({ field, fieldState: { invalid, error } }) => (
                <Input {...field} isInvalid={invalid} errorText={error?.message} placeholder="https://site.ru" />
              )}
            />

            <Controller
              control={control}
              name="traffic"
              render={({ field, fieldState: { invalid, error } }) => (
                <Input
                  {...field}
                  value={field.value || ''}
                  isInvalid={invalid}
                  errorText={error?.message}
                  type="number"
                  placeholder="Трафик в сутки"
                />
              )}
            />

            <Controller
              control={control}
              name="telegram"
              render={({ field, fieldState: { invalid, error } }) => (
                <Input {...field} isInvalid={invalid} errorText={error?.message} placeholder="@nickname" />
              )}
            />
          </div>

          <Button variant="default" color="black" type="submit" disabled={isSubmitting} className="sm:mt-18 lg:mt-13">
            Стать партнером
          </Button>
        </div>
      </form>
    </section>
  );
};

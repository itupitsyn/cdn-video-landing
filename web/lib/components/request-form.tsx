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
      site: '',
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
    <section className="tablet:mt-25 air:mt-30 air:mx-5 desktop:mt-40 mt-22.5">
      <form
        id={REQUEST_FORM_ID}
        noValidate
        className={cn(
          'bg-[radial-gradient(76.89%_116.45%_at_47.55%_100%,rgba(0,21,255,0.7)_0%,rgba(0,21,255,0)_100%),radial-gradient(121.69%_219.56%_at_47.55%_100%,rgba(0,21,255,0.7)_0%,rgba(0,21,255,0)_100%)]',
          'container flex flex-col gap-7.5 rounded-2xl pb-3',
          'tablet:px-9! tablet:pb-9 air:grid air:grid-cols-2 air:gap-6.25 air:px-5! air:pb-5',
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <h2 className="font-gotham-pro leading-pup air:leading-subpup tablet:hidden air:block air:pt-12.5 air:text-left air:text-[72px] pt-10 text-center text-[30px] tracking-tight whitespace-pre">
            {'Начать можно \nза пару минут'}
          </h2>

          <h2 className="font-gotham-pro leading-subpup tablet:block air:hidden hidden pt-15.5 text-center text-[50px] tracking-tight">
            Начать за пару минут
          </h2>
        </div>

        <div className="air:block hidden" />

        <div className="tablet:gap-8.5 air:gap-6.25 flex flex-col gap-7.5">
          <p className="leading-pup tablet:hidden text-center text-[18px] font-light tracking-tight">
            Отправьте заявку — персональный менеджер свяжется с вами в течении пары минут и поможет с подключением
          </p>

          <p className="leading-pup tablet:block air:hidden hidden text-center text-[20px] font-light tracking-tight whitespace-pre-wrap">
            {'Отправьте заявку — персональный менеджер свяжется\nс вами в течении пары минут и поможет с подключением'}
          </p>

          <p className="leading-pup air:block hidden text-[24px] font-light tracking-tight whitespace-pre-wrap">
            {'Отправьте заявку — персональный менеджер\nсвяжется с вами в течении пары минут\nи поможет с подключением'}
          </p>

          <div className="tablet:gap-4.5 tablet:px-5 air:pt-6.25 tablet:pt-5.5 air:gap-3.25 air:px-0 flex flex-col gap-4.5">
            <p className="leading-pup tablet:text-xl text-white/60">Условия подключения</p>

            <ul className="leading-extrasubpup! tablet:gap-5.25 tablet:text-xl air:text-[22px] flex flex-col gap-4.25 text-[18px]">
              <li className="tablet:gap-5 flex items-center gap-2.5">
                <IconCheckInCircle className="tablet:size-6.25 flex-none" />
                Трафик от 2000 уников в сутки 
              </li>
              <li className="tablet:gap-5 flex items-center gap-2.5">
                <IconCheckInCircle className="tablet:size-6.25 flex-none" />
                Доступ в метрику
              </li>
              <li className="tablet:gap-5 flex items-center gap-2.5">
                <IconCheckInCircle className="tablet:size-6.25 flex-none" />
                Наш плеер на первом месте
              </li>
            </ul>
          </div>
        </div>

        <div className="tablet:gap-25.5 air:gap-20.5 air:-mt-1.25 flex flex-col gap-9.5">
          <div className="air:gap-4 flex flex-col gap-2.5">
            {unexpectedError && <div className="leading-[120%] text-red-600">{unexpectedError}</div>}
            <Controller
              control={control}
              name="site"
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

          <Button
            variant="default"
            color="black"
            type="submit"
            disabled={isSubmitting}
            className="tablet:h-17.75 air:h-21"
          >
            Стать партнером
          </Button>
        </div>
      </form>
    </section>
  );
};

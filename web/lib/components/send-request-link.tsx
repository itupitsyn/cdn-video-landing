'use client';

import { FC } from 'react';

import { REQUEST_FORM_ID } from '../constants/request-form';
import { safeScroll } from '../utils/scroll';
import { LinkButton } from './link-button';

export const SendRequestLink: FC = () => {
  return (
    <LinkButton
      href={`/#${REQUEST_FORM_ID}`}
      color="blue"
      className="desktop:max-w-172.5 tablet:max-w-152.5 w-full max-w-99.75 text-center"
      variant="outline"
      onClick={(e) => {
        safeScroll(REQUEST_FORM_ID, e);
      }}
    >
      Оставить заявку
    </LinkButton>
  );
};

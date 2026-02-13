import { MouseEvent } from 'react';

export const safeScroll = (hash: string, e: MouseEvent<HTMLAnchorElement>) => {
  if (window.location.hash === `#${hash}`) {
    e.preventDefault();
    const element = document.getElementById(hash);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
};

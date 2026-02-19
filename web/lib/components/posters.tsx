'use client';

import 'swiper/css';

import Image from 'next/image';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import p1 from '../../lib/assets/posters/p1.webp';
import p2 from '../../lib/assets/posters/p2.webp';
import p3 from '../../lib/assets/posters/p3.webp';
import p4 from '../../lib/assets/posters/p4.webp';
import p5 from '../../lib/assets/posters/p5.webp';
import p6 from '../../lib/assets/posters/p6.webp';
import p7 from '../../lib/assets/posters/p7.webp';
import p8 from '../../lib/assets/posters/p8.webp';
import p9 from '../../lib/assets/posters/p9.webp';
import p10 from '../../lib/assets/posters/p10.webp';
import p11 from '../../lib/assets/posters/p11.webp';
import p12 from '../../lib/assets/posters/p12.webp';
import p13 from '../../lib/assets/posters/p13.webp';
import p14 from '../../lib/assets/posters/p14.webp';
import p15 from '../../lib/assets/posters/p15.webp';
import { cn } from '../utils/cn';

const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15];

export const Posters: FC = () => {
  return (
    <Swiper
      initialSlide={7}
      spaceBetween={16}
      slidesPerView={3}
      centeredSlides
      loop
      freeMode
      style={{ overflow: 'visible' }}
    >
      {images.map((item, idx) => (
        <SwiperSlide key={idx} className="flex! justify-center!">
          {({ isActive, isPrev, isNext }) => {
            return (
              <Image
                src={item}
                alt={''}
                height={358}
                width={286}
                className={cn(
                  'h-32.75 w-22.25 transition-[scale,opacity] duration-300 select-none',
                  'tablet:h-57 tablet:w-38.5 desktop:h-75 desktop:w-51',
                  isActive && 'scale-120',
                  !isPrev && !isNext && !isActive && 'opacity-60',
                )}
                quality={90}
              />
            );
          }}
        </SwiperSlide>
      ))}
      {images.map((item, idx) => (
        <SwiperSlide key={idx} className="flex! justify-center!">
          {({ isActive, isPrev, isNext }) => {
            return (
              <Image
                src={item}
                alt={''}
                height={358}
                width={286}
                className={cn(
                  'h-32.75 w-22.25 transition-[scale,opacity] duration-300 select-none',
                  'tablet:h-57 tablet:w-38.5 desktop:h-75 desktop:w-51',
                  isActive && 'scale-120',
                  !isPrev && !isNext && !isActive && 'opacity-60',
                )}
                quality={90}
              />
            );
          }}
        </SwiperSlide>
      ))}
      {images.map((item, idx) => (
        <SwiperSlide key={idx} className="flex! justify-center!">
          {({ isActive, isPrev, isNext }) => {
            return (
              <Image
                src={item}
                alt={''}
                height={358}
                width={286}
                className={cn(
                  'h-32.75 w-22.25 transition-[scale,opacity] duration-300 select-none',
                  'tablet:h-57 tablet:w-38.5 desktop:h-75 desktop:w-51',
                  isActive && 'scale-120',
                  !isPrev && !isNext && !isActive && 'opacity-60',
                )}
                quality={90}
              />
            );
          }}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

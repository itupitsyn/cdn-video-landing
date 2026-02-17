'use client';

import 'swiper/css';

import Image from 'next/image';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import p1 from '../../lib/assets/posters/p1.jpg';
import p2 from '../../lib/assets/posters/p2.jpg';
import p3 from '../../lib/assets/posters/p3.jpg';
import p4 from '../../lib/assets/posters/p4.jpg';
import p5 from '../../lib/assets/posters/p5.jpg';
import p6 from '../../lib/assets/posters/p6.jpg';
import p7 from '../../lib/assets/posters/p7.jpg';
import p8 from '../../lib/assets/posters/p8.jpg';
import { cn } from '../utils/cn';

const images = [p1, p2, p3, p4, p5, p6, p7, p8];

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
                  'sm:h-57 sm:w-38.5 lg:h-75 lg:w-51',
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
                  'sm:h-57 sm:w-38.5 lg:h-75 lg:w-51',
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
                  'sm:h-57 sm:w-38.5 lg:h-75 lg:w-51',
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

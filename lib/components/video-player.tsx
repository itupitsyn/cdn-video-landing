'use client';

import { FC } from 'react';

import { cn } from '../utils/cn';

interface VideoPlayerProps {
  className?: string;
}

export const VideoPlayer: FC<VideoPlayerProps> = ({ className }) => {
  return (
    <div className={cn('container flex flex-col items-center', className)}>
      <div className="mx-5 h-52 w-full max-w-93.25 bg-red-600" />
    </div>
  );
};

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { trackCustomEvent } from '@/components/MetaPixel';

// Shows the poster until tapped, then plays with sound and controls. Used for
// client videos (homepage Work section, website design page).
export default function TapVideo({
  src,
  poster,
  label,
  sizes,
  className = '',
  small = false,
}: {
  src: string;
  poster: string;
  label: string;
  sizes: string;
  className?: string;
  small?: boolean;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-black ${className}`}>
      {playing ? (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={src}
          poster={poster}
          controls
          autoPlay
          playsInline
          preload="auto"
        />
      ) : (
        <button
          type="button"
          onClick={() => {
            setPlaying(true);
            trackCustomEvent('WorkVideoPlay', { video_name: label });
          }}
          aria-label={`Play video: ${label}`}
          className="group absolute inset-0 w-full h-full"
        >
          <Image src={poster} alt="" fill sizes={sizes} className="object-cover" />
          <span className="absolute inset-0 grid place-items-center">
            <span
              className={`${small ? 'w-10 h-10' : 'w-16 h-16'} rounded-full bg-black/60 border-2 border-white/80 grid place-items-center transition-transform duration-300 group-hover:scale-110`}
            >
              <span
                className={`${small ? 'border-l-[11px] border-y-[7px]' : 'border-l-[16px] border-y-[10px]'} border-l-white border-y-transparent ml-1`}
              />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}

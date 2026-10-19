'use client';

import { useEffect, useRef, useState } from 'react';

// "5.0 ★★★★★ on Google" badge, shown wherever people decide whether to act.
// Update GOOGLE_RATING when reviews change (or replace with a daily Places API pull).

export const GOOGLE_RATING = {
  rating: 5.0,
  // Set to the real review count from Google Business Profile to show "from N reviews".
  reviewCount: null as number | null,
  // Set to the Business Profile reviews URL to make the badge a link (opens in a new tab).
  // Drive Lead Media on Google Maps (permanent CID link; survives renames).
  profileUrl: 'https://www.google.com/maps?cid=2471121807011827958' as string | null,
};

function GoogleWordmark() {
  return (
    <span className="font-semibold tracking-tight" aria-hidden="true">
      <span className="text-[#4285F4]">G</span>
      <span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>
      <span className="text-[#4285F4]">g</span>
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>
  );
}

// animate: 'load' pops the stars in shortly after page load (use above the fold);
// 'view' waits until the badge scrolls into view. Omit for no animation.
function useStarAnimation(animate?: 'load' | 'view') {
  const ref = useRef<HTMLSpanElement>(null);
  const [state, setState] = useState<'' | 'stars-pending' | 'stars-run'>('');

  useEffect(() => {
    if (animate !== 'view' || !ref.current || typeof IntersectionObserver === 'undefined') return;
    const el = ref.current;
    // Only hide the stars if they start off-screen, so nobody sees them blink out.
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) return;
    setState('stars-pending');
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setState('stars-run');
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [animate]);

  return { ref, starClass: animate === 'load' ? 'stars-load' : state };
}

// link=false keeps it plain text (inside the intake form, so nobody leaves mid-way).
export default function GoogleRating({
  className = '',
  animate,
  link = true,
}: {
  className?: string;
  animate?: 'load' | 'view';
  link?: boolean;
}) {
  const { rating, reviewCount } = GOOGLE_RATING;
  const profileUrl = link ? GOOGLE_RATING.profileUrl : null;
  const { ref, starClass } = useStarAnimation(animate);
  const score = rating.toFixed(1);
  const countText = reviewCount
    ? `from ${reviewCount} Google review${reviewCount === 1 ? '' : 's'}`
    : 'on Google';
  const label = `Rated ${score} out of 5 ${countText}`;

  const content = (
    <>
      <GoogleWordmark />
      <span className="text-white font-semibold">{score}</span>
      <span ref={ref} className={`text-[#FBBC04] tracking-[1px] ${starClass}`} aria-hidden="true">
        {[0, 1, 2, 3, 4].map((i) => (
          <span key={i} className="rating-star">★</span>
        ))}
      </span>
      <span>{reviewCount ? countText : 'rating'}</span>
    </>
  );

  const classes = `inline-flex flex-wrap items-center gap-x-2 gap-y-1 font-ui text-[0.9rem] text-gray-400 ${className}`;

  return profileUrl ? (
    <a href={profileUrl} target="_blank" rel="noopener noreferrer" aria-label={`${label}. See our reviews on Google (opens in a new tab)`} className={`${classes} min-h-[44px] hover:text-gray-200 transition-colors`}>
      {content}
    </a>
  ) : (
    <span role="img" aria-label={label} className={classes}>
      {content}
    </span>
  );
}

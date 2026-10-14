// "5.0 ★★★★★ on Google" badge, shown wherever people decide whether to act.
// Update GOOGLE_RATING when reviews change (or replace with a daily Places API pull).

export const GOOGLE_RATING = {
  rating: 5.0,
  // Set to the real review count from Google Business Profile to show "from N reviews".
  reviewCount: null as number | null,
  // Set to the Business Profile reviews URL to make the badge a link (opens in a new tab).
  profileUrl: null as string | null,
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

export default function GoogleRating({ className = '' }: { className?: string }) {
  const { rating, reviewCount, profileUrl } = GOOGLE_RATING;
  const score = rating.toFixed(1);
  const countText = reviewCount
    ? `from ${reviewCount} Google review${reviewCount === 1 ? '' : 's'}`
    : 'on Google';
  const label = `Rated ${score} out of 5 ${countText}`;

  const content = (
    <>
      <GoogleWordmark />
      <span className="text-white font-semibold">{score}</span>
      <span className="text-[#FBBC04] tracking-[1px]" aria-hidden="true">★★★★★</span>
      <span>{reviewCount ? countText : 'rating'}</span>
    </>
  );

  const classes = `inline-flex flex-wrap items-center gap-x-2 gap-y-1 font-ui text-[0.9rem] text-gray-400 ${className}`;

  return profileUrl ? (
    <a href={profileUrl} target="_blank" rel="noopener noreferrer" aria-label={label} className={`${classes} hover:text-gray-200 transition-colors`}>
      {content}
    </a>
  ) : (
    <span role="img" aria-label={label} className={classes}>
      {content}
    </span>
  );
}

'use client';

export default function TargetedAdsCTA() {
  return (
    // SECTION 6: TARGETED ADS CTA - Empty placeholder section for future CTA content
    // Hidden on mobile - desktop only
    <section className="hidden md:flex relative h-[10vh] items-center overflow-hidden" style={{ zIndex: 6 }}>
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-[#5FA99F] opacity-5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-[#85C7B3] opacity-5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
}

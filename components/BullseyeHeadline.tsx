'use client';

import { useEffect, useId, useRef } from 'react';

// Hero headline. The "o" in "Customers" is the real DLM icon. On load an arrow
// flies in from the left, each word it passes flashes gold, and it hits the
// target: the target ripples, the shaft drops away and the arrow's teal head
// becomes the logo's pin.
//
// - The icon shows without its pin until the hit (dlm-icon-o-empty.webp has the
//   pin painted out); at impact it swaps to the real icon (dlm-icon-o.webp).
//   The arrow head is drawn to the pin's exact size and tilt, so the swap is
//   seamless and the final frame is the actual logo.
// - The real letter "o" stays in the <h1> (invisible), so search engines and
//   screen readers read "Customers". The icon and arrow are aria-hidden.
// - Text is visible from the first frame; only its color animates (no LCP cost).
// - Plays once per mount. Reduce Motion shows the finished frame.

// Icon geometry, as fractions of the cropped icon image (326 x 441 source px).
const ICON_SRC_H = 441;
const TIP = { x: 133 / 326, y: 203 / 441 }; // where the pin's point touches the center
const FACE = { x: 143 / 326, y: 207 / 441, h: 414 / 441 }; // target face center and height
const PIN_TILT = Math.atan2(11.5, 58.5); // the logo's pin points slightly down-right

const FLIGHT_DELAY = 250;
const FLIGHT = 800;

export default function BullseyeHeadline({ className }: { className?: string }) {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const trailId = useId().replace(/:/g, '');

  useEffect(() => {
    const h1 = h1Ref.current;
    if (!h1) return;
    const fx = h1.querySelector<HTMLElement>('.bh-fx')!;
    const icon = h1.querySelector<HTMLElement>('.bh-icon')!;
    const arrow = h1.querySelector<HTMLElement>('.bh-arrow')!;
    const shaft = arrow.querySelector<SVGGElement>('.bh-shaft')!;
    const pin = arrow.querySelector<SVGGElement>('.bh-pin')!;
    const cust = h1.querySelector<HTMLElement>('.bh-cust')!;
    const words = [...h1.querySelectorAll<HTMLElement>('.bh-w')];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0, cancelled = false;
    const timers: number[] = [];
    const anims: Animation[] = [];

    // Positions relative to the h1 (the arrow layer's origin).
    const geom = () => {
      const r = icon.getBoundingClientRect();
      const base = h1.getBoundingClientRect();
      return {
        base,
        scale: r.height / ICON_SRC_H, // screen px per icon source px
        tipX: r.left - base.left + TIP.x * r.width,
        tipY: r.top - base.top + TIP.y * r.height,
        faceX: r.left - base.left + FACE.x * r.width,
        faceY: r.top - base.top + FACE.y * r.height,
        faceH: FACE.h * r.height,
        lineTop: r.top - base.top,
        fontPx: parseFloat(getComputedStyle(h1).fontSize),
      };
    };

    const clear = () => {
      anims.forEach((a) => a.cancel());
      anims.length = 0;
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
      timers.length = 0;
      fx.querySelectorAll('.bh-ring').forEach((n) => n.remove());
      words.forEach((w) => w.classList.remove('bh-lit', 'bh-keep'));
    };

    // Finished frame: the real icon, no arrow.
    const rest = () => {
      arrow.style.opacity = '0';
      h1.classList.add('bh-hit');
      cust.classList.add('bh-keep');
    };

    const impact = (g: ReturnType<typeof geom>) => {
      // Swap to the real icon under the arrow head, then let the head go.
      h1.classList.add('bh-hit');
      anims.push(icon.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(.86)', offset: 0.22 }, { transform: 'scale(1.08)', offset: 0.55 }, { transform: 'scale(.98)', offset: 0.8 }, { transform: 'scale(1)' }],
        { duration: 520, easing: 'ease-out' },
      ));
      [0, 130, 260].forEach((delay, i) => {
        const ring = document.createElement('span');
        ring.className = `bh-ring${i % 2 ? ' bh-ring-teal' : ''}`;
        const d = g.faceH;
        Object.assign(ring.style, { width: `${d}px`, height: `${d}px`, left: `${g.faceX - d / 2}px`, top: `${g.faceY - d / 2}px` });
        fx.insertBefore(ring, arrow);
        const a = ring.animate(
          [{ transform: 'scale(.7)', opacity: 0.95 }, { transform: `scale(${2.6 + i * 0.45})`, opacity: 0 }],
          { duration: 760, delay, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' },
        );
        a.onfinish = () => ring.remove();
        anims.push(a);
      });
      anims.push(shaft.animate(
        [{ transform: 'scaleX(1)', opacity: 1 }, { transform: 'scaleX(.15)', opacity: 0 }],
        { duration: 260, easing: 'cubic-bezier(.55,0,.75,.2)', fill: 'forwards' },
      ));
      anims.push(pin.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, delay: 60, fill: 'forwards' }));
      cust.classList.add('bh-lit');
      timers.push(window.setTimeout(() => {
        cust.classList.remove('bh-lit');
        cust.classList.add('bh-keep');
        arrow.style.opacity = '0';
      }, 300));
    };

    const play = () => {
      clear();
      h1.classList.remove('bh-hit');
      const g = geom();
      const s1 = g.scale, s0 = g.scale * 1.85;
      const sectionLeft = (h1.closest('section') ?? document.body).getBoundingClientRect().left;
      // Path: from off-screen left, a shallow arc above the line, onto the pin's spot.
      const p0 = { x: sectionLeft - g.base.left - g.fontPx * 1.6, y: g.tipY - g.fontPx * 0.95 };
      const p2 = { x: g.tipX, y: g.tipY };
      const p1 = { x: (p0.x + p2.x) / 2, y: g.tipY - g.fontPx * 1.25 };
      const at = (t: number) => ({
        x: (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x,
        y: (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y,
      });
      const custIdx = words.indexOf(cust);
      const passes = words.slice(0, custIdx).map((w) => {
        const r = w.getBoundingClientRect();
        return { w, x: r.left - g.base.left + r.width / 2, y: r.top - g.base.top, done: false };
      }).filter((p) => p.y <= g.lineTop + g.fontPx);
      const ease = (t: number) => t * t * (1.25 - 0.25 * t); // speeds up into the target
      shaft.style.opacity = '1';
      pin.style.opacity = '1';
      arrow.style.opacity = '0';
      const t0 = performance.now();

      const step = (now: number) => {
        if (cancelled) return;
        const e = now - t0 - FLIGHT_DELAY;
        if (e < 0) { raf = requestAnimationFrame(step); return; }
        const t = Math.min(1, e / FLIGHT);
        const p = ease(t);
        const a = at(p), b = at(Math.min(1, p + 0.01));
        // Follow the path, easing into the logo pin's tilt for the last stretch.
        const tangent = Math.atan2(b.y - a.y, b.x - a.x);
        const blend = Math.max(0, (p - 0.75) / 0.25);
        const angle = tangent + (PIN_TILT - tangent) * blend;
        arrow.style.opacity = String(Math.min(1, e / 90));
        arrow.style.transform = `translate(${a.x}px, ${a.y}px) rotate(${angle}rad) scale(${s0 + (s1 - s0) * p})`;
        for (const ps of passes) {
          if (!ps.done && a.x >= ps.x) {
            ps.done = true;
            ps.w.classList.add('bh-lit');
            timers.push(window.setTimeout(() => ps.w.classList.remove('bh-lit'), 140));
          }
        }
        if (t < 1) raf = requestAnimationFrame(step);
        else impact(g);
      };
      raf = requestAnimationFrame(step);
    };

    const start = () => {
      if (cancelled) return;
      if (reduce) rest();
      else timers.push(window.setTimeout(play, 350));
    };
    // Wait for the font (line positions) and both icon images before flying.
    const imgs = [...h1.querySelectorAll<HTMLImageElement>('.bh-icon img')];
    Promise.all([
      document.fonts.ready,
      ...imgs.map((im) => (im.complete ? Promise.resolve() : im.decode().catch(() => undefined))),
    ]).then(start);

    return () => {
      cancelled = true;
      clear();
    };
  }, []);

  return (
    <h1 ref={h1Ref} className={`bh relative ${className ?? ''}`}>
      <span className="bh-w">We</span> <span className="bh-w">Find</span> <span className="bh-w">Your</span>{' '}
      <span className="bh-w bh-cust">
        Cust
        <span className="bh-o">
          o
          <span className="bh-icon" aria-hidden="true">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="bh-icon-empty" src="/images/dlm-icon-o-empty.webp" alt="" width={177} height={240} decoding="async" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="bh-icon-full" src="/images/dlm-icon-o.webp" alt="" width={177} height={240} decoding="async" />
          </span>
        </span>
        mers
      </span>{' '}
      <span className="bh-w">Before</span> <span className="bh-w">They</span> <span className="bh-w">Find</span>{' '}
      <span className="bh-w">Your</span> <span className="bh-w">Competitors</span>
      <span className="bh-fx" aria-hidden="true">
        {/* Arrow pointing right, in icon source px; origin = the pin's point.
            The head matches the logo's pin: radius 33.5, cream dot radius 17. */}
        <span className="bh-arrow">
          <svg width="1" height="1" viewBox="0 0 1 1">
            <defs>
              <linearGradient id={trailId} x1="0" x2="1">
                <stop offset="0" stopColor="#F2B544" stopOpacity="0" />
                <stop offset="1" stopColor="#F2B544" stopOpacity=".55" />
              </linearGradient>
            </defs>
            <g className="bh-shaft">
              <rect x="-560" y="-5" width="350" height="10" fill={`url(#${trailId})`} />
              <rect x="-335" y="-7.5" width="285" height="15" rx="7.5" fill="#F4F1E8" />
              <path d="M-335 -7.5 L-384 -42 L-313 -42 L-273 -7.5 Z M-335 7.5 L-384 42 L-313 42 L-273 7.5 Z" fill="#E39B1F" />
            </g>
            <g className="bh-pin">
              <path d="M0 0 L-40.8 -27.72 A33.5 33.5 0 1 0 -40.8 27.72 Z" fill="#08908c" />
              <circle cx="-59.62" cy="0" r="33.5" fill="#08908c" />
              <circle cx="-59.62" cy="0" r="17" fill="#f9f0d6" />
            </g>
          </svg>
        </span>
      </span>
    </h1>
  );
}

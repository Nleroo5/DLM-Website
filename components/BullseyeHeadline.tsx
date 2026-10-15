'use client';

import { useEffect, useId, useRef } from 'react';

// Hero headline. The "o" in "Customers" is the DLM bull's-eye. On load an arrow
// flies in from the left, each word it passes flashes gold, and it hits the
// target: the target ripples, the shaft drops away and the arrow's teal head
// stays in the center, so the "o" settles into the logo.
//
// - The real letter "o" stays in the <h1> (made invisible), so search engines
//   and screen readers read "Customers". The target and arrow are aria-hidden.
// - Text is visible from the first frame; only its color animates, so the
//   animation doesn't delay Largest Contentful Paint.
// - Plays once per mount. Reduce Motion shows the finished frame.

const FLIGHT_DELAY = 250;
const FLIGHT = 800;

export default function BullseyeHeadline({ className }: { className?: string }) {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const trailId = useId().replace(/:/g, '');

  useEffect(() => {
    const h1 = h1Ref.current;
    if (!h1) return;
    const fx = h1.querySelector<HTMLElement>('.bh-fx')!;
    const target = h1.querySelector<HTMLElement>('.bh-target')!;
    const arrow = h1.querySelector<HTMLElement>('.bh-arrow')!;
    const shaft = arrow.querySelector<SVGGElement>('.bh-shaft')!;
    const pin = arrow.querySelector<SVGGElement>('.bh-pin')!;
    const oLetter = h1.querySelector<HTMLElement>('.bh-o')!;
    const cust = h1.querySelector<HTMLElement>('.bh-cust')!;
    const words = [...h1.querySelectorAll<HTMLElement>('.bh-w')];
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let cx = 0, cy = 0, d = 0, fontPx = 0, lineTop = 0;
    // 'before': target only, waiting to play. 'playing': in flight. 'done': finished frame.
    let phase: 'before' | 'playing' | 'done' = 'before';
    let raf = 0, cancelled = false;
    const timers: number[] = [];
    const anims: Animation[] = [];
    const ctx = document.createElement('canvas').getContext('2d');

    // Place the target exactly over the "o" using the font's real metrics.
    const measure = () => {
      const r = oLetter.getBoundingClientRect();
      const base = h1.getBoundingClientRect();
      const cs = getComputedStyle(h1);
      fontPx = parseFloat(cs.fontSize);
      let asc = fontPx * 0.53, desc = fontPx * 0.01, fontAsc = fontPx * 0.95, fontH = r.height;
      if (ctx) {
        ctx.font = `${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
        const m = ctx.measureText('o');
        if (m.fontBoundingBoxAscent) {
          asc = m.actualBoundingBoxAscent;
          desc = m.actualBoundingBoxDescent;
          fontAsc = m.fontBoundingBoxAscent;
          fontH = m.fontBoundingBoxAscent + m.fontBoundingBoxDescent;
        }
      }
      const baseline = r.top - base.top + (r.height - fontH) / 2 + fontAsc;
      d = (asc + desc) * 1.18;
      cx = r.left - base.left + r.width / 2;
      cy = baseline - (asc - desc) / 2;
      lineTop = r.top - base.top;
      Object.assign(target.style, { width: `${d}px`, height: `${d}px`, left: `${cx - d / 2}px`, top: `${cy - d / 2}px` });
      h1.classList.add('bh-ready');
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

    // Finished frame: target with the teal pin in the center.
    const rest = () => {
      phase = 'done';
      arrow.style.opacity = '1';
      arrow.style.transform = `translate(${cx}px, ${cy}px) scale(${d / 100})`;
      shaft.style.opacity = '0';
      cust.classList.add('bh-keep');
    };

    const impact = () => {
      anims.push(target.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(.84)', offset: 0.22 }, { transform: 'scale(1.09)', offset: 0.55 }, { transform: 'scale(.98)', offset: 0.8 }, { transform: 'scale(1)' }],
        { duration: 520, easing: 'ease-out' },
      ));
      [0, 130, 260].forEach((delay, i) => {
        const ring = document.createElement('span');
        ring.className = `bh-ring${i % 2 ? ' bh-ring-teal' : ''}`;
        Object.assign(ring.style, { width: `${d}px`, height: `${d}px`, left: `${cx - d / 2}px`, top: `${cy - d / 2}px` });
        fx.insertBefore(ring, target);
        const a = ring.animate(
          [{ transform: 'scale(.7)', opacity: 0.95 }, { transform: `scale(${2.9 + i * 0.5})`, opacity: 0 }],
          { duration: 760, delay, easing: 'cubic-bezier(.22,1,.36,1)', fill: 'both' },
        );
        a.onfinish = () => ring.remove();
        anims.push(a);
      });
      anims.push(shaft.animate(
        [{ transform: 'scaleX(1)', opacity: 1 }, { transform: 'scaleX(.15)', opacity: 0 }],
        { duration: 300, easing: 'cubic-bezier(.55,0,.75,.2)', fill: 'forwards' },
      ));
      anims.push(pin.animate(
        [{ transform: 'rotate(0deg)' }, { transform: 'rotate(-9deg)', offset: 0.18 }, { transform: 'rotate(6deg)', offset: 0.4 }, { transform: 'rotate(-3deg)', offset: 0.62 }, { transform: 'rotate(1deg)', offset: 0.82 }, { transform: 'rotate(0deg)' }],
        { duration: 420, easing: 'ease-out' },
      ));
      arrow.style.transform = `translate(${cx}px, ${cy}px) scale(${d / 100})`;
      cust.classList.add('bh-lit');
      timers.push(window.setTimeout(() => {
        cust.classList.remove('bh-lit');
        cust.classList.add('bh-keep');
        shaft.style.opacity = '0';
        phase = 'done';
      }, 300));
    };

    const play = () => {
      measure();
      clear();
      phase = 'playing';
      shaft.style.opacity = '1';
      arrow.style.opacity = '0';
      const s0 = (d / 100) * 1.85, s1 = d / 100;
      const hb = h1.getBoundingClientRect();
      const sectionLeft = (h1.closest('section') ?? document.body).getBoundingClientRect().left;
      // Path: from off-screen left, a shallow arc above the line, into the center.
      const p0 = { x: sectionLeft - hb.left - fontPx * 1.6, y: cy - fontPx * 0.95 };
      const p2 = { x: cx, y: cy };
      const p1 = { x: (p0.x + p2.x) / 2, y: cy - fontPx * 1.25 };
      const at = (t: number) => ({
        x: (1 - t) ** 2 * p0.x + 2 * (1 - t) * t * p1.x + t * t * p2.x,
        y: (1 - t) ** 2 * p0.y + 2 * (1 - t) * t * p1.y + t * t * p2.y,
      });
      const custIdx = words.indexOf(cust);
      const passes = words.slice(0, custIdx).map((w) => {
        const r = w.getBoundingClientRect();
        return { w, x: r.left - hb.left + r.width / 2, y: r.top - hb.top, done: false };
      }).filter((p) => p.y <= lineTop + 2);
      const ease = (t: number) => t * t * (1.25 - 0.25 * t); // speeds up into the target
      const t0 = performance.now();

      const step = (now: number) => {
        if (cancelled) return;
        const e = now - t0 - FLIGHT_DELAY;
        if (e < 0) { raf = requestAnimationFrame(step); return; }
        const t = Math.min(1, e / FLIGHT);
        const p = ease(t);
        const a = at(p), b = at(Math.min(1, p + 0.01));
        const angle = t < 1 ? Math.atan2(b.y - a.y, b.x - a.x) : 0;
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
        else impact();
      };
      raf = requestAnimationFrame(step);
    };

    const ro = new ResizeObserver(() => {
      measure();
      if (phase === 'done') rest();
    });

    document.fonts.ready.then(() => {
      if (cancelled) return;
      measure();
      ro.observe(h1);
      if (reduce) rest();
      else timers.push(window.setTimeout(play, 350));
    });

    return () => {
      cancelled = true;
      ro.disconnect();
      clear();
    };
  }, []);

  return (
    <h1 ref={h1Ref} className={`bh relative ${className ?? ''}`}>
      <span className="bh-w">We</span> <span className="bh-w">Find</span> <span className="bh-w">Your</span>{' '}
      <span className="bh-w bh-cust">Cust<span className="bh-o">o</span>mers</span>{' '}
      <span className="bh-w">Before</span> <span className="bh-w">They</span> <span className="bh-w">Find</span>{' '}
      <span className="bh-w">Your</span> <span className="bh-w">Competitors</span>
      <span className="bh-fx" aria-hidden="true">
        <span className="bh-target">
          <svg viewBox="-50 -50 100 100">
            <circle r="49" fill="#E39B1F" />
            <circle r="38.5" fill="#FBF1D6" />
            <circle r="28.5" fill="#E39B1F" />
            <circle r="18.5" fill="#FBF1D6" />
            <circle r="9" fill="#E39B1F" />
          </svg>
        </span>
        {/* Arrow pointing right; the tip of the teal pin is the origin. */}
        <span className="bh-arrow">
          <svg width="1" height="1" viewBox="0 0 1 1">
            <defs>
              <linearGradient id={trailId} x1="0" x2="1">
                <stop offset="0" stopColor="#F2B544" stopOpacity="0" />
                <stop offset="1" stopColor="#F2B544" stopOpacity=".55" />
              </linearGradient>
            </defs>
            <g className="bh-shaft">
              <rect x="-250" y="-2.2" width="160" height="4.4" fill={`url(#${trailId})`} />
              <rect x="-150" y="-3.4" width="126" height="6.8" rx="3.4" fill="#F4F1E8" />
              <path d="M-150 -3.4 L-172 -19 L-140 -19 L-122 -3.4 Z M-150 3.4 L-172 19 L-140 19 L-122 3.4 Z" fill="#E39B1F" />
            </g>
            <g className="bh-pin">
              <path d="M0 0 L-24 -12.6 A14 14 0 1 0 -24 12.6 Z" fill="#138a8c" />
              <circle cx="-28" cy="0" r="14" fill="#138a8c" />
              <circle cx="-28" cy="0" r="6" fill="#FBF1D6" />
            </g>
          </svg>
        </span>
      </span>
    </h1>
  );
}

import Image from 'next/image';
import Link from 'next/link';
import GrowthPlanButton from '@/components/growth-plan/GrowthPlanButton';
import { Reveal, LoopVideo } from '@/components/service/Motion';

// Building blocks for the service pages (Meta ads, website design). Editorial
// layout: left-aligned, hairline rules instead of cards, and real work or a
// client quote next to every claim. Server components, so all copy is in the
// HTML for search and AI crawlers.

export const Wrap = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`max-w-[1120px] mx-auto px-4 sm:px-8 lg:px-14 ${className}`}>{children}</div>
);

export const Rule = () => <hr className="border-0 border-t border-white/10 m-0" />;

export const Label = ({ children }: { children: React.ReactNode }) => (
  <span className="font-ui text-[0.74rem] font-semibold tracking-[0.16em] uppercase text-[#5FA99F]">{children}</span>
);

export function PrimaryCta({ source }: { source: string }) {
  return (
    <GrowthPlanButton
      source={source}
      className="svc-sheen group inline-flex items-center justify-center gap-2.5 font-ui font-semibold text-[1rem] bg-[#5FA99F] text-[#061210] px-6 py-[15px] rounded-[10px] hover:bg-[#6fbbb0] active:scale-[0.98] transition-[background-color,transform] duration-200"
    >
      Get started: it&apos;s free{' '}
      <span className="svc-arrow inline-block" aria-hidden="true">
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
      </span>
    </GrowthPlanButton>
  );
}

export function GhostLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center min-h-[52px] font-ui font-semibold text-[1rem] text-white px-6 rounded-[10px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.28)] hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.6)] transition-shadow duration-200"
    >
      {children}
    </Link>
  );
}

export function Hero({
  label,
  title,
  accent,
  lead,
  source,
  ghost,
  note,
  aside,
  alignEnd = true,
}: {
  label: string;
  title: string;
  accent: string;
  lead: string;
  source: string;
  ghost: { href: string; label: string };
  note: string;
  aside: React.ReactNode;
  alignEnd?: boolean;
}) {
  return (
    <Wrap className="pt-[120px] sm:pt-[140px] lg:pt-[150px] pb-12 sm:pb-16 lg:pb-20">
      <div className={`grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-14 ${alignEnd ? 'lg:items-end' : 'lg:items-center'}`}>
        <div>
          <Label>{label}</Label>
          <h1 className="font-heading font-bold text-white text-[2.2rem] sm:text-[2.9rem] lg:text-[3.55rem] leading-[0.98] tracking-[-0.035em] [font-stretch:112%] mt-4">
            {title} <span className="text-[#F2B544]">{accent}</span>
          </h1>
          <p className="font-body text-[1.06rem] sm:text-[1.18rem] text-[#c9d2cf] leading-[1.55] max-w-[46ch] mt-5">{lead}</p>
          <div className="flex flex-col xs:flex-row flex-wrap gap-2.5 mt-7">
            <PrimaryCta source={source} />
            <GhostLink href={ghost.href}>{ghost.label}</GhostLink>
          </div>
          <p className="font-ui text-[0.85rem] text-[#8ea19c] mt-3">{note}</p>
        </div>
        <div>{aside}</div>
      </div>
    </Wrap>
  );
}

// Real 9:16 ads at deliberately uneven heights, each with a plain caption.
// They land into place, then each plays a silent loop, a beat apart.
export function AdStrip({ ads }: { ads: { src: string; loop: string; alt: string; client: string; detail: string }[] }) {
  const offsets = ['', 'mt-8 sm:mt-10', 'mt-3 sm:mt-4'];
  return (
    <Reveal className="svc-strip grid grid-cols-3 gap-2.5 sm:gap-3 items-start">
      {ads.map((ad, i) => (
        <figure key={ad.loop} className={`svc-ad m-0 grid gap-2 ${offsets[i % 3]}`}>
          <LoopVideo
            src={ad.loop}
            poster={ad.src}
            label={ad.alt}
            delay={650 + i * 700}
            sizes="(max-width: 1024px) 31vw, 170px"
            className="aspect-[9/16] rounded-xl border border-white/10"
          />
          <figcaption className="font-ui text-[0.74rem] sm:text-[0.78rem] leading-[1.35] text-[#8ea19c]">
            <b className="block text-[#e8ecea] font-semibold">{ad.client}</b>
            {ad.detail}
          </figcaption>
        </figure>
      ))}
    </Reveal>
  );
}

export function SectionHead({ title, children }: { title: string; children?: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-4 lg:gap-6 lg:items-end mb-7 sm:mb-10">
      <h2 className="font-heading font-bold text-white text-[1.75rem] sm:text-[2.2rem] lg:text-[2.6rem] leading-[1.02] tracking-[-0.03em] [font-stretch:110%]">
        {title}
      </h2>
      {children && <div className="font-body text-[1rem] text-[#b8c3c0] leading-relaxed max-w-[52ch]">{children}</div>}
    </div>
  );
}

export function Section({ children, flushTop = false }: { children: React.ReactNode; flushTop?: boolean }) {
  return <Wrap className={`${flushTop ? 'pt-0' : 'pt-12 sm:pt-16 lg:pt-24'} pb-12 sm:pb-16 lg:pb-24`}>{children}</Wrap>;
}

// One claim on the left, the proof right beside it.
export function Ledger({ rows }: { rows: { title: string; body: string; proof: React.ReactNode }[] }) {
  return (
    <div className="border-b border-white/10">
      {rows.map((r) => (
        <Reveal key={r.title} className="svc-row grid lg:grid-cols-[0.9fr_1.1fr] gap-5 lg:gap-14 py-6 sm:py-7 items-start">
          <div className="svc-claim">
            <h3 className="font-heading font-bold text-white text-[1.25rem] sm:text-[1.5rem] tracking-[-0.02em] [font-stretch:106%]">{r.title}</h3>
            <p className="font-body text-[1rem] text-[#b8c3c0] leading-relaxed max-w-[42ch] mt-2">{r.body}</p>
          </div>
          <div className="svc-proof">{r.proof}</div>
        </Reveal>
      ))}
    </div>
  );
}

export function Quote({ text, name, role }: { text: string; name: string; role: string }) {
  return (
    <figure className="m-0">
      <blockquote className="m-0 font-body text-[1.04rem] sm:text-[1.16rem] leading-[1.5] text-[#f2f2ee]">
        <span className="svc-mark text-[#F2B544] font-extrabold text-[1.6em] leading-[0] align-[-0.35em] mr-0.5" aria-hidden="true">
          &ldquo;
        </span>
        {text}
      </blockquote>
      <figcaption className="font-ui text-[0.85rem] text-[#8ea19c] mt-2.5">
        <b className="text-[#e8ecea] font-semibold">{name}</b> · {role}
      </figcaption>
    </figure>
  );
}

export const Fact = ({ lead, children }: { lead: string; children: React.ReactNode }) => (
  <p className="font-body text-[1rem] text-[#d9e1de] leading-relaxed">
    <span className="text-[#8fd0c6] font-semibold">{lead}</span> {children}
  </p>
);

export const Thumb = ({ src, alt, w = 96 }: { src: string; alt: string; w?: number }) => (
  <div className="relative aspect-[9/16] rounded-[9px] overflow-hidden border border-white/10 shrink-0" style={{ width: w }}>
    <Image src={src} alt={alt} fill sizes={`${w}px`} className="object-cover" />
  </div>
);

// Time markers your intake already promises, instead of 1-2-3 circles.
export function Timeline({ items }: { items: { when: string; title: string; body: string }[] }) {
  return (
    <Reveal className="svc-time relative">
      <span className="svc-line" aria-hidden="true" />
      <ol className="list-none m-0 p-0 grid sm:grid-cols-2 lg:grid-cols-4 pt-[2px]">
        {items.map((it) => (
          <li key={it.when} className="svc-step relative pt-5 pr-5 pb-2 grid gap-1.5">
            <span className="svc-dot absolute -top-[7px] left-0 w-3 h-3 rounded-full bg-[#0a0a0a] border-2 border-[#5FA99F]" aria-hidden="true" />
            <span className="font-ui text-[0.76rem] font-semibold tracking-[0.12em] uppercase text-[#F2B544]">{it.when}</span>
            <h3 className="font-heading font-bold text-white text-[1.1rem]">{it.title}</h3>
            <p className="font-body text-[0.95rem] text-[#a9b6b3] leading-relaxed">{it.body}</p>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}

// FAQ with the answers on the page (two columns, no accordion).
export function QAGrid({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="grid md:grid-cols-2 gap-x-14">
      {items.map((f) => (
        <div key={f.question} className="py-5 border-t border-white/10">
          <h3 className="font-heading font-semibold text-white text-[1.04rem]">{f.question}</h3>
          <p className="font-body text-[0.97rem] text-[#aebbb8] leading-relaxed mt-1.5">{f.answer}</p>
        </div>
      ))}
    </div>
  );
}

export function Closing({ title, source }: { title: string; source: string }) {
  return (
    <Wrap className="py-12 sm:py-16 lg:py-24">
     <Reveal className="svc-cta grid md:grid-cols-[1.2fr_auto] gap-6 md:items-end">
      <div>
        <h2 className="font-heading font-bold text-white text-[1.9rem] sm:text-[2.5rem] lg:text-[3.1rem] leading-[1.02] tracking-[-0.03em] [font-stretch:110%]">
          {title}
        </h2>
        <p className="font-ui text-[0.95rem] text-[#9fb0ac] mt-3">4 quick questions · About 60 seconds · Same business day reply</p>
      </div>
      <PrimaryCta source={source} />
     </Reveal>
    </Wrap>
  );
}

export const textLink = 'text-link text-[#8fd0c6] underline underline-offset-[3px] hover:text-white transition-colors';

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
  };
}

export const JsonLd = ({ data }: { data: object }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);

import Link from 'next/link';
import GrowthPlanButton from '@/components/growth-plan/GrowthPlanButton';

// Shared building blocks for the service, about and hub pages. Server
// components: all copy renders into the HTML for search and AI crawlers.

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function PageHero({
  eyebrow,
  title,
  intro,
  ctaSource,
}: {
  eyebrow: string;
  title: string;
  intro: React.ReactNode;
  ctaSource?: string;
}) {
  return (
    <section className="relative pt-[130px] sm:pt-[160px] pb-14 sm:pb-20 px-4 sm:px-6 overflow-hidden">
      <div
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-15 blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5FA99F 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="relative max-w-[860px] mx-auto">
        <p className="font-ui text-[#5FA99F] text-[0.85rem] font-semibold uppercase tracking-[0.12em] mb-4">{eyebrow}</p>
        <h1 className="font-heading text-[2.1rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold text-white leading-[1.1] mb-6">
          {title}
        </h1>
        <div className="font-body text-[1.1rem] sm:text-[1.2rem] text-gray-300 leading-relaxed max-w-[68ch] space-y-4">
          {intro}
        </div>
        {ctaSource && (
          <div className="mt-8 flex flex-col xs:flex-row gap-3">
            <PrimaryCta source={ctaSource} />
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center font-ui text-[1rem] px-8 py-4 text-white font-semibold rounded-xl border border-white/25 hover:border-white/60 transition-colors"
            >
              See our work
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

export function PrimaryCta({ source, label = "Get started: it's free" }: { source: string; label?: string }) {
  return (
    <GrowthPlanButton
      source={source}
      className="group inline-flex items-center justify-center gap-2 font-ui text-[1rem] px-8 py-4 bg-[#5FA99F] text-[#061210] font-semibold rounded-xl shadow-[0_0_30px_rgba(95,169,159,0.35)] hover:bg-[#6fbbb0] transition-colors"
    >
      {label} <span className="inline-block transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
    </GrowthPlanButton>
  );
}

export function Section({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="px-4 sm:px-6 py-12 sm:py-16 border-t border-white/[0.06]">
      <div className="max-w-[860px] mx-auto">
        <h2 className="font-heading text-[1.6rem] sm:text-[2rem] font-semibold text-white mb-4">{title}</h2>
        {intro && (
          <div className={`font-body text-[1.05rem] text-gray-300 leading-relaxed max-w-[68ch] space-y-4 ${children ? 'mb-8' : ''}`}>{intro}</div>
        )}
        {children}
      </div>
    </section>
  );
}

export function CheckList({ items }: { items: { title: string; body: string }[] }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-4">
      {items.map((it) => (
        <li key={it.title} className="bg-[#111] border border-[#5FA99F]/20 rounded-2xl p-5">
          <h3 className="font-heading text-[1.1rem] font-semibold text-white mb-1.5 flex items-start gap-2.5">
            <span className="mt-[0.45em] w-2 h-2 rounded-full bg-[#5FA99F] flex-shrink-0" aria-hidden="true" />
            {it.title}
          </h3>
          <p className="font-body text-[0.98rem] text-gray-400 leading-relaxed pl-[18px]">{it.body}</p>
        </li>
      ))}
    </ul>
  );
}

export function Steps({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <ol className="grid gap-4">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-4">
          <span className="font-heading text-[#5FA99F] text-[1.1rem] font-bold w-9 h-9 rounded-full border border-[#5FA99F]/40 flex items-center justify-center flex-shrink-0">
            {i + 1}
          </span>
          <div>
            <h3 className="font-heading text-[1.1rem] font-semibold text-white">{s.title}</h3>
            <p className="font-body text-[1rem] text-gray-400 leading-relaxed">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function LinkCards({ items }: { items: { href: string; title: string; body: string; tag?: string }[] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      {items.map((it) => (
        <Link
          key={it.href + it.title}
          href={it.href}
          className="group block bg-[#111] border border-[#5FA99F]/20 hover:border-[#5FA99F]/60 rounded-2xl p-5 transition-colors"
        >
          {it.tag && <span className="font-ui text-[0.75rem] uppercase tracking-[0.1em] text-[#5FA99F]">{it.tag}</span>}
          <h3 className="font-heading text-[1.15rem] font-semibold text-white mt-1 mb-1.5 group-hover:text-[#5FA99F] transition-colors">
            {it.title} <span aria-hidden="true">→</span>
          </h3>
          <p className="font-body text-[0.98rem] text-gray-400 leading-relaxed">{it.body}</p>
        </Link>
      ))}
    </div>
  );
}

export function FaqList({ items }: { items: { question: string; answer: string }[] }) {
  // Native <details>: answers are in the HTML and work without JavaScript.
  return (
    <div className="grid gap-3">
      {items.map((f) => (
        <details key={f.question} className="group bg-[#111] border border-[#5FA99F]/20 rounded-2xl open:border-[#5FA99F]/50">
          <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 font-heading text-[1.05rem] font-semibold text-white">
            {f.question}
            <span className="text-[#5FA99F] transition-transform group-open:rotate-45 text-[1.4rem] leading-none" aria-hidden="true">+</span>
          </summary>
          <p className="px-5 pb-5 font-body text-[1rem] text-gray-300 leading-relaxed">{f.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `https://driveleadmedia.com${it.path}`,
    })),
  };
}

export function ClosingCta({ title, body, source }: { title: string; body: string; source: string }) {
  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-[760px] mx-auto text-center bg-[#111] border border-[#5FA99F]/25 rounded-[24px] p-8 sm:p-10">
        <h2 className="font-heading text-[1.6rem] sm:text-[2rem] font-semibold text-white mb-3">{title}</h2>
        <p className="font-body text-[1.05rem] text-gray-300 leading-relaxed mb-7">{body}</p>
        <PrimaryCta source={source} />
        <p className="font-ui text-[0.85rem] text-gray-500 mt-4">4 quick questions · About 60 seconds · We reach out the same business day</p>
      </div>
    </section>
  );
}

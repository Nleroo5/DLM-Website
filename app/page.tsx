import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import ProblemSolution from '@/components/ProblemSolution';
import WhatWeDeliver from '@/components/WhatWeDeliver';

// Dynamic imports for below-fold components to reduce initial bundle size
const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: true });
const ActorNetwork = dynamic(() => import('@/components/ActorNetwork'), { ssr: true });
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), { ssr: true });
const Founders = dynamic(() => import('@/components/Founders'), { ssr: true });
const TargetedAdsCTA = dynamic(() => import('@/components/TargetedAdsCTA'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <WhatWeDeliver />
      <Testimonials />
      <ActorNetwork />
      <HowItWorks />
      <Founders />
      <TargetedAdsCTA />
    </main>
  );
}

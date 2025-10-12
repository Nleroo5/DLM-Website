import Hero from '@/components/Hero';
import Founders from '@/components/Founders';
import ProblemSolution from '@/components/ProblemSolution';
import WhatWeDeliver from '@/components/WhatWeDeliver';
import Testimonials from '@/components/Testimonials';
import ActorNetwork from '@/components/ActorNetwork';
import HowItWorks from '@/components/HowItWorks';
import TargetedAdsCTA from '@/components/TargetedAdsCTA';

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

import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import ProgressBar from '@/components/ProgressBar';

export const metadata: Metadata = {
  title: 'Why Meta Targeted Ads Beat Traditional Advertising | Drive Lead Media',
  description: 'Stop wasting money on people who don\'t want what you\'re selling. Learn how targeted ads are 85% cheaper and more effective than traditional advertising.',
};

export default function TargetedAdsPage() {
  return (
    <main className="min-h-screen bg-transparent text-[#012E40] font-serif">
      <ProgressBar />

      {/* Page Header */}
      <header className="bg-transparent py-[clamp(30px,6vw,40px)] pb-[clamp(20px,4vw,30px)] text-center pt-[180px]">
        <div className="max-w-[1400px] mx-auto px-[clamp(24px,4vw,40px)]">
          <h1 className="text-[1.3rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem] text-[#F5F5DC] font-normal leading-[1.2] tracking-[-0.02em] max-w-[1000px] mx-auto">
            Why Meta Targeted Ads Are More Effective Than Traditional Advertising
          </h1>
        </div>
      </header>

      {/* Section 1: What Are Targeted Ads */}
      <section className="relative bg-transparent py-[clamp(20px,3vw,30px)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[clamp(24px,4vw,40px)] relative z-10">
          <TitleBox title="What Are Targeted Ads? (Let's Start Simple)">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[clamp(16px,3vw,24px)] items-center">
              <div>
                <p className="text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.375rem] text-[#012E40] leading-[1.6] mb-[clamp(12px,2vw,16px)]">
                  <strong>First, let's clarify:</strong> When we say "Meta," we're talking about the company that owns Facebook and Instagram - the two biggest social media platforms where most targeted advertising happens.
                </p>
                <p className="text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] xl:text-[1.4rem] text-[#012E40] leading-[1.5] mb-[clamp(12px,2vw,16px)]">
                  Think of it like this:
                </p>
                <p className="text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.375rem] text-[#012E40] leading-[1.6] mb-[clamp(12px,2vw,16px)]">
                  <span className="text-[#F2A922] font-semibold">Traditional advertising</span> is like shouting your message in a crowded mall, hoping the right people hear you.
                </p>
                <p className="text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.375rem] text-[#012E40] leading-[1.6] mb-[clamp(12px,2vw,16px)]">
                  <span className="text-[#F2A922] font-semibold">Targeted advertising</span> is like walking directly up to people who are already interested in what you're selling and having a conversation with them.
                </p>
                <p className="text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.375rem] text-[#012E40] leading-[1.6]">
                  Targeted ads use information about people (like their age, interests, and online behavior) to show your advertisement only to people who are likely to be interested in your product or service.
                </p>
              </div>
              <div className="text-center">
                <Image
                  src="/images/target-ads.png"
                  alt="Traditional vs targeted advertising comparison"
                  width={600}
                  height={400}
                  className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] xl:h-[500px] rounded-[clamp(10px,2vw,14px)] border-2 border-[rgba(242,169,34,0.3)] shadow-lg hover:scale-105 transition-transform duration-300 object-cover object-[center_85%]"
                />
              </div>
            </div>
          </TitleBox>
        </div>
      </section>

      {/* Section 2: Real Example */}
      <section className="relative bg-transparent py-[clamp(20px,3vw,30px)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[clamp(24px,4vw,40px)] relative z-10">
          <TitleBox title="Real Example: Your Gym Advertisement">
            <HighlightBox title="📱 Real Example:">
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55] mb-[clamp(10px,2vw,14px)]">
                Instead of putting a gym advertisement in the local newspaper (where everyone sees it, including people who hate exercise), Meta can show your gym ad only to people who:
              </p>

              <ul className="my-[clamp(12px,2.5vw,16px)] pl-0 list-none text-left space-y-[clamp(8px,1.5vw,12px)]">
                <AudienceItem>Live within 10 miles of your gym</AudienceItem>
                <AudienceItem>Are aged 25-45</AudienceItem>
                <AudienceItem>Have shown interest in fitness, healthy eating, or weight loss</AudienceItem>
                <AudienceItem>Have visited fitness websites recently</AudienceItem>
              </ul>

              <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55]">
                <strong>Result:</strong> You spend money only on people who might actually <span className="text-[#F2A922] font-semibold">join your gym</span>.
              </p>
            </HighlightBox>
          </TitleBox>
        </div>
      </section>

      {/* Section 3: The Numbers */}
      <section className="relative bg-transparent py-[clamp(20px,3vw,30px)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[clamp(24px,4vw,40px)] relative z-10">
          <TitleBox title="The Numbers Don't Lie">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(12px,2.5vw,18px)] my-[clamp(16px,3vw,24px)]">
              <ComparisonCard
                type="traditional"
                title="Traditional Ads"
                stat="$5.26"
                description="Average cost per click"
                note="(When someone clicks your ad)"
              />
              <ComparisonCard
                type="meta"
                title="Meta Targeted Ads"
                stat="$0.77"
                description="Average cost per click"
                note="(When someone clicks your ad)"
              />
            </div>

            <p className="text-[0.75rem] text-[#666] text-center mt-[10px] opacity-70">
              <em>Source: Industry averages based on WordStream 2024 benchmarks</em>
            </p>

            <p className="text-center text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[1.75rem] xl:text-[2rem] text-[#F2A922] font-semibold my-[clamp(12px,2.5vw,18px)]">
              That's 85% Cheaper!
            </p>
            <p className="text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] lg:text-[1.2rem] xl:text-[1.375rem] text-[#012E40] leading-[1.6] text-center">
              With Meta targeted ads, you pay <strong>85% less</strong> for each person who clicks on your ad compared to traditional advertising methods.
            </p>
          </TitleBox>
        </div>
      </section>

      {/* Section 4: Traditional Advertising */}
      <section className="relative bg-transparent py-[clamp(20px,3vw,30px)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[clamp(24px,4vw,40px)] relative z-10">
          <TitleBox title="How Traditional Advertising Works">
            <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55] mb-[clamp(10px,2vw,14px)]">
              Traditional advertising includes things like:
            </p>
            <ul className="my-[clamp(12px,2.5vw,16px)] pl-0 list-none text-left space-y-[clamp(8px,1.5vw,12px)]">
              <AudienceItem><strong>TV commercials</strong> - Everyone watching that channel sees your ad</AudienceItem>
              <AudienceItem><strong>Radio ads</strong> - Everyone listening to that station hears your ad</AudienceItem>
              <AudienceItem><strong>Newspaper ads</strong> - Everyone who reads that section sees your ad</AudienceItem>
              <AudienceItem><strong>Billboards</strong> - Everyone driving by sees your ad</AudienceItem>
            </ul>

            <HighlightBox title="🚗 Example: Car Dealership">
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55] mb-[clamp(10px,2vw,14px)]">
                You own a luxury car dealership. You put an ad on TV during the evening news.
              </p>
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55] mb-[clamp(10px,2vw,14px)]">
                <strong>Who sees it:</strong> Everyone watching - including teenagers with no money, people who just bought a car, people who can't afford luxury cars, and people who live 500 miles away.
              </p>
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55]">
                <strong>Result:</strong> You paid to show your ad to thousands of people who will never buy from you.
              </p>
            </HighlightBox>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(12px,2.5vw,16px)] my-[clamp(14px,2.5vw,18px)]">
              <ProsConsCard type="pros" title="✅ Traditional Advertising Pros">
                <AudienceItem>Reaches lots of people</AudienceItem>
                <AudienceItem>Builds brand awareness</AudienceItem>
                <AudienceItem>Familiar to most businesses</AudienceItem>
              </ProsConsCard>

              <ProsConsCard type="cons" title="❌ Traditional Advertising Cons">
                <AudienceItem>Very expensive</AudienceItem>
                <AudienceItem>Can't target specific people</AudienceItem>
                <AudienceItem>Hard to measure results</AudienceItem>
                <AudienceItem>Lots of wasted money</AudienceItem>
              </ProsConsCard>
            </div>
          </TitleBox>
        </div>
      </section>

      {/* Section 5: How Meta Works */}
      <section className="relative bg-transparent py-[clamp(20px,3vw,30px)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[clamp(24px,4vw,40px)] relative z-10">
          <TitleBox title="How Meta Targeted Ads Work">
            <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55] mb-[clamp(10px,2vw,14px)]">
              Meta (Facebook and Instagram) knows a lot about its users because people willingly share information:
            </p>
            <ul className="my-[clamp(12px,2.5vw,16px)] pl-0 list-none text-left space-y-[clamp(8px,1.5vw,12px)]">
              <AudienceItem><strong>Demographics:</strong> Age, location, job, relationship status</AudienceItem>
              <AudienceItem><strong>Interests:</strong> Pages they like, posts they engage with</AudienceItem>
              <AudienceItem><strong>Behavior:</strong> What they buy, websites they visit, apps they use</AudienceItem>
              <AudienceItem><strong>Connections:</strong> Friends and family who might have similar interests</AudienceItem>
            </ul>

            <HighlightBox title="🚗 Same Car Dealership Example with Meta Ads:">
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55] mb-[clamp(10px,2vw,14px)]">
                Instead of showing your luxury car ad to everyone, Meta shows it only to people who:
              </p>
              <ul className="my-[clamp(12px,2.5vw,16px)] pl-0 list-none text-left space-y-[clamp(8px,1.5vw,12px)]">
                <AudienceItem>Live within 50 miles of your dealership</AudienceItem>
                <AudienceItem>Are aged 35-65 (prime luxury car buying age)</AudienceItem>
                <AudienceItem>Have household income over $75,000</AudienceItem>
                <AudienceItem>Have shown interest in luxury brands</AudienceItem>
                <AudienceItem>Have visited car websites recently</AudienceItem>
              </ul>
              <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55]">
                <strong>Result:</strong> Every person who sees your ad is a potential customer.
              </p>
            </HighlightBox>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(12px,2.5vw,16px)] my-[clamp(14px,2.5vw,18px)]">
              <ProsConsCard type="pros" title="✅ Meta Targeted Ads Pros">
                <AudienceItem>Much cheaper than traditional ads</AudienceItem>
                <AudienceItem>Only reach interested people</AudienceItem>
                <AudienceItem>See results immediately</AudienceItem>
                <AudienceItem>Can change ads anytime</AudienceItem>
                <AudienceItem>Track every click and sale</AudienceItem>
              </ProsConsCard>

              <ProsConsCard type="cons" title="❌ Meta Targeted Ads Cons">
                <AudienceItem>Requires learning new skills</AudienceItem>
                <AudienceItem>Need to create digital content</AudienceItem>
                <AudienceItem>People can ignore online ads</AudienceItem>
              </ProsConsCard>
            </div>
          </TitleBox>
        </div>
      </section>

      {/* Section 6: Direct Comparison Table */}
      <section className="relative bg-transparent py-[clamp(20px,3vw,30px)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[clamp(24px,4vw,40px)] relative z-10">
          <TitleBox title="Direct Comparison: Traditional vs Meta Targeted Ads">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse my-[clamp(16px,3vw,24px)] bg-gradient-to-br from-[rgba(238,244,217,0.95)] to-[rgba(238,244,217,0.9)] rounded-[clamp(10px,2vw,14px)] overflow-hidden shadow-lg backdrop-blur-[20px]">
                <thead>
                  <tr className="bg-gradient-to-r from-[rgba(242,169,34,0.9)] to-[rgba(5,144,140,0.8)]">
                    <th className="text-[#012E40] p-[clamp(10px,2vw,14px)] text-left font-normal text-[clamp(0.9rem,2vw,1.05rem)] leading-[1.4]">What You Want to Know</th>
                    <th className="text-[#012E40] p-[clamp(10px,2vw,14px)] text-left font-normal text-[clamp(0.9rem,2vw,1.05rem)] leading-[1.4]">Traditional Advertising</th>
                    <th className="text-[#012E40] p-[clamp(10px,2vw,14px)] text-left font-normal text-[clamp(0.9rem,2vw,1.05rem)] leading-[1.4]">Meta Targeted Ads</th>
                  </tr>
                </thead>
                <tbody>
                  <TableRow
                    question="Who sees my ad?"
                    traditional="Everyone (including people not interested)"
                    meta="Only people likely to buy from you"
                  />
                  <TableRow
                    question="Can I change my ad?"
                    traditional="No - once it runs, it's locked in"
                    meta="Yes - change anytime, even daily"
                  />
                  <TableRow
                    question="How do I know if it's working?"
                    traditional="Very hard to measure"
                    meta="See exactly who clicked and bought"
                  />
                  <TableRow
                    question="How fast can I start?"
                    traditional="Weeks or months"
                    meta="Same day"
                  />
                  <TableRow
                    question="Can people interact with my ad?"
                    traditional="No - just see or hear it"
                    meta="Yes - like, comment, share, click"
                  />
                  <TableRow
                    question="How precise is the targeting?"
                    traditional="Broad demographics only"
                    meta="Exact interests, behaviors, and location"
                    isLast={true}
                  />
                </tbody>
              </table>
            </div>
          </TitleBox>
        </div>
      </section>

      {/* Section 7: Real Business Results */}
      <section className="relative bg-transparent py-[clamp(20px,3vw,30px)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[clamp(24px,4vw,40px)] relative z-10">
          <TitleBox title="What Real Businesses Are Seeing">
            <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55] mb-[clamp(10px,2vw,14px)]">
              Here's what happens when businesses switch from traditional advertising to Meta targeted ads:
            </p>

            <div className="bg-gradient-to-br from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0.05)] border-2 border-[rgba(16,185,129,0.3)] rounded-[clamp(8px,1.5vw,12px)] p-[clamp(14px,2.5vw,18px)] my-[clamp(14px,2.5vw,18px)] backdrop-blur-[10px]">
              <h3 className="text-[#059669] my-0 mb-[clamp(8px,1.5vw,12px)] text-[clamp(1rem,2.2vw,1.2rem)] leading-[1.3]">
                📊 Actual Results:
              </h3>
              <ul className="my-[clamp(12px,2.5vw,16px)] pl-0 list-none text-left space-y-[clamp(8px,1.5vw,12px)]">
                <AudienceItem><strong>54% of business owners</strong> say Meta ads are "very effective" for getting sales</AudienceItem>
                <AudienceItem><strong>29% of marketers</strong> get better results from Meta than any other advertising</AudienceItem>
                <AudienceItem>Professional Meta ads typically return <strong>$4-5 for every $1 spent</strong></AudienceItem>
              </ul>
              <p className="text-[0.7rem] text-[#666] mt-[8px] opacity-70">
                <em>Sources: Social Media Examiner 2024 Report, HubSpot Marketing Statistics</em>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[clamp(12px,2.5vw,18px)] my-[clamp(16px,3vw,24px)]">
              <div className="bg-gradient-to-br from-[rgba(238,244,217,0.95)] to-[rgba(238,244,217,0.9)] rounded-[clamp(10px,2vw,14px)] p-[clamp(16px,3vw,22px)] text-center border-2 border-[rgba(220,38,38,0.4)] shadow-md backdrop-blur-[20px] min-h-[140px] flex flex-col justify-center hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-[clamp(1rem,2.2vw,1.2rem)] font-normal mb-[clamp(8px,1.5vw,12px)] text-[#012E40] leading-[1.3]">
                  Traditional Advertising
                </h3>
                <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55]">
                  "We spent $5,000 on a radio campaign and aren't sure if anyone called because of it."
                </p>
              </div>

              <div className="bg-gradient-to-br from-[rgba(238,244,217,0.95)] to-[rgba(238,244,217,0.9)] rounded-[clamp(10px,2vw,14px)] p-[clamp(16px,3vw,22px)] text-center border-2 border-[rgba(59,130,246,0.4)] shadow-md backdrop-blur-[20px] min-h-[140px] flex flex-col justify-center hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-[clamp(1rem,2.2vw,1.2rem)] font-normal mb-[clamp(8px,1.5vw,12px)] text-[#012E40] leading-[1.3]">
                  Meta Targeted Ads
                </h3>
                <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55]">
                  "We spent $500 on Meta ads and can see exactly 23 people clicked, 8 filled out our form, and 3 became customers."
                </p>
              </div>
            </div>
          </TitleBox>
        </div>
      </section>

      {/* Section 8: Why This Matters */}
      <section className="relative bg-transparent py-[clamp(20px,3vw,30px)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[clamp(24px,4vw,40px)] relative z-10">
          <TitleBox title="Why This Matters for Your Business">
            <p className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55] mb-[clamp(10px,2vw,14px)]">
              Whether you run a restaurant, sell products online, offer services, or have any other business, here's why Meta targeted ads are more effective:
            </p>

            <div className="bg-gradient-to-br from-[rgba(242,169,34,0.1)] to-[rgba(242,169,34,0.05)] border-2 border-[rgba(242,169,34,0.4)] rounded-[clamp(8px,1.5vw,12px)] p-[clamp(14px,2.5vw,18px)] my-[clamp(14px,2.5vw,18px)] backdrop-blur-[10px]">
              <h3 className="text-[#92400e] my-0 mb-[clamp(8px,1.5vw,12px)] text-[clamp(1rem,2.2vw,1.2rem)] leading-[1.3]">
                🎪 Stop Performing for the Wrong Audience
              </h3>
              <p className="text-[0.9rem] sm:text-[0.95rem] md:text-[1.05rem] lg:text-[1.3rem] xl:text-[1.6rem] text-[#012E40] leading-[1.55]">
                Traditional advertising is like doing a magic show for people who don't like magic. Meta targeted ads are like performing only for people who love magic shows and are ready to pay for tickets.
              </p>
            </div>

            <h3 className="text-[1rem] sm:text-[1.05rem] md:text-[1.15rem] lg:text-[1.3rem] xl:text-[1.5rem] text-[#012E40] my-[20px_0_15px] text-center">
              The Bottom Line:
            </h3>
            <ul className="my-[clamp(12px,2.5vw,16px)] pl-0 list-none text-left space-y-[clamp(8px,1.5vw,12px)]">
              <AudienceItem><strong>Waste less money</strong> - Only pay to reach interested people</AudienceItem>
              <AudienceItem><strong>Get better results</strong> - More clicks, more customers, more sales</AudienceItem>
              <AudienceItem><strong>Better targeting</strong> - Reach people based on their actual interests and behavior</AudienceItem>
              <AudienceItem><strong>See what works</strong> - Know exactly which ads bring in customers</AudienceItem>
              <AudienceItem><strong>Adjust quickly</strong> - Change your message based on what's working</AudienceItem>
            </ul>
          </TitleBox>
        </div>
      </section>

      {/* Section 9: Ready to Try */}
      <section className="relative bg-transparent py-[clamp(20px,3vw,30px)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-[clamp(24px,4vw,40px)] relative z-10">
          <TitleBox title="Ready to Try Meta Targeted Ads?">
            <p className="text-center text-[0.9rem] sm:text-[0.95rem] md:text-[1rem] lg:text-[1.15rem] xl:text-[1.3rem] text-[#012E40] leading-[1.55] mb-[clamp(10px,2vw,14px)]">
              The difference is clear: Meta targeted ads cost <span className="text-[#F2A922] font-semibold">85% less</span> than traditional advertising and only reach people interested in your business.
            </p>

            <p className="text-center text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] leading-[1.55]">
              But here's the thing - while Meta targeted ads are more effective, they do require knowledge and experience to set up correctly. That's where professional help makes the difference between wasting money and getting great results.
            </p>
          </TitleBox>
        </div>
      </section>

      {/* Final Highlight Section */}
      <section className="bg-gradient-to-br from-[rgba(242,169,34,0.9)] to-[rgba(133,144,140,0.8)] py-[clamp(30px,6vw,50px)] px-[clamp(16px,3vw,24px)] text-center relative overflow-hidden rounded-[clamp(12px,2.5vw,18px)] mx-[clamp(8px,1.5vw,12px)] my-[clamp(20px,4vw,30px)] backdrop-blur-[10px] border-2 border-[rgba(242,169,34,0.4)]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[1.3rem] sm:text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[2.75rem] text-[#012E40] font-semibold leading-[1.5] max-w-[900px] mx-auto">
            Stop wasting money on people who don't want what you're selling.
          </p>
        </div>
      </section>

      {/* Floating CTA */}
      <div className="fixed bottom-[clamp(12px,2.5vw,20px)] right-[clamp(12px,2.5vw,20px)] z-[99999] max-w-[clamp(200px,35vw,260px)]">
        <Link
          href="/contact"
          className="block bg-gradient-to-br from-[rgba(238,244,217,0.95)] to-[rgba(238,244,217,0.9)] border-2 border-[#012E40] rounded-[clamp(10px,2vw,16px)] p-[clamp(12px,2.5vw,16px)_clamp(16px,3vw,20px)] backdrop-blur-[20px] shadow-[0_15px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-[2px] hover:border-[#F2A922] hover:shadow-[0_18px_35px_rgba(0,0,0,0.2),0_0_15px_rgba(242,169,34,0.3)]"
        >
          <p className="text-[clamp(0.85rem,1.8vw,1rem)] text-[#012E40] font-serif text-center leading-[1.3] m-0">
            Want to See How Meta Targeted Ads Can Work for Your Business?
          </p>
        </Link>
      </div>
    </main>
  );
}

// Reusable Components
function TitleBox({ title, children }: { title: string; children: React.ReactNode}) {
  return (
    <div className="bg-gradient-to-br from-[rgba(238,244,217,0.95)] to-[rgba(238,244,217,0.9)] border-2 border-[rgba(5,144,140,0.4)] rounded-[clamp(12px,2vw,16px)] p-[clamp(16px,3vw,24px)] backdrop-blur-[20px] shadow-[0_8px_20px_rgba(0,0,0,0.1),0_4px_8px_rgba(5,144,140,0.06)] transition-all duration-[400ms] mb-[clamp(20px,4vw,30px)] relative z-[2] hover:-translate-y-[2px] hover:shadow-[0_12px_25px_rgba(0,0,0,0.15)] hover:border-[rgba(242,169,34,0.6)]">
      <h2 className="text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] xl:text-[2.25rem] text-[#012E40] font-normal text-center mb-[clamp(12px,2.5vw,18px)] leading-[1.2] font-serif">
        {title}
      </h2>
      {children}
    </div>
  );
}

function HighlightBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-[rgba(242,169,34,0.1)] to-[rgba(242,169,34,0.05)] border-2 border-[rgba(242,169,34,0.4)] rounded-[clamp(8px,1.5vw,12px)] p-[clamp(14px,2.5vw,18px)] my-[clamp(14px,2.5vw,18px)] backdrop-blur-[10px]">
      <h3 className="text-[#92400e] my-0 mb-[clamp(8px,1.5vw,12px)] text-[clamp(1rem,2.2vw,1.2rem)] leading-[1.3]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function AudienceItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="text-[clamp(0.95rem,2vw,1.1rem)] text-[#012E40] relative pl-[clamp(14px,2.5vw,18px)] transition-all duration-300 hover:translate-x-[3px] hover:text-[#05908C] before:content-['→'] before:text-[#F2A922] before:text-[clamp(0.9rem,1.8vw,1rem)] before:absolute before:left-0 before:top-0 before:transition-all before:duration-300 hover:before:translate-x-[2px] hover:before:text-[#05908C]">
      {children}
    </li>
  );
}

function ComparisonCard({
  type,
  title,
  stat,
  description,
  note
}: {
  type: 'traditional' | 'meta';
  title: string;
  stat: string;
  description: string;
  note: string;
}) {
  const borderColor = type === 'traditional' ? 'rgba(220,38,38,0.4)' : 'rgba(59,130,246,0.4)';
  const hoverBorderColor = type === 'traditional' ? 'rgba(220,38,38,0.6)' : 'rgba(59,130,246,0.6)';
  const statColor = type === 'traditional' ? '#dc2626' : '#2563eb';

  return (
    <div
      className="bg-gradient-to-br from-[rgba(238,244,217,0.95)] to-[rgba(238,244,217,0.9)] rounded-[clamp(10px,2vw,14px)] p-[clamp(16px,3vw,22px)] text-center relative transition-all duration-300 backdrop-blur-[20px] shadow-[0_4px_12px_rgba(0,0,0,0.06)] min-h-[140px] flex flex-col justify-center hover:-translate-y-[3px] hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)]"
      style={{
        border: `2px solid ${borderColor}`,
      }}
    >
      <h3 className="text-[clamp(1rem,2.2vw,1.2rem)] font-normal mb-[clamp(8px,1.5vw,12px)] text-[#012E40] leading-[1.3]">
        {title}
      </h3>
      <div
        className="text-[clamp(2rem,4vw,2.8rem)] font-normal my-[clamp(8px,1.5vw,12px)] leading-[1]"
        style={{
          color: statColor,
          textShadow: '0 0 12px rgba(242,169,34,0.4)',
        }}
      >
        {stat}
      </div>
      <p className="text-[clamp(0.85rem,1.8vw,1rem)] text-[#012E40] opacity-80 mb-[clamp(4px,0.8vw,6px)]">
        {description}
      </p>
      <small className="text-[clamp(0.75rem,1.6vw,0.9rem)] text-[#012E40] opacity-70">{note}</small>
    </div>
  );
}

function ProsConsCard({
  type,
  title,
  children
}: {
  type: 'pros' | 'cons';
  title: string;
  children: React.ReactNode;
}) {
  const bgColor = type === 'pros' ? 'rgba(16,185,129,0.1)' : 'rgba(220,38,38,0.1)';
  const borderColor = type === 'pros' ? 'rgba(16,185,129,0.3)' : 'rgba(220,38,38,0.3)';
  const titleColor = type === 'pros' ? '#059669' : '#dc2626';

  return (
    <div
      className="p-[clamp(12px,2.5vw,16px)] rounded-[clamp(8px,1.5vw,12px)] backdrop-blur-[10px]"
      style={{
        background: bgColor,
        border: `2px solid ${borderColor}`,
      }}
    >
      <h4
        className="my-0 mb-[clamp(8px,1.5vw,12px)] text-[clamp(0.95rem,2vw,1.1rem)] leading-[1.3]"
        style={{ color: titleColor }}
      >
        {title}
      </h4>
      <ul className="my-[clamp(12px,2.5vw,16px)] pl-0 list-none text-left space-y-[clamp(8px,1.5vw,12px)]">
        {children}
      </ul>
    </div>
  );
}

function TableRow({
  question,
  traditional,
  meta,
  isLast = false
}: {
  question: string;
  traditional: string;
  meta: string;
  isLast?: boolean;
}) {
  return (
    <tr>
      <td
        className="p-[clamp(10px,2vw,14px)] text-[clamp(0.85rem,1.9vw,1rem)] text-[#012E40] leading-[1.4] align-top font-semibold bg-[rgba(242,169,34,0.05)]"
        style={{ borderBottom: isLast ? 'none' : '1px solid rgba(5,144,140,0.2)' }}
      >
        <strong>{question}</strong>
      </td>
      <td
        className="p-[clamp(10px,2vw,14px)] text-[clamp(0.85rem,1.9vw,1rem)] text-[#012E40] leading-[1.4] align-top"
        style={{ borderBottom: isLast ? 'none' : '1px solid rgba(5,144,140,0.2)' }}
      >
        {traditional}
      </td>
      <td
        className="p-[clamp(10px,2vw,14px)] text-[clamp(0.85rem,1.9vw,1rem)] text-[#012E40] leading-[1.4] align-top"
        style={{ borderBottom: isLast ? 'none' : '1px solid rgba(5,144,140,0.2)' }}
      >
        {meta}
      </td>
    </tr>
  );
}

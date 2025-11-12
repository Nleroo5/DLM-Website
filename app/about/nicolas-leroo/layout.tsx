import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nicolas Leroo - Meta Advertising Expert | Drive Lead Media',
  description: 'Nicolas Leroo is Co-Founder of Drive Lead Media and a Meta Blueprint Certified advertising strategist specializing in Facebook & Instagram campaigns for Atlanta healthcare and service businesses.',
  keywords: 'nicolas leroo, meta ads expert, facebook advertising specialist, atlanta digital marketing, meta blueprint certified',
  authors: [{ name: 'Nicolas Leroo' }],
  openGraph: {
    title: 'Nicolas Leroo - Meta Advertising Expert & Web Developer',
    description: 'Meta Blueprint Certified strategist specializing in Facebook & Instagram advertising combined with custom website development.',
    type: 'profile',
    images: [{
      url: '/images/nicolas.png',
      width: 1200,
      height: 630,
      alt: 'Nicolas Leroo',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nicolas Leroo - Meta Advertising Expert',
    description: 'Meta Blueprint Certified strategist specializing in Facebook & Instagram advertising and custom website development.',
    images: ['/images/nicolas.png'],
  },
  alternates: {
    canonical: '/about/nicolas-leroo',
  },
};

export default function AuthorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

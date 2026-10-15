import type { Metadata } from 'next';
import { getAllCategories, CATEGORY_INTROS } from '@/lib/blog-posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const categories = getAllCategories();
  const category = categories.find(cat => cat.slug === slug);

  if (!category) {
    return {
      title: 'Category Not Found | Drive Lead Media',
    };
  }

  const intro = CATEGORY_INTROS[slug];
  const description = intro
    ? intro.slice(0, intro.lastIndexOf(' ', 155)) + '…'
    : `${category.name} articles from Drive Lead Media: practical guides for local businesses on Meta ads, websites and getting found online.`;

  return {
    title: `${category.name} Articles | Drive Lead Media`,
    description,
    // A one-post category page only repeats that post's card, so keep it out of
    // the index (links still followed). Multi-post categories have an intro.
    robots: category.count < 2 ? { index: false, follow: true } : undefined,
    keywords: `${category.slug}, meta ads, facebook advertising, instagram ads, ${category.name.toLowerCase()}`,
    openGraph: {
      title: `${category.name} Articles | Drive Lead Media`,
      description: `Browse ${category.count} article${category.count === 1 ? '' : 's'} about ${category.name}`,
      type: 'website',
      images: [{
        url: "https://driveleadmedia.com/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Drive Lead Media - Custom Websites & Meta Advertising in Atlanta",
      }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${category.name} Articles | Drive Lead Media`,
      description: `Browse ${category.count} article${category.count === 1 ? '' : 's'} about ${category.name}`,
      images: ["https://driveleadmedia.com/images/og-image.webp"],
    },
    alternates: {
      canonical: `/blog/category/${slug}`,
    },
  };
}

export default function CategoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

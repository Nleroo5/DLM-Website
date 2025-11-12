import type { Metadata } from 'next';
import { getAllCategories } from '@/lib/blog-posts';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categories = getAllCategories();
  const category = categories.find(cat => cat.slug === params.slug);

  if (!category) {
    return {
      title: 'Category Not Found | Drive Lead Media',
    };
  }

  return {
    title: `${category.name} - Meta Ads Blog | Drive Lead Media`,
    description: `Expert insights and strategies about ${category.name}. Learn from real campaigns and proven Meta advertising tactics for Facebook and Instagram ads.`,
    keywords: `${category.slug}, meta ads, facebook advertising, instagram ads, ${category.name.toLowerCase()}`,
    openGraph: {
      title: `${category.name} Articles | Drive Lead Media`,
      description: `Browse ${category.count} article${category.count === 1 ? '' : 's'} about ${category.name}`,
      type: 'website',
    },
    alternates: {
      canonical: `/blog/category/${params.slug}`,
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

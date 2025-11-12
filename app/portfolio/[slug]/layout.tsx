import type { Metadata } from 'next';
import { getProjectBySlug } from '@/lib/portfolio-projects';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found | Drive Lead Media',
    };
  }

  return {
    title: `${project.title} - Case Study | Drive Lead Media`,
    description: project.description,
    keywords: [project.industry, project.client, ...(project.techStack || [])].join(', '),
    openGraph: {
      type: 'article',
      locale: 'en_US',
      url: `https://driveleadmedia.com/portfolio/${params.slug}`,
      siteName: 'Drive Lead Media',
      title: project.title,
      description: project.description,
      images: project.heroImage
        ? [
            {
              url: project.heroImage,
              width: 1200,
              height: 630,
              alt: project.title,
            },
          ]
        : [
            {
              url: '/images/dlm-logo2.png',
              width: 1200,
              height: 630,
              alt: 'Drive Lead Media',
            },
          ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
      images: project.heroImage ? [project.heroImage] : ['/images/dlm-logo2.png'],
    },
    alternates: {
      canonical: `/portfolio/${params.slug}`,
    },
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

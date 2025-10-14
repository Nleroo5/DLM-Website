import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import MobileStickyButton from "@/components/MobileStickyButton";
import TargetParticles from "@/components/TargetParticles";

const bitter = Bitter({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-bitter",
});

const inter = Inter({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Drive Lead Media - Meta Advertising Experts",
  description: "We Build Advertisement Systems That Bring Your Best Customers To You",
  keywords: "meta ads, facebook advertising, instagram ads, targeted advertising, lead generation, social media marketing, meta advertising agency",
  authors: [{ name: "Drive Lead Media" }],
  creator: "Drive Lead Media",
  publisher: "Drive Lead Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://driveleadmedia.com",
    siteName: "Drive Lead Media",
    title: "Drive Lead Media - Meta Advertising Experts",
    description: "We Build Advertisement Systems That Bring Your Best Customers To You",
    images: [
      {
        url: "/images/dlm-logo.png",
        width: 1200,
        height: 630,
        alt: "Drive Lead Media Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive Lead Media - Meta Advertising Experts",
    description: "We Build Advertisement Systems That Bring Your Best Customers To You",
    images: ["/images/dlm-logo.png"],
  },
  icons: {
    icon: "/images/dlm-logo.png",
    shortcut: "/images/dlm-logo.png",
    apple: "/images/dlm-logo.png",
  },
  metadataBase: new URL("https://driveleadmedia.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="google-site-verification" content="Aa_bZjosqPJtDpPU0ddFCLwmIT1PceViOlakLzBFqQE" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K25LTGL8FP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K25LTGL8FP');
            `,
          }}
        />
        {/* JSON-LD Structured Data - Enhanced Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Drive Lead Media",
              "alternateName": "DLM",
              "url": "https://driveleadmedia.com",
              "logo": "https://driveleadmedia.com/images/dlm-logo.png",
              "description": "We Build Advertisement Systems That Bring Your Best Customers To You. Full-service Meta advertising agency specializing in Facebook ads, Instagram ads, video production, and custom website development for local businesses.",
              "foundingDate": "2019",
              "sameAs": [
                "https://www.facebook.com/driveleadmedia",
                "https://www.instagram.com/driveleadmedia",
                "https://www.linkedin.com/company/drive-lead-media"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Sales",
                "url": "https://driveleadmedia.com/contact",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United States"
              },
              "knowsAbout": [
                "Meta Advertising",
                "Facebook Advertising",
                "Instagram Advertising",
                "Social Media Marketing",
                "Video Production",
                "Web Design",
                "Lead Generation",
                "Digital Marketing Strategy"
              ]
            })
          }}
        />
        {/* Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Meta Advertising Management",
                "name": "Meta Ad Campaign Management",
                "description": "Full-service Meta (Facebook & Instagram) advertising campaigns including strategy, ad creation, targeting, optimization, and reporting.",
                "provider": {
                  "@type": "Organization",
                  "name": "Drive Lead Media"
                },
                "areaServed": "US",
                "audience": {
                  "@type": "Audience",
                  "audienceType": "Small Business Owners, Local Businesses, Healthcare Practices"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Video Production",
                "name": "Actor-Led Video Ad Production",
                "description": "Professional actor-led video production and motion graphics specifically designed for Meta advertising campaigns. No filming required from clients.",
                "provider": {
                  "@type": "Organization",
                  "name": "Drive Lead Media"
                },
                "areaServed": "US"
              },
              {
                "@context": "https://schema.org",
                "@type": "Service",
                "serviceType": "Web Design",
                "name": "Custom Website Design & Development",
                "description": "High-converting website design and development optimized for local business lead generation and Meta advertising integration.",
                "provider": {
                  "@type": "Organization",
                  "name": "Drive Lead Media"
                },
                "areaServed": "US"
              }
            ])
          }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Drive Lead Media",
              "url": "https://driveleadmedia.com",
              "description": "Meta advertising agency specializing in Facebook and Instagram ads, video production, and website development."
            })
          }}
        />
        {/* LocalBusiness Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://driveleadmedia.com/#localbusiness",
              "name": "Drive Lead Media",
              "image": "https://driveleadmedia.com/images/dlm-logo.png",
              "url": "https://driveleadmedia.com",
              "telephone": "",
              "email": "hello@driveleadmedia.com",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "addressCountry": "US"
              },
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "17:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5",
                "reviewCount": "2",
                "bestRating": "5",
                "worstRating": "5"
              }
            })
          }}
        />
        {/* Review Schema - Testimonials */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Review",
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "Drive Lead Media",
                  "image": "https://driveleadmedia.com/images/dlm-logo.png"
                },
                "author": {
                  "@type": "Person",
                  "name": "Jenn",
                  "jobTitle": "Owner",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "The Yoga Lounge"
                  }
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "We partnered with Drive Lead Media to run Meta ads for my yoga studio, and the experience was smooth and professional. Nic and Tommy created amazing videos and ads that really captured our vibe, and I learned so much about how to better use Meta for marketing. Within weeks we started seeing new leads coming in, and their clear communication made the whole process easy. I'm so grateful for all they did and would definitely recommend them to any business looking to grow.",
                "datePublished": "2024-01-15"
              },
              {
                "@context": "https://schema.org",
                "@type": "Review",
                "itemReviewed": {
                  "@type": "LocalBusiness",
                  "name": "Drive Lead Media",
                  "image": "https://driveleadmedia.com/images/dlm-logo.png"
                },
                "author": {
                  "@type": "Person",
                  "name": "Dr. Austin Dupont",
                  "jobTitle": "Owner",
                  "worksFor": {
                    "@type": "Organization",
                    "name": "Village Pediatrics of St. Augustine"
                  }
                },
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5",
                  "bestRating": "5"
                },
                "reviewBody": "Working with Drive Lead Media has been a game changer for Village Pediatrics. They completely transformed our outdated website into something modern and professional. The Meta ad campaigns they've been running have brought in a 40% increase in new patient bookings, and honestly, the best part is that I haven't had to manage any of it. Nic and Tommy handle everything from strategy to execution while I focus on caring for my patients.",
                "datePublished": "2024-02-20"
              }
            ])
          }}
        />
      </head>
      <body className={`${bitter.variable} ${inter.variable} antialiased`}>
        <TargetParticles />
        <Navigation />
        {children}
        <Footer />
        <MobileStickyButton />
      </body>
    </html>
  );
}

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

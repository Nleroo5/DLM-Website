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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Drive Lead Media",
              "url": "https://driveleadmedia.com",
              "logo": "https://driveleadmedia.com/images/dlm-logo.png",
              "description": "We Build Advertisement Systems That Bring Your Best Customers To You",
              "sameAs": [
                "https://www.facebook.com/driveleadmedia",
                "https://www.instagram.com/driveleadmedia"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "url": "https://driveleadmedia.com/contact"
              },
              "areaServed": "US",
              "serviceType": [
                "Meta Advertising",
                "Facebook Advertising",
                "Instagram Advertising",
                "Targeted Ads",
                "Social Media Marketing"
              ]
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

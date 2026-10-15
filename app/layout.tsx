import type { Metadata } from "next";
import Script from "next/script";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MetaPixel } from "@/components/MetaPixel";
import { Analytics } from "@vercel/analytics/next";
import GrowthPlanProvider from "@/components/growth-plan/GrowthPlanProvider";
import SiteSchema from "@/components/SiteSchema";


// Mona Sans for everything: one variable file covering headings and body.
// The wdth axis lets globals.css set headings slightly wide (font-stretch).
// globals.css maps --font-text to this same family.
const monaSans = Mona_Sans({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: 'Atlanta Meta Ads & Website Design | Drive Lead Media',
  description: "Atlanta agency for Facebook and Instagram ads, video creative and fast websites that turn clicks into customers. Get started free.",
  keywords: "atlanta meta ads agency, facebook advertising atlanta, instagram ads atlanta ga, meta advertising agency atlanta, atlanta social media marketing, facebook ads agency atlanta, meta ads consultant atlanta, video ads production atlanta, atlanta digital marketing agency, meta certified atlanta",
  authors: [{ name: "Drive Lead Media" }],
  creator: "Drive Lead Media",
  publisher: "Drive Lead Media",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://driveleadmedia.com",
    siteName: "Drive Lead Media",
    title: "Meta Ads & Websites for Atlanta Businesses",
    description: "We run Facebook and Instagram ads, make the video creative, and build the websites they point to, so local businesses get more customers.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Drive Lead Media - Meta Advertising & Custom Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meta Ads & Websites for Atlanta Businesses",
    description: "Facebook and Instagram ads, video creative and websites for local businesses.",
    images: ["/images/og-image.webp"],
  },
  icons: {
    icon: "/images/drive-lead-media-full-service-marketing-agency-brand.webp",
    shortcut: "/images/drive-lead-media-full-service-marketing-agency-brand.webp",
    apple: "/images/drive-lead-media-full-service-marketing-agency-brand.webp",
  },
  metadataBase: new URL("https://driveleadmedia.com"),
  alternates: {
    canonical: "/",
    types: { "application/rss+xml": "https://driveleadmedia.com/feed.xml" },
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
    // Font variables must sit on <html> (:root) so globals.css can build
    // --font-heading / --font-body from them there.
    <html lang="en" className={monaSans.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="google-site-verification" content="Aa_bZjosqPJtDpPU0ddFCLwmIT1PceViOlakLzBFqQE" />

        {/* Resource Hints - Preconnect to Analytics Origins */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://www.clarity.ms" />

        {/* DNS Prefetch Fallback for Older Browsers */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />

        {/* Meta Pixel noscript fallback (must stay in head) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1103544594607690&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* Start every fresh page load at the top. Safari otherwise jumps back to the
            old scroll position on reload, which reads as the page scrolling itself.
            Marking the entry "manual" on pagehide stops that restore; switching back
            to "auto" after load keeps normal back/forward behavior inside the site.
            Links with a #hash still land on their section. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var h=history;if(!('scrollRestoration' in h))return;addEventListener('pagehide',function(){h.scrollRestoration='manual'});if(!location.hash){h.scrollRestoration='manual';scrollTo(0,0)}addEventListener('load',function(){setTimeout(function(){h.scrollRestoration='auto'},0)})}catch(e){}})();",
          }}
        />
        {/* Sitewide structured data: business, website, founders */}
        <SiteSchema />
      </head>
      <body className="antialiased">
        {/* Meta Pixel - Non-blocking */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1103544594607690', {
                autoConfig: true,
                debug: false
              });
              fbq('set', 'autoAdvancedMatching', true);
              fbq('consent', 'grant');
              fbq('track', 'PageView');
            `,
          }}
        />
        {/* Google Analytics 4 - Non-blocking */}
        <Script
          id="ga4-gtag"
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-K25LTGL8FP"
        />
        <Script
          id="ga4-config"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-K25LTGL8FP', {
                page_path: window.location.pathname,
                send_page_view: true,
                allow_google_signals: true,
                allow_ad_personalization_signals: true,
                cookie_flags: 'SameSite=None;Secure',
                anonymize_ip: false,
                content_group: 'General'
              });
              gtag('set', 'user_properties', {
                site_section: 'main'
              });
            `,
          }}
        />
        {/* MailerLite Universal - Non-blocking */}
        <Script
          id="mailerlite"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
              .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
              n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
              (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
              ml('account', '1962484');
            `,
          }}
        />
        {/* Microsoft Clarity */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "uwa2oygnsh");
            `,
          }}
        />
        <MetaPixel pixelId="1103544594607690" />
        <Analytics />
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>
        <GrowthPlanProvider>
          <Navigation />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </GrowthPlanProvider>
      </body>
    </html>
  );
}

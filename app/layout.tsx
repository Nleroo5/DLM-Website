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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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

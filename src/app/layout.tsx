import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#030603",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://imgdigital.io"),
  title: {
    default: "IMG DIGITAL — Semantic SEO, Cyber Security, AI & Web Studio",
    template: "%s | IMG DIGITAL",
  },
  description:
    "IMG Digital is a semantic SEO, cyber security, AI and high-performance Next.js engineering studio for SaaS, AI, gaming, and fintech brands. Based in Cape Town, serving globally.",
  keywords: [
    "Semantic SEO",
    "Cyber Security",
    "Penetration Testing",
    "CEH v10",
    "CPENT",
    "AI Search Optimization",
    "AEO",
    "GEO",
    "Perplexity Optimization",
    "ChatGPT Search",
    "Topical Authority",
    "Next.js Agency",
    "Web Engineering",
    "Cape Town SEO Studio",
  ],
  authors: [{ name: "IMG Digital", url: "https://imgdigital.io" }],
  creator: "IMG Digital",
  publisher: "IMG Digital",
  formatDetection: {
    email: true,
    telephone: true,
  },
  alternates: {
    canonical: "https://imgdigital.io",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imgdigital.io",
    title: "IMG DIGITAL — Engineered to be Found. Built to be Trusted.",
    description:
      "Semantic SEO, cyber security, AI and web design studio for SaaS, AI, gaming and fintech brands. Cape Town · 33.9249° S",
    siteName: "IMG DIGITAL",
    images: [
      {
        url: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/8bd0314a-9525-4a13-996e-2c37cbd9e514/ea090e90-63a4-4c35-9731-f6087231ebf9-synthetic-shell.webp?v=1785157436326",
        width: 1200,
        height: 630,
        alt: "IMG Digital — Semantic SEO & Cyber Security Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IMG DIGITAL — Engineered to be Found. Built to be Trusted.",
    description:
      "Semantic SEO, cyber security, AI and web design studio for SaaS, AI, gaming and fintech brands. Cape Town · 33.9249° S",
    images: [
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/user-files/8bd0314a-9525-4a13-996e-2c37cbd9e514/ea090e90-63a4-4c35-9731-f6087231ebf9-synthetic-shell.webp?v=1785157436326",
    ],
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://imgdigital.io/#organization",
      name: "IMG DIGITAL",
      url: "https://imgdigital.io",
      logo: "https://imgdigital.io/logo.png",
      description:
        "IMG Digital is a semantic SEO, cyber security, AI and web design studio for SaaS, AI, gaming and fintech brands.",
      foundingDate: "2019",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Cape Town",
        addressCountry: "ZA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -33.9249,
        longitude: 18.4241,
      },
      areaServed: "Global",
      knowsAbout: [
        "Semantic SEO",
        "Entity-first architecture",
        "AEO & GEO",
        "Perception & AI Answer Engine Optimization",
        "Penetration testing",
        "Cyber Security",
        "CEH v10",
        "CPENT",
        "Next.js engineering",
        "AI workflow automation",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "Customer Support & Security Operations",
        email: "hello@imgdigital.io",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${schibstedGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-screen bg-[#030603] text-[#ecfdf5] font-sans antialiased flex flex-col selection:bg-[#00ff66] selection:text-[#030603] overflow-x-hidden">
        {/* Subtle cyber background noise & CRT scanline layer */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-50 cyber-scanline opacity-25"
        />

        <Navbar />

        <div className="flex-1 flex flex-col pt-20">{children}</div>

        <Footer />
      </body>
    </html>
  );
}

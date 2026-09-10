import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GodCursor } from "@/components/portfolio/god-cursor";

export const viewport: Viewport = {
  themeColor: "#f8f9fa",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: `${PORTFOLIO_DATA.personal.name} | AI Product & Strategy`,
  description: PORTFOLIO_DATA.personal.subheadline,
  keywords: [
    "Muskan Sharma",
    "AI Product Consultant",
    "AI Engineer",
    "Product Manager",
    "Founder's Office",
    "Masters Union",
    "Manoj Kohli Scholar",
    "GenAI",
    "Voice AI",
    "DaveAI",
    "TCS",
  ],
  authors: [
    {
      name: PORTFOLIO_DATA.personal.name,
      url: PORTFOLIO_DATA.personal.linkedinUrl,
    },
  ],
  creator: PORTFOLIO_DATA.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muskansharma.dev",
    title: `${PORTFOLIO_DATA.personal.name} | AI Product & Strategy`,
    description: PORTFOLIO_DATA.personal.subheadline,
    siteName: `${PORTFOLIO_DATA.personal.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${PORTFOLIO_DATA.personal.name} | AI Product & Strategy`,
    description: PORTFOLIO_DATA.personal.subheadline,
    creator: "@muskansharma_dev",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PORTFOLIO_DATA.personal.name,
    jobTitle: PORTFOLIO_DATA.personal.role,
    description: PORTFOLIO_DATA.personal.subheadline,
    email: PORTFOLIO_DATA.personal.email,
    alumniOf: [
      {
        "@type": "EducationalOrganization",
        name: "Masters' Union",
      },
      {
        "@type": "EducationalOrganization",
        name: "Arya Institute of Engineering & Technology",
      },
    ],
    knowsAbout: [
      "AI Product Management",
      "Enterprise AI Architecture",
      "Conversational Microbots",
      "Generative AI & LLMs",
      "GovTech Systems",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-[#1A1817] selection:bg-[#F8E7DF] selection:text-[#83351E] antialiased relative">
        <GodCursor />
        {children}
      </body>
    </html>
  );
}

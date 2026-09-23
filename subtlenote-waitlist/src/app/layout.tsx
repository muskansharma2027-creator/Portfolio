import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "SubtleNote | Silent, 100% On-Device AI Meeting Notes for Mac",
  description:
    "Be fully present in every call. SubtleNote quietly records, transcribes, and summarizes Zoom, Meet, and Teams calls 100% on your Mac. No awkward bots. Zero cloud leaks.",
  keywords: [
    "macOS meeting notes",
    "bot-free meeting recorder",
    "on-device whisper",
    "private meeting transcription",
    "SubtleNote",
  ],
  openGraph: {
    title: "SubtleNote | Silent, On-Device AI Meeting Notes for Mac",
    description:
      "No bots joining your calls. No cloud leaks. 100% on-device AI meeting notes for Mac.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-emerald-500/30 selection:text-emerald-300 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "XD Labs — We shall challenge ordinary.",
  description: "A product studio from Abu Dhabi building the next generation of social and utility apps.",
  openGraph: {
    title: "XD Labs — We shall challenge ordinary.",
    description: "A product studio from Abu Dhabi building the next generation of social and utility apps.",
    url: "https://itsjustxdlabs.com",
    siteName: "XD Labs",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#080808] text-[#F5F5F5] antialiased">
        {children}
      </body>
    </html>
  );
}

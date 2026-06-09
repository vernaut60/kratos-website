import type { Metadata } from "next";
import { Geist, Outfit } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Kratos Calisthenics Arena | Premium Bodyweight Training, Hyderabad",
  description:
    "Kratos Calisthenics Arena in Kondapur, Hyderabad. Expert coaching, open-floor calisthenics, and a community built for strength.",
  icons: {
    icon: site.logo,
    apple: site.logo,
  },
  openGraph: {
    title: "Kratos Calisthenics Arena",
    description: "Premium bodyweight training in Hyderabad.",
    type: "website",
    siteName: "KCA",
    images: [{ url: site.logo, width: 1200, height: 630, alt: site.name }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}

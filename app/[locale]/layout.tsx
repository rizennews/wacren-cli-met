import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type { ReactNode } from "react";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://climet.wacren.net"),
  title: "WACREN CLI-MET — Regional Digital Infrastructure for Climate Resilience",
  description: "WACREN CLI-MET leverages advanced digital connectivity, open science, and trusted research infrastructure to strengthen climate research and resilience across West and Central Africa.",
  keywords: ["WACREN", "CLI-MET", "Climate Resilience", "Digital Infrastructure", "Climate Research", "West Africa", "Central Africa", "Open Science"],
  authors: [{ name: "WACREN" }],
  openGraph: {
    title: "WACREN CLI-MET — Regional Digital Infrastructure for Climate Resilience",
    description: "Building a connected, open, and resilient climate ecosystem for West & Central Africa.",
    url: "https://climet.wacren.net",
    siteName: "WACREN CLI-MET",
    images: [
      {
        url: "/og-image.jpg", // User should provide this eventually
        width: 1200,
        height: 630,
        alt: "WACREN CLI-MET",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WACREN CLI-MET — Regional Digital Infrastructure for Climate Resilience",
    description: "Building a connected, open, and resilient climate ecosystem for West & Central Africa.",
    site: "@wacren",
    creator: "@wacren",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={`${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import type { ReactNode } from "react";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import DeveloperFootprint from "@/app/components/DeveloperFootprint";
import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const seoContent: Record<
  string,
  { title: string; description: string; keywords: string[]; ogLocale: string }
> = {
  en: {
    title: "WACREN CLI-MET — Regional Digital Infrastructure for Climate Resilience",
    description:
      "WACREN CLI-MET leverages advanced digital connectivity, open science, and trusted research infrastructure to strengthen climate research and resilience across West and Central Africa.",
    keywords: [
      "WACREN",
      "CLI-MET",
      "Climate Resilience",
      "Digital Infrastructure",
      "Climate Research",
      "West Africa",
      "Central Africa",
      "Open Science",
      "AfricaConnect4",
      "NREN",
      "Earth Observation",
      "Meteorological Infrastructure",
      "CLIMB Champions"
    ],
    ogLocale: "en_US",
  },
  fr: {
    title: "WACREN CLI-MET — Infrastructure numérique régionale pour la résilience climatique",
    description:
      "WACREN CLI-MET mobilise la connectivité numérique avancée, la science ouverte et une infrastructure de recherche fiable pour renforcer la recherche et la résilience climatiques en Afrique de l'Ouest et du Centre.",
    keywords: [
      "WACREN",
      "CLI-MET",
      "Résilience climatique",
      "Infrastructure numérique",
      "Recherche climatique",
      "Afrique de l'Ouest",
      "Afrique centrale",
      "Science ouverte",
      "AfricaConnect4",
      "NREN",
      "Observation de la Terre",
      "Infrastructure météorologique",
      "Champions CLIMB"
    ],
    ogLocale: "fr_FR",
  },
  pt: {
    title: "WACREN CLI-MET — Infraestrutura Digital Regional para Resiliência Climática",
    description:
      "O WACREN CLI-MET aproveita a conectividade digital avançada, a ciência aberta e a infraestrutura de pesquisa confiável para fortalecer a pesquisa climática e a resiliência na África Ocidental e Central.",
    keywords: [
      "WACREN",
      "CLI-MET",
      "Resiliência Climática",
      "Infraestrutura Digital",
      "Pesquisa Climática",
      "África Ocidental",
      "África Central",
      "Ciência Aberta",
      "AfricaConnect4",
      "NREN",
      "Observação da Terra",
      "Infraestrutura Meteorológica",
      "Campeões CLIMB"
    ],
    ogLocale: "pt_PT",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = seoContent[locale] || seoContent.en;

  return {
    metadataBase: new URL("https://climet.wacren.net"),
    title: {
      default: content.title,
      template: "%s | WACREN CLI-MET",
    },
    description: content.description,
    keywords: content.keywords,
    authors: [{ name: "WACREN", url: "https://wacren.net" }, { name: "Padmore Aning", url: "https://padmoreaning.com" }],
    creator: "Padmore Aning",
    publisher: "WACREN",
    applicationName: "WACREN CLI-MET",
    alternates: {
      canonical: `https://climet.wacren.net/${locale}`,
      languages: {
        en: "https://climet.wacren.net/en",
        fr: "https://climet.wacren.net/fr",
        pt: "https://climet.wacren.net/pt",
        "x-default": "https://climet.wacren.net/en",
      },
    },
    openGraph: {
      title: content.title,
      description: content.description,
      url: `https://climet.wacren.net/${locale}`,
      siteName: "WACREN CLI-MET",
      images: [
        {
          url: "/slider-image-1.jpg",
          width: 1200,
          height: 630,
          alt: content.title,
        },
      ],
      locale: content.ogLocale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: content.title,
      description: content.description,
      site: "@wacren",
      creator: "@wacren",
      images: ["/slider-image-1.jpg"],
    },
    icons: {
      icon: [
        { url: "/favicon.jpg", type: "image/jpeg" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      shortcut: "/favicon.jpg",
      apple: [
        { url: "/favicon.jpg", sizes: "180x180", type: "image/jpeg" },
      ],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  const content = seoContent[locale] || seoContent.en;

  // Wikipedia / Wikidata Knowledge Graph Linked Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://wacren.net/#organization",
        name: "WACREN",
        alternateName: [
          "WACREN CLI-MET",
          "West and Central African Research and Education Network",
          "Réseau d'Éducation et de Recherche de l'Afrique de l'Ouest et du Centre"
        ],
        legalName: "West and Central African Research and Education Network",
        url: "https://wacren.net",
        logo: {
          "@type": "ImageObject",
          url: "https://climet.wacren.net/wacren.png",
          width: 512,
          height: 512,
        },
        image: "https://climet.wacren.net/slider-image-1.jpg",
        description: content.description,
        email: "climet@wacren.net",
        telephone: "+233-30-294-2873",
        address: {
          "@type": "PostalAddress",
          streetAddress: "VCG Office Complex, IPS Rd",
          addressLocality: "Accra",
          addressCountry: "GH"
        },
        areaServed: [
          "West Africa",
          "Central Africa"
        ],
        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+233-30-294-2873",
            contactType: "technical support",
            email: "climet@wacren.net",
            availableLanguage: ["English", "French", "Portuguese"]
          }
        ],
        funder: {
          "@type": "Organization",
          name: "AfricaConnect4 / European Union",
          url: "https://africaconnect4.wacren.net/"
        },
        sameAs: [
          "https://wacren.net",
          "https://twitter.com/wacren",
          "https://www.facebook.com/WACRENinfo",
          "https://www.linkedin.com/company/west-and-central-african-research-and-education-network/",
          "https://mastodon.social/@WACREN",
          "https://bsky.app/profile/wacren.bsky.social",
          "https://video.wacren.net",
          "https://photo.wacren.net"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://climet.wacren.net/#website",
        url: "https://climet.wacren.net",
        name: "WACREN CLI-MET",
        description: content.description,
        publisher: {
          "@id": "https://wacren.net/#organization",
        },
        creator: {
          "@type": "Person",
          name: "Padmore Aning",
          jobTitle: "Website Engineer & UI/UX Architect",
          url: "https://padmoreaning.com"
        },
        inLanguage: locale === "fr" ? "fr-FR" : locale === "pt" ? "pt-PT" : "en-US",
        about: [
          {
            "@type": "Thing",
            name: "Climate Change",
            sameAs: [
              "https://en.wikipedia.org/wiki/Climate_change",
              "https://www.wikidata.org/wiki/Q125928"
            ]
          },
          {
            "@type": "Place",
            name: "West Africa",
            sameAs: [
              "https://en.wikipedia.org/wiki/West_Africa",
              "https://www.wikidata.org/wiki/Q4412"
            ]
          },
          {
            "@type": "Place",
            name: "Central Africa",
            sameAs: [
              "https://en.wikipedia.org/wiki/Central_Africa",
              "https://www.wikidata.org/wiki/Q27433"
            ]
          },
          {
            "@type": "Thing",
            name: "Open Science",
            sameAs: [
              "https://en.wikipedia.org/wiki/Open_science",
              "https://www.wikidata.org/wiki/Q309823"
            ]
          },
          {
            "@type": "Thing",
            name: "Earth Observation",
            sameAs: [
              "https://en.wikipedia.org/wiki/Earth_observation",
              "https://www.wikidata.org/wiki/Q1056585"
            ]
          }
        ]
      },
    ],
  };

  return (
    <html lang={locale} className={`${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="author" href="/humans.txt" />
        <meta name="DC.title" content={content.title} />
        <meta name="DC.creator" content="Padmore Aning" />
        <meta name="DC.publisher" content="WACREN" />
        <meta name="DC.description" content={content.description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Priority Hints & Performance Optimization */}
        <link rel="preconnect" href="https://flagcdn.com" />
        <link rel="dns-prefetch" href="https://flagcdn.com" />
        <link rel="preload" as="image" href="/slider-image-1.jpg" fetchPriority="high" />
      </head>
      <body suppressHydrationWarning>
        <DeveloperFootprint />
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import type { ReactNode } from "react";

const pageSeo: Record<
  string,
  { title: string; description: string; keywords: string[]; ogLocale: string }
> = {
  en: {
    title: "Community & Partners",
    description:
      "Discover our pan-African and global community of meteorological agencies, climate scientists, national research and education networks (NRENs), and policy institutions.",
    keywords: [
      "WACREN climate community",
      "meteorological partners Africa",
      "NREN climate network",
      "climate science collaboration",
      "AfricaConnect community"
    ],
    ogLocale: "en_US",
  },
  fr: {
    title: "Communauté & Partenaires",
    description:
      "Découvrez notre communauté panafricaine et mondiale d'agences météorologiques, de climatologues, de réseaux nationaux de recherche et d'éducation (NREN) et d'institutions politiques.",
    keywords: [
      "communauté climat WACREN",
      "partenaires météorologiques Afrique",
      "réseau climat NREN",
      "collaboration scientifique climat",
      "communauté AfricaConnect"
    ],
    ogLocale: "fr_FR",
  },
  pt: {
    title: "Comunidade & Parceiros",
    description:
      "Conheça nossa comunidade pan-africana e global de agências meteorológicas, cientistas do clima, redes nacionais de pesquisa e educação (NRENs) e instituições políticas.",
    keywords: [
      "comunidade clima WACREN",
      "parceiros meteorológicos África",
      "rede clima NREN",
      "pesquisa climática colaborativa",
      "ÁfricaConnect comunidade"
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
  const content = pageSeo[locale] || pageSeo.en;
  const baseUrl = "https://climet.wacren.net";

  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords,
    alternates: {
      canonical: `${baseUrl}/${locale}/community`,
      languages: {
        en: `${baseUrl}/en/community`,
        fr: `${baseUrl}/fr/community`,
        pt: `${baseUrl}/pt/community`,
        "x-default": `${baseUrl}/en/community`,
      },
    },
    openGraph: {
      title: `${content.title} | WACREN CLI-MET`,
      description: content.description,
      url: `${baseUrl}/${locale}/community`,
      siteName: "WACREN CLI-MET",
      locale: content.ogLocale,
      images: [
        {
          url: "/slider-image-1.jpg",
          width: 1200,
          height: 630,
          alt: `${content.title} — WACREN CLI-MET`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${content.title} | WACREN CLI-MET`,
      description: content.description,
      images: ["/slider-image-1.jpg"],
    },
  };
}

export default function CommunityLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

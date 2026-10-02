import type { Metadata } from "next";
import type { ReactNode } from "react";

const pageSeo: Record<
  string,
  { title: string; description: string; keywords: string[]; ogLocale: string }
> = {
  en: {
    title: "CLIMB Champions Programme",
    description:
      "Empowering regional climate champions to spearhead climate and meteorological data access, digital connectivity, and research collaboration across West and Central Africa.",
    keywords: [
      "CLIMB Champions",
      "WACREN Champions",
      "climate leadership Africa",
      "meteorological capacity building",
      "climate research fellows"
    ],
    ogLocale: "en_US",
  },
  fr: {
    title: "Programme Champions CLIMB",
    description:
      "Donner aux champions régionaux du climat les moyens de diriger l'accès aux données climatiques et météorologiques, la connectivité et la recherche collaborative en Afrique de l'Ouest et du Centre.",
    keywords: [
      "Champions CLIMB",
      "champions WACREN",
      "leadership climatique Afrique",
      "renforcement des capacités météorologiques",
      "chercheurs climat"
    ],
    ogLocale: "fr_FR",
  },
  pt: {
    title: "Programa Campeões CLIMB",
    description:
      "Capacitando líderes climáticos regionais para impulsionar o acesso a dados climáticos e meteorológicos, conectividade digital e pesquisa colaborativa na África Ocidental e Central.",
    keywords: [
      "Campeões CLIMB",
      "líderes climáticos África",
      "capacitação meteorológica",
      "pesquisa em resiliência climática",
      "WACREN CLIMB"
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
      canonical: `${baseUrl}/${locale}/climb-champions`,
      languages: {
        en: `${baseUrl}/en/climb-champions`,
        fr: `${baseUrl}/fr/climb-champions`,
        pt: `${baseUrl}/pt/climb-champions`,
        "x-default": `${baseUrl}/en/climb-champions`,
      },
    },
    openGraph: {
      title: `${content.title} | WACREN CLI-MET`,
      description: content.description,
      url: `${baseUrl}/${locale}/climb-champions`,
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

export default function ClimbChampionsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

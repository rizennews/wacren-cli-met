import type { Metadata } from "next";
import type { ReactNode } from "react";

const pageSeo: Record<
  string,
  { title: string; description: string; keywords: string[]; ogLocale: string }
> = {
  en: {
    title: "Precursor Initiatives",
    description:
      "Foundational precursor projects, pilot actions, and infrastructure demonstrations paving the way for West and Central Africa's regional climate digital backbone.",
    keywords: [
      "WACREN precursor",
      "CLI-MET precursor actions",
      "pilot climate projects",
      "regional infrastructure demonstrations",
      "climate data pilots"
    ],
    ogLocale: "en_US",
  },
  fr: {
    title: "Initiatives Précurseurs",
    description:
      "Projets précurseurs fondateurs, actions pilotes et démonstrations d'infrastructure ouvrant la voie à la colonne vertébrale numérique du climat en Afrique de l'Ouest et du Centre.",
    keywords: [
      "précurseur WACREN",
      "actions précurseurs CLI-MET",
      "projets pilotes climat",
      "démonstrations infrastructure régionale",
      "pilotes données climat"
    ],
    ogLocale: "fr_FR",
  },
  pt: {
    title: "Iniciativas Precursoras",
    description:
      "Projetos precursores fundamentais, ações-piloto e demonstrações de infraestrutura que abrem caminho para a espinha dorsal digital do clima na África Ocidental e Central.",
    keywords: [
      "precursor WACREN",
      "ações precursoras CLI-MET",
      "projetos piloto de clima",
      "demonstrações de infraestrutura regional",
      "pilotos de dados climáticos"
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
      canonical: `${baseUrl}/${locale}/precursor`,
      languages: {
        en: `${baseUrl}/en/precursor`,
        fr: `${baseUrl}/fr/precursor`,
        pt: `${baseUrl}/pt/precursor`,
        "x-default": `${baseUrl}/en/precursor`,
      },
    },
    openGraph: {
      title: `${content.title} | WACREN CLI-MET`,
      description: content.description,
      url: `${baseUrl}/${locale}/precursor`,
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

export default function PrecursorLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

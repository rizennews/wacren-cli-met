import type { Metadata } from "next";
import type { ReactNode } from "react";

const pageSeo: Record<
  string,
  { title: string; description: string; keywords: string[]; ogLocale: string }
> = {
  en: {
    title: "Activities & Flagship Initiatives",
    description:
      "Explore WACREN CLI-MET key activities, precursor actions, and regional climate resilience infrastructure initiatives across West and Central Africa.",
    keywords: [
      "WACREN activities",
      "CLI-MET flagship",
      "climate infrastructure initiatives",
      "meteorological data regional hubs",
      "Africa climate science"
    ],
    ogLocale: "en_US",
  },
  fr: {
    title: "Activités & Initiatives Phares",
    description:
      "Découvrez les principales activités, actions précurseurs et initiatives d'infrastructure de résilience climatique de WACREN CLI-MET en Afrique de l'Ouest et du Centre.",
    keywords: [
      "activités WACREN",
      "initiatives CLI-MET",
      "infrastructures climatiques",
      "données météorologiques régionales",
      "science du climat Afrique"
    ],
    ogLocale: "fr_FR",
  },
  pt: {
    title: "Atividades & Iniciativas Principais",
    description:
      "Explore as principais atividades, ações precursoras e iniciativas de infraestrutura de resiliência climática do WACREN CLI-MET na África Ocidental e Central.",
    keywords: [
      "atividades WACREN",
      "iniciativas CLI-MET",
      "infraestrutura climática regional",
      "dados meteorológicos África",
      "ciência climática"
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
      canonical: `${baseUrl}/${locale}/activities`,
      languages: {
        en: `${baseUrl}/en/activities`,
        fr: `${baseUrl}/fr/activities`,
        pt: `${baseUrl}/pt/activities`,
        "x-default": `${baseUrl}/en/activities`,
      },
    },
    openGraph: {
      title: `${content.title} | WACREN CLI-MET`,
      description: content.description,
      url: `${baseUrl}/${locale}/activities`,
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

export default function ActivitiesLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

import type { Metadata } from "next";
import type { ReactNode } from "react";

const pageSeo: Record<
  string,
  { title: string; description: string; keywords: string[]; ogLocale: string }
> = {
  en: {
    title: "Impact & SDGs Alignment",
    description:
      "Discover how WACREN CLI-MET advances the UN Sustainable Development Goals through regional climate science connectivity, open infrastructure, and evidence-based action.",
    keywords: [
      "WACREN impact",
      "UN SDGs climate",
      "climate resilience impact",
      "sustainable development goals West Africa",
      "climate action infrastructure"
    ],
    ogLocale: "en_US",
  },
  fr: {
    title: "Impact & Alignement ODD",
    description:
      "Découvrez comment WACREN CLI-MET fait progresser les Objectifs de Développement Durable de l'ONU grâce à la connectivité scientifique, aux infrastructures ouvertes et à des politiques éclairées.",
    keywords: [
      "impact WACREN",
      "ODD climat ONU",
      "impact résilience climatique",
      "objectifs développement durable Afrique de l'Ouest",
      "action climatique infrastructure"
    ],
    ogLocale: "fr_FR",
  },
  pt: {
    title: "Impacto & Alinhamento ODS",
    description:
      "Descubra como o WACREN CLI-MET promove os Objetivos de Desenvolvimento Sustentável da ONU por meio da conectividade da ciência climática, infraestrutura aberta e ação informada por dados.",
    keywords: [
      "impacto WACREN",
      "ODS clima ONU",
      "impacto da resiliência climática",
      "objetivos de desenvolvimento sustentável África",
      "infraestrutura de ação climática"
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
      canonical: `${baseUrl}/${locale}/impact`,
      languages: {
        en: `${baseUrl}/en/impact`,
        fr: `${baseUrl}/fr/impact`,
        pt: `${baseUrl}/pt/impact`,
        "x-default": `${baseUrl}/en/impact`,
      },
    },
    openGraph: {
      title: `${content.title} | WACREN CLI-MET`,
      description: content.description,
      url: `${baseUrl}/${locale}/impact`,
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

export default function ImpactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

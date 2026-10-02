import type { Metadata } from "next";
import type { ReactNode } from "react";

const pageSeo: Record<
  string,
  { title: string; description: string; keywords: string[]; ogLocale: string }
> = {
  en: {
    title: "Contact & Partner With Us",
    description:
      "Connect with the WACREN CLI-MET programme team in Accra, Ghana to collaborate, partner, or access regional climate data infrastructure.",
    keywords: [
      "contact WACREN",
      "partner with CLI-MET",
      "climate infrastructure partnership",
      "Accra office WACREN",
      "climate collaboration"
    ],
    ogLocale: "en_US",
  },
  fr: {
    title: "Contact & Partenariat",
    description:
      "Contactez l'équipe du programme WACREN CLI-MET à Accra, Ghana pour collaborer, devenir partenaire ou accéder aux infrastructures régionales de données climatiques.",
    keywords: [
      "contact WACREN",
      "partenariat CLI-MET",
      "partenariat infrastructure climat",
      "bureau Accra WACREN",
      "collaboration climat"
    ],
    ogLocale: "fr_FR",
  },
  pt: {
    title: "Contato & Parcerias",
    description:
      "Entre em contato com a equipe do programa WACREN CLI-MET em Acra, Gana para colaborar, firmar parcerias ou acessar a infraestrutura regional de dados climáticos.",
    keywords: [
      "contato WACREN",
      "parceria CLI-MET",
      "infraestrutura de dados climáticos",
      "escritório Acra WACREN",
      "parceria clima África"
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
      canonical: `${baseUrl}/${locale}/contact`,
      languages: {
        en: `${baseUrl}/en/contact`,
        fr: `${baseUrl}/fr/contact`,
        pt: `${baseUrl}/pt/contact`,
        "x-default": `${baseUrl}/en/contact`,
      },
    },
    openGraph: {
      title: `${content.title} | WACREN CLI-MET`,
      description: content.description,
      url: `${baseUrl}/${locale}/contact`,
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

export default function ContactLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}

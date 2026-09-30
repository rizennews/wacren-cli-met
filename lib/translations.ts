export type Language = 'en' | 'fr' | 'pt';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

export const translations: Translations = {
  en: {
    'nav.climet': 'CLI-MET',
    'nav.pillars': 'PILLARS',
    'nav.activities': 'ACTIVITIES',
    'nav.community': 'COMMUNITY',
    'nav.precursor': 'PRECURSOR',
    'nav.impact': 'IMPACT',
    'nav.partner': 'PARTNER WITH US',
  },
  fr: {
    'nav.climet': 'CLI-MET',
    'nav.pillars': 'PILIERS',
    'nav.activities': 'ACTIVITÉS',
    'nav.community': 'COMMUNAUTÉ',
    'nav.precursor': 'PRÉCURSEUR',
    'nav.impact': 'IMPACT',
    'nav.partner': 'DEVENEZ PARTENAIRE',
  },
  pt: {
    'nav.climet': 'CLI-MET',
    'nav.pillars': 'PILARES',
    'nav.activities': 'ATIVIDADES',
    'nav.community': 'COMUNIDADE',
    'nav.precursor': 'PRECURSOR',
    'nav.impact': 'IMPACTO',
    'nav.partner': 'SEJA PARCEIRO',
  },
};

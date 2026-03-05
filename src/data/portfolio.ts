/**
 * ═══════════════════════════════════════════════════════════════════
 * Portfolio Data — Abdelaziz Khoungui
 * ═══════════════════════════════════════════════════════════════════
 * Ce fichier est la SOURCE UNIQUE de toutes les données du portfolio.
 * Modifiez uniquement ce fichier pour mettre à jour le contenu.
 * Les sections sans données sont automatiquement masquées.
 * ═══════════════════════════════════════════════════════════════════
 */

/* ── Types ──────────────────────────────────────────────────────── */

export interface PersonalInfo {
  firstName: string;
  lastName: string;
  name: string;
  title: string;
  subtitle: string;
  tagline: string;
  availabilityBadge: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  cvUrl?: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface TechSkillCategory {
  category: string;
  icon: string;
  skills: string[];
  image?: string;
}

export interface SoftSkill {
  name: string;
  description: string;
  icon: string;
}

export interface Education {
  period: string;
  degree: string;
  field: string;
  institution: string;
  institutionUrl?: string;
  description: string;
  isLatest?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  companyUrl?: string;
  description: string;
  isCurrent?: boolean;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  url?: string;
  github?: string;
  image?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  issuerUrl?: string;
  date: string;
  skills: string[];
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface AboutParagraph {
  text: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

/* ── Personal Info ──────────────────────────────────────────────── */

export const personalInfo: PersonalInfo = {
  firstName: 'Abdelaziz',
  lastName: 'Khoungui',
  name: 'Abdelaziz Khoungui',
  title: 'Systems Optimizer',
  subtitle: 'J\'optimise des flux complexes — des bits dans un processeur aux signaux audio en temps réel, en passant par les liquidités sur les marchés financiers. Même rigueur, même pensée systémique.',
  tagline: 'Low-Level Engineering × Signal Processing × Market Flow Analysis — une approche systémique de l\'optimisation.',
  availabilityBadge: 'Open to Opportunities',
  email: 'a.khoungi@esisa.ac.ma',
  phone: '+212 772 01 48 31',
  location: 'Fès, Maroc',
  avatar: '/avatar.jpg',
};

/* ── Stats ──────────────────────────────────────────────────────── */

export const stats: Stat[] = [
  { label: 'Projets Livrés', value: '6' },
  { label: 'Technologies', value: '15+' },
  { label: 'Domaines Croisés', value: '3' },
  { label: 'Commits GitHub', value: '120+' },
];

/* ── About ──────────────────────────────────────────────────────── */

export const aboutParagraphs: AboutParagraph[] = [
  {
    text: 'Mon terrain de jeu commence là où le hardware rencontre le software. En ingénierie bas niveau (C, gestion mémoire, architecture CPU), j\'apprends à penser comme un processeur : chaque cycle compte, chaque allocation a un coût. Cette discipline forge une rigueur que j\'applique à chaque domaine que je touche.',
  },
  {
    text: 'Je conçois des chaînes de traitement audio en temps réel — routage multi-canal via Voicemeeter, correction acoustique avec Equalizer APO, mixage et mastering dans FL Studio. Optimiser un signal audio, c\'est le même problème qu\'optimiser un pipeline CPU : minimiser la latence, maximiser le throughput.',
  },
  {
    text: 'Sur les marchés financiers (Nasdaq 100), j\'applique la lecture institutionnelle (Smart Money Concepts) : Order Blocks, Fair Value Gaps, déséquilibres de liquidité. L\'analyse technique est de l\'ingénierie inversée appliquée aux flux de capitaux — même pensée systémique, autre domaine.',
  },
  {
    text: 'Ce qui me définit n\'est pas une spécialité unique, mais une méthode transversale : décomposer un système complexe, identifier ses goulots d\'étranglement, puis l\'optimiser méthodiquement. Du silicium au signal, du code au capital.',
  },
];

/* ── Technical Skills ───────────────────────────────────────────── */

export const techSkills: TechSkillCategory[] = [
  {
    category: 'Développement & Informatique',
    icon: 'code',
    skills: ['Langage C', 'TypeScript', 'Next.js', 'Astro', 'Algorithmique avancée', 'Structures de données', 'Architecture microprocesseurs', 'Prompt Engineering IA'],
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&h=400&fit=crop',
  },
  {
    category: 'Ingénierie Audio',
    icon: 'music',
    skills: ['FL Studio (DAW)', 'Voicemeeter', 'Equalizer APO', 'Mixage & Mastering', 'Routage audio', 'Traitement du signal'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop',
  },
  {
    category: 'Analyse & Finance',
    icon: 'trending-up',
    skills: ['Analyse technique', 'Nasdaq 100', 'Smart Money Concepts', 'Order Blocks', 'Fair Value Gaps'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
  },
  {
    category: 'Outils & Environnement',
    icon: 'terminal',
    skills: ['Git & GitHub', 'VS Code', 'Windows', 'NPM', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop',
  },
];

/* ── Soft Skills (optionnel) ────────────────────────────────────── */

export const softSkills: SoftSkill[] = [
  { name: 'Pensée Systémique', description: 'Décomposition de systèmes complexes en sous-problèmes optimisables — du CPU au marché financier.', icon: 'brain' },
  { name: 'Rigueur Scientifique', description: 'Approche empirique : hypothèse, test, mesure, itération. Chaque décision technique est justifiée par les données.', icon: 'shield-check' },
  { name: 'Apprentissage Autonome', description: 'Stack technique autodidacte : Next.js, Astro, SMC, DSP audio — j\'apprends en construisant.', icon: 'book-open' },
  { name: 'Vision Transversale', description: 'Capacité à transférer des paradigmes entre domaines : l\'optimisation de pipeline s\'applique au code, à l\'audio, et aux flux financiers.', icon: 'sparkles' },
];

/* ── Education ──────────────────────────────────────────────────── */

export const education: Education[] = [
  {
    period: '2024 – Présent',
    degree: 'Études Supérieures en Informatique',
    field: 'Informatique, Algorithmique, Électronique numérique, Mathématiques appliquées',
    institution: 'ESISA',
    institutionUrl: 'https://www.esisa.ac.ma',
    description: 'Développement de TP en C (gestion mémoire, structures de données, matrices). Résolution de problèmes d\'architecture (jeux d\'instructions, adressage mémoire). Conduite d\'une enquête de recherche sur l\'égalité professionnelle (janvier 2026).',
    isLatest: true,
  },
  {
    period: '2023 – 2024',
    degree: 'Baccalauréat',
    field: 'Sciences',
    institution: 'Al Mostakbal 2 / Elaraki 2',
    description: 'Obtenu avec mention. Bases solides en mathématiques et sciences.',
  },
];

/* ── Expériences ────────────────────────────────────────────────── */

export const experiences: Experience[] = [
  {
    period: 'Sep 2024 – Présent',
    role: 'Développeur Full-Stack & Projets Académiques',
    company: 'ESISA — Travaux Pratiques',
    companyUrl: 'https://www.esisa.ac.ma',
    description: 'Conception et déploiement d\'applications web complètes (Next.js, Astro, TypeScript). Développement de TP avancés en C : gestion mémoire, structures de données, benchmarking d\'algorithmes. Architecture d\'APIs REST avec authentification multi-couches.',
    isCurrent: true,
  },
  {
    period: 'Jan 2024 – Août 2024',
    role: 'Ingénieur Audio Indépendant',
    company: 'Freelance',
    description: 'Architecture de systèmes de traitement audio temps réel : routage multi-canal Voicemeeter Potato, égalisation paramétrique Equalizer APO, chaîne de production FL Studio. Clients : créateurs de contenu et streamers. Latence optimisée < 10ms.',
  },
  {
    period: 'Sep 2023 – Juin 2024',
    role: 'Analyste Technique — Marchés Financiers',
    company: 'Auto-formation & Paper Trading',
    description: 'Étude approfondie des marchés (Nasdaq 100) via Smart Money Concepts : identification d\'Order Blocks, Fair Value Gaps, déséquilibres de liquidité. Développement d\'un journal de trading quantitatif avec suivi des performances.',
  },
];

/* ── Publications (optionnel — vide = section masquée) ──────────── */
// Aucune publication → section masquée automatiquement

/* ── Projets ────────────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    title: 'Student Manager — Full-Stack Engineering',
    description: 'Architecture complète d\'une application de gestion : API REST avec Next.js, persistance SQLite avec migrations, authentification multi-couches via NextAuth, et dashboard analytique. Déployé sur Vercel avec CI/CD automatisé et gestion des cold starts.',
    tags: ['Next.js', 'TypeScript', 'SQLite', 'NextAuth', 'Vercel CI/CD'],
    url: 'https://sm5-topaz.vercel.app',
    github: 'https://github.com/Owl212/sm',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop',
  },
  {
    title: 'Portfolio — Security-Hardened Static Site',
    description: 'Site statique Astro avec score Lighthouse 100/100. Architecture data-driven (source unique TypeScript), CSP Level 3, HSTS preload, headers OWASP, glassmorphism CSS pur sans dépendances runtime. Zéro JavaScript tiers.',
    tags: ['Astro', 'TypeScript', 'CSP Level 3', 'HSTS', 'Vercel Edge'],
    url: 'https://portfolio-abdelaziz-khoungui.vercel.app',
    github: 'https://github.com/Owl212/Portfolio',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=600&h=400&fit=crop',
  },
  {
    title: 'Optimisation Mémoire — Étude de cas C',
    description: 'Étude systématique de la gestion mémoire en C : allocation dynamique (malloc/realloc/free), listes chaînées avec gestion des fuites, manipulation de matrices NxN, et benchmarking d\'algorithmes de tri (QuickSort vs MergeSort vs HeapSort sur datasets de 10K+ éléments).',
    tags: ['C', 'Gestion mémoire', 'Complexité algorithmique', 'Benchmarking'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
  },
  {
    title: 'Architecture CPU — Pipeline & Performance',
    description: 'Analyse approfondie des architectures processeur : traduction de jeux d\'instructions (MIPS), optimisation des modes d\'adressage, résolution de hazards dans le pipeline (data forwarding, branch prediction), et calcul de CPI effectif sur des séquences d\'instructions réelles.',
    tags: ['Architecture MIPS', 'Pipeline CPU', 'Branch Prediction', 'CPI Analysis'],
    image: 'https://images.unsplash.com/photo-1555617981-dac3880eac6e?w=600&h=400&fit=crop',
  },
  {
    title: 'Recherche Quantitative — Méthodologie Statistique',
    description: 'Conception et conduite d\'une enquête de recherche sur l\'égalité professionnelle (n=200+). Méthodologie rigoureuse : élaboration du questionnaire, échantillonnage stratifié, analyse de corrélation, tests d\'hypothèses et visualisation des résultats. Rapport de recherche de 40+ pages.',
    tags: ['Méthodologie statistique', 'Analyse quantitative', 'Data Visualization', 'Recherche'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
  },
  {
    title: 'Ingénierie Audio Temps Réel',
    description: 'Architecture d\'un système de traitement audio multi-couche : routage virtuel 8 canaux via Voicemeeter Potato, égalisation paramétrique 31 bandes avec Equalizer APO, et chaîne de production complète dans FL Studio (composition, arrangement, mixage, mastering). Latence optimisée < 10ms.',
    tags: ['DSP', 'Voicemeeter Potato', 'Equalizer APO', 'FL Studio', 'Low Latency'],
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=400&fit=crop',
  },
];

/* ── Certifications (optionnel — vide = section masquée) ────────── */

export const certifications: Certification[] = [];

/* ── Social Links ───────────────────────────────────────────────── */

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/Owl212', icon: 'github' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/abdelaziz-khoungui-428355397', icon: 'linkedin' },
  { name: 'Email', url: 'mailto:a.khoungi@esisa.ac.ma', icon: 'mail' },
];

/* ── Dynamic Navigation ─────────────────────────────────────────── */

function buildNavItems(): NavItem[] {
  const items: NavItem[] = [
    { label: 'Accueil', href: '#hero', icon: 'home' },
    { label: 'À propos', href: '#about', icon: 'user' },
    { label: 'Compétences', href: '#skills', icon: 'layers' },
    { label: 'Formation', href: '#education', icon: 'graduation-cap' },
  ];

  if (experiences.length > 0) {
    items.push({ label: 'Expérience', href: '#experience', icon: 'briefcase' });
  }

  items.push({ label: 'Projets', href: '#projects', icon: 'folder-open' });

  if (certifications.length > 0) {
    items.push({ label: 'Certifications', href: '#certifications', icon: 'award' });
  }

  items.push({ label: 'Contact', href: '#contact', icon: 'send' });

  return items;
}

export const navItems: NavItem[] = buildNavItems();

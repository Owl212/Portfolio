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
  title: 'Étudiant en Informatique',
  subtitle: 'Passionné par la programmation, l\'architecture matérielle et l\'ingénierie audio. Approche méthodique pour résoudre des défis techniques et créatifs.',
  tagline: 'Étudiant en informatique passionné par le développement, l\'ingénierie audio et l\'analyse financière.',
  availabilityBadge: 'Disponible pour un stage',
  email: 'a.khoungi@esisa.ac.ma',
  phone: '+212 772 01 48 31',
  location: 'Fès, Maroc',
  avatar: '/avatar.jpg',
};

/* ── Stats ──────────────────────────────────────────────────────── */

export const stats: Stat[] = [
  { label: 'Projets Réalisés', value: '6+' },
  { label: 'Technologies', value: '12+' },
  { label: 'Années d\'Études', value: '2' },
  { label: 'Domaines', value: '3' },
];

/* ── About ──────────────────────────────────────────────────────── */

export const aboutParagraphs: AboutParagraph[] = [
  {
    text: 'Étudiant rigoureux et passionné par les technologies de l\'information, doté d\'une forte capacité d\'analyse technique et logique. Actuellement en études supérieures à l\'ESISA (Fès, Maroc) en informatique, algorithmique et mathématiques appliquées.',
  },
  {
    text: 'Compétent en programmation (Langage C, structures de données, algorithmique avancée), en architecture des microprocesseurs et en électronique numérique. Curieux et autodidacte, j\'explore les croisements entre informatique, audio et finance.',
  },
  {
    text: 'Passionné par l\'ingénierie audio et la production musicale — maîtrise de FL Studio, Voicemeeter et Equalizer APO pour le traitement du signal, le mixage virtuel et la correction acoustique en temps réel.',
  },
  {
    text: 'Désireux d\'appliquer une approche méthodique, développée à travers les sciences informatiques et l\'analyse de données complexes, à de nouveaux défis techniques ou créatifs. Toujours à la recherche de projets stimulants.',
  },
];

/* ── Technical Skills ───────────────────────────────────────────── */

export const techSkills: TechSkillCategory[] = [
  {
    category: 'Développement & Informatique',
    icon: 'code',
    skills: ['Langage C', 'Algorithmique avancée', 'Structures de données', 'Architecture microprocesseurs', 'Électronique numérique', 'Prompt Engineering IA'],
  },
  {
    category: 'Ingénierie Audio',
    icon: 'music',
    skills: ['FL Studio (DAW)', 'Voicemeeter', 'Equalizer APO', 'Mixage & Mastering', 'Routage audio', 'Traitement du signal'],
  },
  {
    category: 'Analyse & Finance',
    icon: 'trending-up',
    skills: ['Analyse technique', 'Nasdaq 100', 'Smart Money Concepts', 'Order Blocks', 'Fair Value Gaps'],
  },
  {
    category: 'Outils & Environnement',
    icon: 'terminal',
    skills: ['Git & GitHub', 'VS Code', 'Windows', 'NPM', 'Vercel'],
  },
];

/* ── Soft Skills (optionnel) ────────────────────────────────────── */

export const softSkills: SoftSkill[] = [
  { name: 'Analyse & Logique', description: 'Capacité de décomposition de problèmes complexes et raisonnement structuré.', icon: 'brain' },
  { name: 'Rigueur', description: 'Approche méthodique et souci du détail dans le code et les projets.', icon: 'shield-check' },
  { name: 'Autodidacte', description: 'Apprentissage continu et exploration de nouveaux domaines par curiosité.', icon: 'book-open' },
  { name: 'Créativité', description: 'Fusion de compétences techniques et artistiques, notamment en production musicale.', icon: 'sparkles' },
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

/* ── Expériences (optionnel — vide = section masquée) ───────────── */

export const experiences: Experience[] = [];

/* ── Publications (optionnel — vide = section masquée) ──────────── */
// Aucune publication → section masquée automatiquement

/* ── Projets ────────────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    title: 'Student Manager',
    description: 'Application complète de gestion des étudiants avec Next.js, SQLite et NextAuth. CRUD complet, authentification, dashboard avec statistiques.',
    tags: ['Next.js', 'TypeScript', 'SQLite', 'NextAuth', 'Tailwind CSS'],
    url: 'https://sm5-topaz.vercel.app',
    github: 'https://github.com/Owl212/sm',
  },
  {
    title: 'Portfolio Personnel',
    description: 'Site portfolio professionnel construit avec Astro. Design moderne dark theme, animations fluides, sécurité renforcée, déployé sur Vercel.',
    tags: ['Astro', 'TypeScript', 'CSS', 'Vercel'],
    url: 'https://portfolio-abdelaziz-khoungui.vercel.app',
    github: 'https://github.com/Owl212/Portfolio',
  },
  {
    title: 'TP Langage C — Structures de données',
    description: 'Travaux pratiques avancés : gestion de la mémoire dynamique, listes chaînées, manipulation de matrices, algorithmes de tri.',
    tags: ['C', 'Algorithmique', 'Structures de données', 'Mémoire'],
  },
  {
    title: 'Architecture des ordinateurs',
    description: 'Résolution de problèmes d\'architecture : jeux d\'instructions, modes d\'adressage mémoire, pipeline et performance CPU.',
    tags: ['Architecture CPU', 'Assembleur', 'Adressage mémoire'],
  },
  {
    title: 'Enquête universitaire — Égalité professionnelle',
    description: 'Conduite d\'une enquête de recherche sur l\'égalité professionnelle hommes-femmes. Collecte de données, analyse statistique, rédaction du rapport.',
    tags: ['Recherche', 'Analyse de données', 'Méthodologie'],
  },
  {
    title: 'Production Musicale',
    description: 'Compositions originales avec FL Studio. Mixage, arrangement et mastering. Routage audio avancé avec Voicemeeter et correction acoustique avec Equalizer APO.',
    tags: ['FL Studio', 'Mixage audio', 'Voicemeeter', 'Sound Design'],
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

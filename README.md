# Portfolio — Abdelaziz Khoungui

Portfolio professionnel construit avec **Astro**, déployé sur **Vercel**.

## 🔗 Liens

- **Live** : [portfolio-abdelaziz-khoungui.vercel.app](https://portfolio-abdelaziz-khoungui.vercel.app)
- **Repo** : [github.com/Owl212/Portfolio](https://github.com/Owl212/Portfolio)

## ⚡ Stack

- [Astro](https://astro.build) — Générateur de sites statiques
- TypeScript — Données centralisées et typées
- CSS Custom Properties — Design system dark glassmorphism
- Lucide (inline SVG) — Icônes
- [FormSubmit.co](https://formsubmit.co) — Formulaire de contact
- Vercel — Déploiement + headers de sécurité

## 📂 Structure

```
src/
├── data/portfolio.ts    ← Source unique de toutes les données
├── layouts/BaseLayout.astro
├── components/
│   ├── Header.astro
│   ├── Hero.astro
│   ├── About.astro
│   ├── Skills.astro
│   ├── Education.astro
│   ├── Projects.astro
│   ├── Contact.astro
│   ├── Footer.astro
│   └── BackToTop.astro
└── pages/index.astro
```

## 🛠️ Commandes

| Commande           | Action                        |
|--------------------|-------------------------------|
| `npm install`      | Installer les dépendances     |
| `npm run dev`      | Serveur de développement      |
| `npm run build`    | Build de production           |
| `npm run preview`  | Prévisualiser le build        |

## ✏️ Personnalisation

Modifiez **uniquement** `src/data/portfolio.ts` pour mettre à jour le contenu.
Les sections sans données sont automatiquement masquées.

## 🔒 Sécurité

Headers configurés dans `vercel.json` :
- Content-Security-Policy (CSP)
- Strict-Transport-Security (HSTS preload)
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy
- Permissions-Policy

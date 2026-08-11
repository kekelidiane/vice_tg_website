# Site web de l'association VICE TOGO

Site vitrine développé avec Next.js et Tailwind CSS.

## Prérequis

- Node.js 18+

## Installation

```bash
npm install
```

## Configuration de l'envoi d'e-mails

Le formulaire de contact et l'inscription à la newsletter utilisent
Nodemailer avec un compte Gmail.

1. Copier `.env.example` en `.env.local`
2. Activer la validation en 2 étapes sur le compte Gmail utilisé
3. Générer un mot de passe d'application : https://myaccount.google.com/apppasswords
4. Renseigner `MAIL_USER`, `MAIL_PASS` et `MAIL_TO` dans `.env.local`

## Développement

```bash
npm run dev
```

Le site est accessible sur http://localhost:3000

## Build de production

```bash
npm run build
npm run start
```

## Structure du projet

```
├── public/
│   └── assets/            # images, logos, documents
└── src/
    ├── app/
    │   ├── page.tsx        # accueil (assemblage des sections)
    │   ├── layout.tsx      # navbar + footer communs à toutes les pages
    │   ├── blog/           # liste des articles + page détail /blog/[slug]
    │   ├── donation/       # page dons
    │   └── api/            # routes contact et newsletter
    ├── components/
    │   ├── layout/         # navbar, footer
    │   ├── sections/       # sections de la page d'accueil
    │   ├── donation/       # composants propres à la page dons
    │   └── ui/             # composants réutilisables
    └── lib/                # constantes du site, données des articles, mailer
```

## Contribution

1. Forker le dépôt
2. Créer une branche pour vos modifications
3. Committer vos changements
4. Ouvrir une Pull Request

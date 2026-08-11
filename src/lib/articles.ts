export type Article = {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  image: string;
  content: string[];
};

// Contenu d'exemple : à remplacer par les vrais articles de l'association
// (le plus simple étant de brancher cette liste sur un CMS headless ou un
// fichier JSON le moment venu).
export const articles: Article[] = [
  {
    slug: "recoltes-2023",
    title: "Nos récoltes de cette saison",
    date: "20 Juin 2023",
    author: "Diane",
    excerpt: "Investir dans notre association peut transformer des vies.",
    image: "/assets/agro/filles.jpg",
    content: [
      "Cette saison a été marquée par une belle récolte issue de nos parcelles cultivées en agriculture biologique. Les légumes récoltés servent en priorité à nourrir les enfants suivis par l'association, le surplus étant proposé à la vente pour financer nos programmes.",
      "Grâce à l'implication de nos bénévoles et au soutien de nos donateurs, nous avons pu agrandir la surface cultivée par rapport à l'an dernier et diversifier les cultures.",
      "Merci à toutes celles et ceux qui rendent ce travail possible.",
    ],
  },
  {
    slug: "atelier-ecologique",
    title: "Atelier d'éducation écologique",
    date: "15 Mai 2023",
    author: "Marc",
    excerpt:
      "Sensibiliser les jeunes à la protection de l'environnement dès le plus jeune âge.",
    image: "/assets/agro/filles.jpg",
    content: [
      "Nous avons organisé un atelier de sensibilisation à la protection de l'environnement destiné aux enfants suivis par l'association. Au programme : tri des déchets, découverte du compostage et petites plantations symboliques.",
      "L'objectif est simple : donner aux enfants les bons réflexes le plus tôt possible, pour qu'ils deviennent à leur tour des acteurs du changement dans leur communauté.",
    ],
  },
  {
    slug: "reboisement-communautaire",
    title: "Projet de reboisement communautaire",
    date: "10 Avril 2023",
    author: "Claire",
    excerpt:
      "Des centaines d'arbres plantés grâce à la mobilisation locale et aux bénévoles.",
    image: "/assets/agro/filles.jpg",
    content: [
      "Notre projet de reboisement communautaire a rassemblé des dizaines de bénévoles autour d'une même cause : restaurer les zones dégradées et lutter contre la déforestation.",
      "Chaque arbre planté est suivi dans le temps par les habitants du quartier, qui s'engagent à en prendre soin. C'est cette appropriation locale qui fait la force du projet.",
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

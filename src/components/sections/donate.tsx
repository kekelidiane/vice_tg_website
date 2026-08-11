import { siteConfig } from "@/lib/site";

const actions = [
  {
    emoji: "💚",
    title: "Faire un don",
    link: "/donation",
    description:
      "Soutenez notre cause en contribuant financièrement pour l'avenir des enfants et la planète.",
  },
  {
    emoji: "🥗",
    title: "Acheter nos produits",
    link: siteConfig.whatsappOrders,
    description:
      "Achetez nos légumes et produits issus de l'agriculture bio, cultivés durablement, et soutenez nos actions.",
  },
  {
    emoji: "🤝",
    title: "Devenir bénévole",
    link: siteConfig.whatsappVolunteers,
    description:
      "Rejoignez notre communauté WhatsApp, notre équipe de bénévoles engagés pour participer activement à nos projets.",
  },
];

export default function Donate() {
  return (
    <section id="donate" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Soutenez VICE TOGO
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Votre soutien nous permet de continuer nos actions pour
          l&apos;éducation et l&apos;environnement.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {actions.map((action) => (
          <div
            key={action.title}
            className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-lg transition flex flex-col items-center"
          >
            <div className="text-5xl mb-4">{action.emoji}</div>
            <h3 className="text-xl font-bold text-green-700 hover:text-yellow-500 transition mb-4 border-b-4 border-yellow-400 inline-block pb-2">
              <a
                href={action.link}
                target={action.link.startsWith("/") ? undefined : "_blank"}
                rel={action.link.startsWith("/") ? undefined : "noopener noreferrer"}
              >
                {action.title}
              </a>
            </h3>
            <p className="text-gray-600">{action.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const actions = [
  {
    title: "ÉDUCATION",
    text: "Nous soutenons la formation des jeunes à travers des programmes d'alphabétisation, des ateliers numériques et des bourses scolaires afin de favoriser l'accès équitable au savoir.",
  },
  {
    title: "ENVIRONNEMENT",
    text: "Nous agissons pour la protection de la nature à travers des campagnes de reboisement, la sensibilisation à la gestion des déchets et la promotion d'initiatives écoresponsables.",
  },
  {
    title: "AGRICULTURE BIO",
    text: "Nous cultivons et promouvons des produits issus de l'agriculture biologique, pour une alimentation saine et des revenus durables pour les communautés locales.",
  },
];

export default function Actions() {
  return (
    <section id="actions" className="bg-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Nos actions
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          L&apos;association{" "}
          <span className="font-semibold text-green-700">VICE TOGO</span>{" "}
          agit au quotidien sur trois grands axes.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {actions.map((action) => (
          <div
            key={action.title}
            className="bg-gray-50 shadow-md rounded-2xl p-6 hover:shadow-lg transition flex flex-col"
          >
            <h3 className="text-xl font-bold text-green-700 mb-4 inline-block border-b-4 border-yellow-400 pb-1 w-fit mx-auto">
              {action.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed flex-1 text-center">
              {action.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

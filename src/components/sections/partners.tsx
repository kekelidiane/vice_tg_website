// Ajoutez ici les logos de vos partenaires réels (fichier dans
// public/assets/logos, puis un objet { name, logo } par partenaire).
const partners: { name: string; logo: string }[] = [];

export default function Partners() {
  if (partners.length === 0) return null;

  return (
    <section id="partners" className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Nos partenaires
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Ils nous accompagnent dans nos actions.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-10 max-w-5xl mx-auto">
        {partners.map((partner) => (
          <img
            key={partner.name}
            src={partner.logo}
            alt={partner.name}
            className="h-14 object-contain grayscale hover:grayscale-0 transition"
          />
        ))}
      </div>
    </section>
  );
}

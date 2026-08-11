import Image from "next/image";
import Counter from "@/components/ui/counter";

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24 px-6 md:px-12 lg:px-24 space-y-16">
      <div className="bg-white py-16 px-6 md:px-12 rounded-2xl shadow-md">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-md">
            <Image
              src="/assets/edu/enfants.jpg"
              alt="Enfants soutenus par l'association"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-700">Notre mission</h2>
            <p className="text-gray-700 leading-relaxed">
              L&apos;Association{" "}
              <span className="font-semibold text-green-600">VICE TOGO</span>{" "}
              se consacre à soutenir les enfants les plus démunis à travers
              l&apos;éducation, tout en promouvant la consommation et
              l&apos;agriculture biologiques, ainsi que le reboisement.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Vous pouvez soutenir notre association en faisant un don, en
              devenant bénévole ou en partageant notre cause avec votre
              entourage.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ensemble, nous pouvons offrir aux enfants une éducation de
              qualité, promouvoir des pratiques agricoles durables et
              préserver notre environnement pour les générations futures.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mt-12 max-w-4xl mx-auto">
          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-green-700">
              <Counter target={52} />
            </h3>
            <p className="text-gray-600">Nombre d&apos;enfants</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-yellow-500">
              <Counter target={2} />
            </h3>
            <p className="text-gray-600">Nombre de donateurs</p>
          </div>
          <div className="p-6 bg-green-50 rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-4xl font-bold text-green-700">
              <Counter target={24} />
            </h3>
            <p className="text-gray-600">Nombre de volontaires</p>
          </div>
        </div>
      </div>

      <div className="bg-white py-16 px-6 md:px-12 rounded-2xl shadow-md">
        <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-green-700">Notre engagement</h2>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold text-green-600">VICE TOGO</span>{" "}
              agit avec un double engagement : soutenir les enfants dans leur
              éducation et promouvoir la préservation de notre environnement.
            </p>

            <ul className="text-gray-700 space-y-3 leading-relaxed list-disc list-inside">
              <li>
                <span className="font-semibold">Soutien scolaire : </span>
                Nous faisons du soutien scolaire aux enfants défavorisés, en
                les aidant à acquérir les compétences et connaissances
                nécessaires au sein de notre bibliothèque.
              </li>
              <li>
                <span className="font-semibold">Agriculture durable : </span>
                Nous promouvons les pratiques agricoles durables et
                biologiques pour protéger l&apos;environnement, assurer une
                alimentation saine et renforcer les moyens de subsistance des
                communautés.
              </li>
              <li>
                <span className="font-semibold">Reboisement : </span>
                Nous nous engageons à planter des arbres et à restaurer les
                écosystèmes forestiers pour lutter contre la déforestation et
                favoriser la biodiversité.
              </li>
            </ul>
          </div>

          <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
            <Image
              src="/assets/agro/filles.jpg"
              alt="Notre engagement et approche"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

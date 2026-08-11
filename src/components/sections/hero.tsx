import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="bg-gray-50 pt-28 md:pt-36 lg:pt-40 pb-28 md:pb-32 px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Vie <span className="text-green-700">Culture</span>{" "}
            <span className="text-yellow-400">Environnement</span>
          </h1>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            L&apos;Association{" "}
            <span className="font-semibold text-green-700">VICE Togo</span>{" "}
            se consacre à soutenir les enfants les plus démunis à travers
            l&apos;éducation, tout en promouvant la consommation et
            l&apos;agriculture biologiques, ainsi que le reboisement.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Vous pouvez soutenir notre association en faisant un don, en
            devenant bénévole ou en partageant notre cause avec votre
            entourage.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#donate"
              className="px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow hover:bg-green-800 transition"
            >
              Faire un don
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-green-700 font-semibold text-green-700 rounded-lg hover:bg-green-50 transition"
            >
              Nous contacter
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/agro/ujpod.jpg"
              alt="Champs cultivés par l'association"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

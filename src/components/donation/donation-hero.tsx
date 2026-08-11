import Image from "next/image";
import { siteConfig } from "@/lib/site";

export default function DonationHero() {
  return (
    <div className="bg-white pt-28 md:pt-32 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          Ensemble, changeons des vies
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto mb-4">
          Un simple geste peut nourrir, soigner ou scolariser un enfant 🤲. Ce
          qui peut sembler petit pour vous représente énormément pour eux.
        </p>
        <p className="text-lg font-semibold text-gray-700">
          Même 1 000 FCFA peut nourrir un enfant pendant plusieurs jours.
          Faites un don maintenant et changez une vie 💚
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 mb-10 max-w-5xl mx-auto">
        <a
          href={siteConfig.donation.floozTel}
          className="border rounded-xl p-4 shadow-sm bg-white flex flex-col items-center gap-3 text-center hover:shadow-md hover:-translate-y-1 transition duration-300"
        >
          <Image
            src="/assets/logos/Moov_money.jpeg"
            alt="Flooz"
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
          />
          <span className="text-xl font-bold text-green-600">
            {siteConfig.donation.flooz}
          </span>
          <p className="text-sm text-gray-500">Envoyez votre don via Flooz</p>
        </a>

        <a
          href={siteConfig.donation.tmoneyTel}
          className="border rounded-xl p-4 shadow-sm bg-white flex flex-col items-center gap-3 text-center hover:shadow-md hover:-translate-y-1 transition duration-300"
        >
          <Image
            src="/assets/logos/Mixx_by_Yas.jpg"
            alt="Mixx by Yas"
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
          />
          <span className="text-xl font-bold text-green-600">
            {siteConfig.donation.tmoney}
          </span>
          <p className="text-sm text-gray-500">Envoyez votre don via Tmoney</p>
        </a>

        <a
          href={siteConfig.donation.ribUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="border rounded-xl p-4 shadow-sm bg-white flex flex-col items-center gap-3 text-center hover:shadow-md hover:-translate-y-1 transition duration-300"
        >
          <Image
            src="/assets/logos/transactions-bank.jpg"
            alt="Virement bancaire"
            width={80}
            height={80}
            className="w-20 h-20 object-contain"
          />
          <span className="text-xl font-bold text-green-600 hover:text-yellow-500">
            Voir le RIB
          </span>
          <p className="text-sm text-gray-500">
            Effectuez un virement bancaire sécurisé
          </p>
        </a>
      </div>

      <p className="text-center font-light text-gray-700 max-w-xl mx-auto">
        Nous nous engageons à utiliser chaque don de manière transparente et
        responsable, pour un impact réel et durable.
      </p>
    </div>
  );
}

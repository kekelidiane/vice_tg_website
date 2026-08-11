"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { siteConfig } from "@/lib/site";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Échec de l'inscription");

      setStatus("sent");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="bg-green-700 text-white py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">
            Et vous ?
          </h2>
          <p className="font-bold mb-6">
            Rejoignez notre association pour
            <br /> qu&apos;ensemble, nous contribuions
            <br /> à un monde meilleur.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">
            Nous découvrir
          </h2>
          <ul className="space-y-2">
            <li>
              <Link href="/#about" className="hover:text-yellow-300 transition">
                À propos
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-yellow-300 transition">
                Nos activités
              </Link>
            </li>
            <li>
              <Link href="/#donate" className="hover:text-yellow-300 transition">
                Nos produits maraîchers
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-4 text-yellow-400">
            S&apos;abonner à notre newsletter
          </h2>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 mb-4"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre adresse mail"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-gray-900"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 text-green-700 font-semibold px-4 py-2 rounded-lg transition cursor-pointer"
            >
              {status === "sending" ? "Envoi..." : "S'abonner"}
            </button>
          </form>
          {status === "sent" && (
            <p className="text-sm text-yellow-200 mb-4">Inscription réussie, merci !</p>
          )}
          {status === "error" && (
            <p className="text-sm text-yellow-200 mb-4">
              Une erreur est survenue, réessayez plus tard.
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <span className="text-yellow-400 font-semibold mb-2 sm:mb-0">
              Suivez-nous sur
            </span>
            <div className="flex gap-4 text-2xl justify-center sm:justify-start">
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-yellow-400 transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-white text-sm">
          &copy; {siteConfig.name} {new Date().getFullYear()} | Tous droits
          réservés. Réalisé par{" "}
          <a
            href={siteConfig.credit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-300 hover:text-white transition cursor-pointer"
          >
            {siteConfig.credit.name}
          </a>
        </p>
      </div>
    </footer>
  );
}

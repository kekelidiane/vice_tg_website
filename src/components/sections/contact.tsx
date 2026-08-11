"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site";

const emptyForm = { nom: "", prenom: "", email: "", objet: "", message: "" };

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Échec de l'envoi");

      setStatus("sent");
      setFormData(emptyForm);
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Contactez-nous
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Vous avez d&apos;autres questions ?{" "}
          <a
            href={siteConfig.whatsappContact}
            className="font-semibold text-green-700 hover:text-yellow-500 transition"
          >
            Écrivez-nous
          </a>{" "}
          ou envoyez-nous un mail !
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            placeholder="Nom"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleChange}
            placeholder="Prénom(s)"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Adresse mail"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
            required
          />
          <input
            type="text"
            name="objet"
            value={formData.objet}
            onChange={handleChange}
            placeholder="Objet"
            className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          rows={6}
          className="border border-gray-300 rounded-lg px-4 py-3 w-full focus:ring-2 focus:ring-green-500 focus:outline-none"
          required
        />

        <div className="text-center">
          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-green-700 hover:bg-green-600 disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg shadow transition cursor-pointer"
          >
            {status === "sending" ? "Envoi..." : "Envoyer"}
          </button>
        </div>

        {status === "sent" && (
          <p className="text-center mt-2 text-green-700 font-medium">
            Votre message a été envoyé avec succès !
          </p>
        )}
        {status === "error" && (
          <p className="text-center mt-2 text-red-600 font-medium">
            Une erreur est survenue, merci de réessayer.
          </p>
        )}
      </form>
    </section>
  );
}

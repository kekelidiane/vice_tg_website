import nodemailer from "nodemailer";

// Transporteur SMTP Gmail unique, réutilisé par toutes les routes d'envoi
// de mail (contact, newsletter...). Les identifiants viennent des variables
// d'environnement MAIL_USER / MAIL_PASS (voir .env.example).
export function getMailTransporter() {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
}

// Adresse qui reçoit les messages du site (formulaire de contact,
// inscriptions à la newsletter). Par défaut, la même que l'expéditeur.
export const mailRecipient = process.env.MAIL_TO || process.env.MAIL_USER;

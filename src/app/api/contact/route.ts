import { NextResponse } from "next/server";
import { getMailTransporter, mailRecipient } from "@/lib/mailer";
import { siteConfig } from "@/lib/site";

export async function POST(req: Request) {
  try {
    const { nom, prenom, email, objet, message } = await req.json();

    if (!nom || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Champs requis manquants." },
        { status: 400 }
      );
    }

    const transporter = getMailTransporter();

    await transporter.sendMail({
      from: email,
      to: mailRecipient,
      replyTo: email,
      subject: objet || `Nouveau message de ${siteConfig.name}`,
      text: `Nom : ${nom} ${prenom || ""}\nEmail : ${email}\n\nMessage :\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi mail (contact):", error);
    return NextResponse.json(
      { success: false, error: "Échec de l'envoi du message." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { getMailTransporter, mailRecipient } from "@/lib/mailer";
import { siteConfig } from "@/lib/site";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Adresse mail manquante." },
        { status: 400 }
      );
    }

    const transporter = getMailTransporter();

    // Notification interne : on avertit simplement l'association qu'une
    // nouvelle personne souhaite s'abonner à la newsletter.
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: mailRecipient,
      replyTo: email,
      subject: `Nouvelle inscription newsletter - ${siteConfig.name}`,
      text: `Nouvelle inscription à la newsletter : ${email}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur envoi mail (newsletter):", error);
    return NextResponse.json(
      { success: false, error: "Échec de l'inscription." },
      { status: 500 }
    );
  }
}

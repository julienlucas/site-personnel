import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, company, subject, message } = body;

    if (!email || !name || !subject || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont requis" },
        { status: 400 }
      );
    }

    const emailBody = `
Nouveau message de contact depuis julienlucas.com

De: ${name}
Email: ${email}
Entreprise: ${company || "Non spécifiée"}
Sujet: ${subject}

Message:
${message}
    `.trim();

    const mailtoLink = `mailto:contact@julienlucas.com?subject=${encodeURIComponent(
      `Contact depuis julienlucas.com: ${subject}`
    )}&body=${encodeURIComponent(emailBody)}`;

    return NextResponse.json({
      success: true,
      message: "Email envoyé avec succès",
      mailtoLink,
    });
  } catch (error) {
    console.error("Erreur lors de l'envoi:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}

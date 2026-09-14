import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "segreteria@scassellati.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const nome = typeof body.nome === "string" ? body.nome.trim() : "";
  const azienda = typeof body.azienda === "string" ? body.azienda.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const telefono = typeof body.telefono === "string" ? body.telefono.trim() : "";
  const messaggio = typeof body.messaggio === "string" ? body.messaggio.trim() : "";
  const privacy = body.privacy === true;

  if (!nome || !azienda || !email || !telefono || !messaggio || !privacy) {
    return NextResponse.json(
      { error: "Compila tutti i campi obbligatori." },
      { status: 400 }
    );
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "L'indirizzo email non è valido." },
      { status: 400 }
    );
  }
  if (!/^[+]?[\d\s()-]{7,20}$/.test(telefono)) {
    return NextResponse.json(
      { error: "Il numero di telefono non è valido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY non configurata.");
    return NextResponse.json(
      { error: "Servizio di invio non configurato. Riprova più tardi." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "Sito Scassellati <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nuova richiesta dal sito — ${nome}`,
      html: `
        <h2>Nuova richiesta dal form Contatti</h2>
        <p><strong>Nome e cognome:</strong> ${escapeHtml(nome)}</p>
        <p><strong>Azienda:</strong> ${escapeHtml(azienda) || "—"}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(telefono) || "—"}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${escapeHtml(messaggio).replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("Errore invio email Resend:", error);
      return NextResponse.json(
        { error: "Impossibile inviare il messaggio. Riprova più tardi." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Errore invio email:", err);
    return NextResponse.json(
      { error: "Impossibile inviare il messaggio. Riprova più tardi." },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = "segreteria@scassellati.com";
const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024; // 8MB per file, contain total request size

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: "Richiesta non valida." }, { status: 400 });
  }

  const nome = (form.get("nome") as string | null)?.trim() ?? "";
  const azienda = (form.get("azienda") as string | null)?.trim() ?? "";
  const email = (form.get("email") as string | null)?.trim() ?? "";
  const telefono = (form.get("telefono") as string | null)?.trim() ?? "";
  const marca = (form.get("marca") as string | null)?.trim() ?? "";
  const modello = (form.get("modello") as string | null)?.trim() ?? "";
  const anno = (form.get("anno") as string | null)?.trim() ?? "";
  const note = (form.get("note") as string | null)?.trim() ?? "";
  const privacy = form.get("privacy") === "true";
  const files = form.getAll("foto").filter((f): f is File => f instanceof File && f.size > 0);

  if (!nome || !azienda || !email || !telefono || !marca || !modello || !privacy) {
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

  const oversized = files.find((f) => f.size > MAX_ATTACHMENT_BYTES);
  if (oversized) {
    return NextResponse.json(
      { error: `Il file "${oversized.name}" supera gli 8MB consentiti.` },
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
    const attachments = await Promise.all(
      files.slice(0, 5).map(async (file) => ({
        filename: file.name,
        content: Buffer.from(await file.arrayBuffer()),
      }))
    );

    const { error } = await resend.emails.send({
      from: "Sito Scassellati <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `Nuova valutazione usato — ${marca} ${modello}`,
      html: `
        <h2>Nuova richiesta di valutazione usato</h2>
        <p><strong>Nome e cognome:</strong> ${escapeHtml(nome)}</p>
        <p><strong>Azienda:</strong> ${escapeHtml(azienda)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(telefono)}</p>
        <p><strong>Marca:</strong> ${escapeHtml(marca)}</p>
        <p><strong>Modello:</strong> ${escapeHtml(modello)}</p>
        <p><strong>Anno:</strong> ${escapeHtml(anno) || "—"}</p>
        <p><strong>Stato e note:</strong></p>
        <p>${escapeHtml(note).replace(/\n/g, "<br>") || "—"}</p>
      `,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    if (error) {
      console.error("Errore invio email Resend:", error);
      return NextResponse.json(
        { error: "Impossibile inviare la richiesta. Riprova più tardi." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Errore invio email:", err);
    return NextResponse.json(
      { error: "Impossibile inviare la richiesta. Riprova più tardi." },
      { status: 500 }
    );
  }
}

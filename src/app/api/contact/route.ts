import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await req.json();
    const { name, email, telefon, betreff, nachricht } = body;

    if (!name || !email || !betreff || !nachricht) {
      return NextResponse.json(
        { error: "Pflichtfelder fehlen." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    // E-Mail an die Kanzlei
    await resend.emails.send({
      from: "Kontaktformular <kontakt@steuerpartner-ffm.de>",
      to: [process.env.CONTACT_EMAIL ?? "info@steuerpartner-ffm.de"],
      replyTo: email,
      subject: `Neue Anfrage: ${betreff} – ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#146574;padding:24px 32px;margin-bottom:0">
            <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700">Steuer<span style="color:#5ce1e6">&</span>Partner</h1>
            <p style="color:rgba(255,255,255,.7);margin:4px 0 0;font-size:12px;letter-spacing:.1em;text-transform:uppercase">Neue Kontaktanfrage</p>
          </div>
          <div style="background:#f8f9fa;padding:32px;border:1px solid #e9ecef;border-top:none">
            <table style="width:100%;border-collapse:collapse">
              <tr><td style="padding:10px 0;border-bottom:1px solid #e9ecef;width:140px;color:#666;font-size:13px;font-weight:600">Name</td><td style="padding:10px 0;border-bottom:1px solid #e9ecef;color:#333;font-size:14px">${name}</td></tr>
              <tr><td style="padding:10px 0;border-bottom:1px solid #e9ecef;color:#666;font-size:13px;font-weight:600">E-Mail</td><td style="padding:10px 0;border-bottom:1px solid #e9ecef;color:#333;font-size:14px"><a href="mailto:${email}" style="color:#146574">${email}</a></td></tr>
              ${
                telefon
                  ? `<tr><td style="padding:10px 0;border-bottom:1px solid #e9ecef;color:#666;font-size:13px;font-weight:600">Telefon</td><td style="padding:10px 0;border-bottom:1px solid #e9ecef;color:#333;font-size:14px">${telefon}</td></tr>`
                  : ""
              }
              <tr><td style="padding:10px 0;border-bottom:1px solid #e9ecef;color:#666;font-size:13px;font-weight:600">Betreff</td><td style="padding:10px 0;border-bottom:1px solid #e9ecef;color:#333;font-size:14px">${betreff}</td></tr>
            </table>
            <div style="margin-top:24px">
              <p style="color:#666;font-size:13px;font-weight:600;margin:0 0 8px">Nachricht</p>
              <div style="background:#fff;border:1px solid #e9ecef;border-left:3px solid #146574;padding:16px 20px;font-size:14px;color:#333;line-height:1.7;white-space:pre-wrap">${nachricht}</div>
            </div>
            <div style="margin-top:24px;padding-top:24px;border-top:1px solid #e9ecef">
              <a href="mailto:${email}?subject=Re: ${betreff}" style="display:inline-block;background:#146574;color:#fff;text-decoration:none;padding:12px 24px;font-size:14px;font-weight:600;border-radius:3px">Direkt antworten →</a>
            </div>
          </div>
          <div style="padding:16px 32px;background:#eef1f6;text-align:center">
            <p style="color:#8fa3a8;font-size:11px;margin:0;letter-spacing:.08em">Diese E-Mail wurde automatisch über das Kontaktformular auf steuerpartner-ffm.de generiert.</p>
          </div>
        </div>
      `,
    });

    // Bestätigungs-E-Mail an den Absender
    await resend.emails.send({
      from: "Steuer & Partner <kontakt@steuerpartner-ffm.de>",
      to: [email],
      subject: "Ihre Nachricht ist bei uns eingegangen",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#333">
          <div style="background:#146574;padding:24px 32px">
            <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700">Steuer<span style="color:#5ce1e6">&</span>Partner</h1>
          </div>
          <div style="padding:32px;border:1px solid #e9ecef;border-top:none">
            <h2 style="color:#146574;font-size:18px;margin:0 0 16px">Vielen Dank, ${name}!</h2>
            <p style="color:#555;line-height:1.7;margin:0 0 16px">Ihre Nachricht ist bei uns eingegangen. Wir melden uns innerhalb von <strong>24 Stunden</strong> bei Ihnen.</p>
            <p style="color:#555;line-height:1.7;margin:0 0 24px">Ihr Anliegen: <strong>${betreff}</strong></p>
            <div style="background:#f8f9fa;border-left:3px solid #5ce1e6;padding:16px 20px;margin-bottom:24px">
              <p style="color:#666;font-size:13px;margin:0 0 4px;font-weight:600">Ihre Nachricht</p>
              <p style="color:#555;font-size:14px;margin:0;line-height:1.7;white-space:pre-wrap">${nachricht}</p>
            </div>
            <p style="color:#555;line-height:1.7;margin:0">Mit freundlichen Grüßen,<br/><strong>Steuer & Partner GmbH</strong><br/>Musterstraße 12 · 60311 Frankfurt am Main<br/>+49 69 123 456 789</p>
          </div>
          <div style="padding:16px 32px;background:#eef1f6;text-align:center">
            <p style="color:#8fa3a8;font-size:11px;margin:0;letter-spacing:.08em">Bitte antworten Sie nicht auf diese E-Mail. Nutzen Sie für Rückfragen info@steuerpartner-ffm.de</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Kontaktformular Fehler:", error);
    return NextResponse.json(
      { error: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut." },
      { status: 500 }
    );
  }
}

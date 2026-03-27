import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "E-Mail fehlt." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY ?? "",
      },
      body: JSON.stringify({
        email,
        attributes: { VORNAME: name ?? "" },
        listIds: [2], // Standard-Liste in Brevo
        updateEnabled: true,
      }),
    });

    if (res.ok || res.status === 204) {
      return NextResponse.json({ success: true });
    }

    const data = await res.json();
    // Kontakt existiert bereits – auch OK
    if (data.code === "duplicate_parameter") {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Fehler beim Speichern." },
      { status: 500 }
    );
  } catch (err) {
    console.error("Newsletter API error:", err);
    return NextResponse.json({ error: "Serverfehler." }, { status: 500 });
  }
}

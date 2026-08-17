import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  fullName: string;
  companyName: string;
  businessEmail: string;
  phone?: string;
  website?: string;
  industry: string;
  size?: string;
  challenge: string;
  crm?: string;
  volume?: string;
  message: string;
  consent: boolean;
  // Honeypot field — real visitors never fill this in.
  companyWebsiteUrl?: string;
}

const REQUIRED_FIELDS: (keyof ContactPayload)[] = [
  "fullName",
  "companyName",
  "businessEmail",
  "industry",
  "challenge",
  "message",
];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  let data: Partial<ContactPayload>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 }
    );
  }

  // Honeypot — bots fill every field including hidden ones. If populated,
  // silently report success without sending an email or hitting Resend.
  if (data.companyWebsiteUrl) {
    return NextResponse.json({ ok: true });
  }

  // Server-side validation. Never trust client-side validation alone.
  for (const field of REQUIRED_FIELDS) {
    const value = data[field];
    if (!value || String(value).trim() === "") {
      return NextResponse.json(
        { error: `Missing required field: ${field}` },
        { status: 400 }
      );
    }
  }

  if (!isValidEmail(data.businessEmail!)) {
    return NextResponse.json(
      { error: "Please provide a valid business email address." },
      { status: 400 }
    );
  }

  if (!data.consent) {
    return NextResponse.json(
      { error: "Consent to be contacted is required." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "support@qlentracx.com";
  // "onboarding@resend.dev" is Resend's shared test sender that works before
  // you verify your own domain. Replace with your verified sender once your
  // domain is added in the Resend dashboard (e.g. no-reply@qlentracx.com).
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Qlentra Website <onboarding@resend.dev>";

  if (!apiKey) {
    console.error(
      "RESEND_API_KEY is not set. Contact form submissions cannot be emailed."
    );
    return NextResponse.json(
      {
        error:
          "Email service is not configured yet. Please email us directly in the meantime.",
      },
      { status: 500 }
    );
  }

  const html = `
    <div style="font-family: sans-serif; color: #0B0F2A;">
      <h2 style="margin-bottom: 4px;">New enquiry from the Qlentra website</h2>
      <p style="color:#555; margin-top:0;">Submitted via the Contact page form.</p>
      <table cellpadding="6" style="border-collapse: collapse; width: 100%; max-width: 560px;">
        <tr><td><strong>Full Name</strong></td><td>${escapeHtml(data.fullName!)}</td></tr>
        <tr><td><strong>Company</strong></td><td>${escapeHtml(data.companyName!)}</td></tr>
        <tr><td><strong>Business Email</strong></td><td>${escapeHtml(data.businessEmail!)}</td></tr>
        <tr><td><strong>Phone</strong></td><td>${escapeHtml(data.phone || "—")}</td></tr>
        <tr><td><strong>Website</strong></td><td>${escapeHtml(data.website || "—")}</td></tr>
        <tr><td><strong>Industry</strong></td><td>${escapeHtml(data.industry!)}</td></tr>
        <tr><td><strong>Locations / Employees</strong></td><td>${escapeHtml(data.size || "—")}</td></tr>
        <tr><td><strong>Primary Challenge</strong></td><td>${escapeHtml(data.challenge!)}</td></tr>
        <tr><td><strong>Current CRM / Booking Software</strong></td><td>${escapeHtml(data.crm || "—")}</td></tr>
        <tr><td><strong>Estimated Monthly Volume</strong></td><td>${escapeHtml(data.volume || "—")}</td></tr>
      </table>
      <p style="margin-top:16px;"><strong>Message</strong></p>
      <p style="white-space: pre-wrap; border-left: 3px solid #6A3DFF; padding-left: 12px;">${escapeHtml(
        data.message!
      )}</p>
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: data.businessEmail,
        subject: `New enquiry — ${data.companyName} (${data.fullName})`,
        html,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Resend API error:", response.status, errorText);
      return NextResponse.json(
        {
          error:
            "We couldn't send your enquiry right now. Please try again or email us directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form submission error:", err);
    return NextResponse.json(
      {
        error:
          "Something went wrong sending your enquiry. Please try again or email us directly.",
      },
      { status: 500 }
    );
  }
}

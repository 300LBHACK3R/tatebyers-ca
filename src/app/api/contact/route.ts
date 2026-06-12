import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 180;
const MAX_SUBJECT_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 5000;

function getEnvValue(key: string) {
  const value = process.env[key];
  return value?.trim() || null;
}

function normalizeString(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildTextEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  return [
    "New TateByers.ca contact form submission",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
  ].join("\n");
}

function buildHtmlEmail({
  name,
  email,
  subject,
  message,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `
    <div style="margin:0;padding:0;background:#050816;color:#e5e7eb;font-family:Arial,sans-serif;">
      <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
        <div style="border:1px solid rgba(34,211,238,0.25);border-radius:22px;background:rgba(255,255,255,0.04);padding:28px;">
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#67e8f9;font-weight:800;">
            TateByers.ca Contact
          </p>

          <h1 style="margin:0 0 22px;font-size:26px;line-height:1.2;color:#ffffff;">
            New message from ${safeName}
          </h1>

          <p style="margin:0 0 10px;"><strong>Name:</strong> ${safeName}</p>
          <p style="margin:0 0 10px;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color:#67e8f9;">${safeEmail}</a></p>
          <p style="margin:0 0 18px;"><strong>Subject:</strong> ${safeSubject}</p>

          <div style="margin-top:20px;border:1px solid rgba(255,255,255,0.1);border-radius:16px;background:rgba(0,0,0,0.25);padding:18px;">
            <p style="margin:0 0 10px;color:#94a3b8;font-size:12px;text-transform:uppercase;letter-spacing:0.14em;font-weight:800;">
              Message
            </p>
            <p style="margin:0;line-height:1.7;color:#e5e7eb;">${safeMessage}</p>
          </div>

          <p style="margin:22px 0 0;color:#94a3b8;font-size:12px;line-height:1.6;">
            Sent from the internal Tate OS contact window.
          </p>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const resendApiKey = getEnvValue("RESEND_API_KEY");
    const contactToEmail = getEnvValue("CONTACT_TO_EMAIL");
    const contactFromEmail =
      getEnvValue("CONTACT_FROM_EMAIL") ??
      "TateByers.ca <onboarding@resend.dev>";

    if (!resendApiKey || !contactToEmail) {
      return NextResponse.json(
        {
          ok: false,
          message: "Contact form is not configured yet.",
        },
        { status: 500 },
      );
    }

    const payload = (await request.json()) as ContactPayload;

    const honeypot = normalizeString(payload.website, 200);
    if (honeypot.length > 0) {
      return NextResponse.json({
        ok: true,
        message: "Message sent.",
      });
    }

    const name = normalizeString(payload.name, MAX_NAME_LENGTH);
    const email = normalizeString(payload.email, MAX_EMAIL_LENGTH);
    const subject =
      normalizeString(payload.subject, MAX_SUBJECT_LENGTH) ||
      "New TateByers.ca message";
    const message = normalizeString(payload.message, MAX_MESSAGE_LENGTH);

    if (name.length < 2) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please enter your name.",
        },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    if (message.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please enter a message with at least 10 characters.",
        },
        { status: 400 },
      );
    }

    const resend = new Resend(resendApiKey);

    const { data, error } = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      subject: `[TateByers.ca] ${subject}`,
      html: buildHtmlEmail({ name, email, subject, message }),
      text: buildTextEmail({ name, email, subject, message }),
      replyTo: email,
    });

    if (error) {
      console.error("Resend contact error:", error);

      return NextResponse.json(
        {
          ok: false,
          message: "The message could not be sent right now.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
      id: data?.id ?? null,
      message: "Message sent. Tate has been notified.",
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong while sending the message.",
      },
      { status: 500 },
    );
  }
}
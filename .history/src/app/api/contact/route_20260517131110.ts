import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  company?: unknown;
};

const DEFAULT_TO_EMAIL = "tatebyers06@gmail.com";
const DEFAULT_FROM_EMAIL = "TateByers.ca <onboarding@resend.dev>";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 180;
const MAX_SUBJECT_LENGTH = 140;
const MAX_MESSAGE_LENGTH = 4000;

function normalizeSingleLine(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";

  return value
    .trim()
    .replace(/\s+/g, " ")
    .slice(0, maxLength);
}

function normalizeMessage(value: unknown) {
  if (typeof value !== "string") return "";

  return value.trim().slice(0, MAX_MESSAGE_LENGTH);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildPlainTextEmail({
  name,
  email,
  subject,
  message,
  ipAddress,
  userAgent,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ipAddress: string;
  userAgent: string;
}) {
  return [
    "New message from TateByers.ca",
    "",
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    "",
    "Message:",
    message,
    "",
    "System Metadata:",
    `IP: ${ipAddress}`,
    `User Agent: ${userAgent}`,
  ].join("\n");
}

function buildHtmlEmail({
  name,
  email,
  subject,
  message,
  ipAddress,
  userAgent,
}: {
  name: string;
  email: string;
  subject: string;
  message: string;
  ipAddress: string;
  userAgent: string;
}) {
  const escapedMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `
    <div style="font-family: Arial, sans-serif; background: #050816; color: #e5e7eb; padding: 28px;">
      <div style="max-width: 680px; margin: 0 auto; border: 1px solid rgba(103, 232, 249, 0.22); border-radius: 18px; overflow: hidden; background: #0f172a;">
        <div style="padding: 22px 24px; background: linear-gradient(135deg, rgba(34,211,238,0.18), rgba(168,85,247,0.16)); border-bottom: 1px solid rgba(255,255,255,0.08);">
          <p style="margin: 0 0 8px; color: #67e8f9; font-size: 12px; font-weight: 800; letter-spacing: 0.18em; text-transform: uppercase;">
            TateByers.ca Contact System
          </p>
          <h1 style="margin: 0; color: #ffffff; font-size: 24px;">
            New message from ${escapeHtml(name)}
          </h1>
        </div>

        <div style="padding: 24px;">
          <div style="display: grid; gap: 12px; margin-bottom: 24px;">
            <p style="margin: 0;"><strong style="color: #67e8f9;">Name:</strong> ${escapeHtml(name)}</p>
            <p style="margin: 0;"><strong style="color: #67e8f9;">Email:</strong> ${escapeHtml(email)}</p>
            <p style="margin: 0;"><strong style="color: #67e8f9;">Subject:</strong> ${escapeHtml(subject)}</p>
          </div>

          <div style="padding: 18px; border: 1px solid rgba(255,255,255,0.09); border-radius: 14px; background: rgba(255,255,255,0.04); line-height: 1.65;">
            ${escapedMessage}
          </div>

          <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid rgba(255,255,255,0.08); color: #94a3b8; font-size: 12px; line-height: 1.6;">
            <p style="margin: 0;"><strong>IP:</strong> ${escapeHtml(ipAddress)}</p>
            <p style="margin: 0;"><strong>User Agent:</strong> ${escapeHtml(userAgent)}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL || DEFAULT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;

    if (!apiKey) {
      return NextResponse.json(
        {
          ok: false,
          error: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    const body = (await request.json()) as ContactRequestBody;

    const honeypot = normalizeSingleLine(body.company, 120);

    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    const name = normalizeSingleLine(body.name, MAX_NAME_LENGTH);
    const email = normalizeSingleLine(body.email, MAX_EMAIL_LENGTH);
    const subject =
      normalizeSingleLine(body.subject, MAX_SUBJECT_LENGTH) ||
      "New TateByers.ca message";
    const message = normalizeMessage(body.message);

    if (!name) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please enter your name.",
        },
        { status: 400 },
      );
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please enter a valid email address.",
        },
        { status: 400 },
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please enter a message with at least 10 characters.",
        },
        { status: 400 },
      );
    }

    const ipAddress =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";
    const userAgent = request.headers.get("user-agent") || "unknown";

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `TateByers.ca Contact: ${subject}`,
      text: buildPlainTextEmail({
        name,
        email,
        subject,
        message,
        ipAddress,
        userAgent,
      }),
      html: buildHtmlEmail({
        name,
        email,
        subject,
        message,
        ipAddress,
        userAgent,
      }),
    });

    if (error) {
      console.error("Resend contact error:", error);

      return NextResponse.json(
        {
          ok: false,
          error: "Message could not be sent right now.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      ok: true,
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return NextResponse.json(
      {
        ok: false,
        error: "Unexpected contact form error.",
      },
      { status: 500 },
    );
  }
}
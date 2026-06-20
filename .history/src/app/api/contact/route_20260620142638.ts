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

type ContactEmailData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 180;
const MAX_SUBJECT_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 5000;

const DEFAULT_SUBJECT = "New TateByers.ca message";
const DEFAULT_FROM_EMAIL = "TateByers.ca <onboarding@resend.dev>";

function jsonResponse(
  body: {
    ok: boolean;
    message: string;
    id?: string | null;
  },
  status = 200,
) {
  return NextResponse.json(body, { status });
}

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

function buildTextEmail({ name, email, subject, message }: ContactEmailData) {
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

function buildHtmlEmail({ name, email, subject, message }: ContactEmailData) {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

  return `
    <div style="margin:0;padding:0;background:#050505;color:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
      <div style="max-width:680px;margin:0 auto;padding:32px 20px;">
        <div style="border:1px solid rgba(255,91,102,0.32);border-radius:24px;background:#111111;padding:28px;box-shadow:0 20px 50px rgba(0,0,0,0.35);">
          <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#ff6b74;font-weight:800;">
            TateByers.ca Contact
          </p>

          <h1 style="margin:0 0 22px;font-size:26px;line-height:1.2;color:#ffffff;">
            New message from ${safeName}
          </h1>

          <div style="margin:0 0 18px;padding:16px;border-radius:16px;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.08);">
            <p style="margin:0 0 10px;color:#e5e7eb;"><strong>Name:</strong> ${safeName}</p>
            <p style="margin:0 0 10px;color:#e5e7eb;"><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color:#ff6b74;">${safeEmail}</a></p>
            <p style="margin:0;color:#e5e7eb;"><strong>Subject:</strong> ${safeSubject}</p>
          </div>

          <div style="margin-top:20px;border:1px solid rgba(255,255,255,0.1);border-radius:16px;background:rgba(0,0,0,0.25);padding:18px;">
            <p style="margin:0 0 10px;color:#ff6b74;font-size:12px;text-transform:uppercase;letter-spacing:0.14em;font-weight:800;">
              Message
            </p>
            <p style="margin:0;line-height:1.7;color:#e5e7eb;">${safeMessage}</p>
          </div>

          <p style="margin:22px 0 0;color:#94a3b8;font-size:12px;line-height:1.6;">
            Sent from the TateByers.ca contact form.
          </p>
        </div>
      </div>
    </div>
  `;
}

async function readPayload(request: Request) {
  try {
    return (await request.json()) as ContactPayload;
  } catch {
    return null;
  }
}

function validatePayload(payload: ContactPayload) {
  const honeypot = normalizeString(payload.website, 200);

  if (honeypot.length > 0) {
    return {
      isBot: true,
      data: null,
      error: null,
    };
  }

  const name = normalizeString(payload.name, MAX_NAME_LENGTH);
  const email = normalizeString(payload.email, MAX_EMAIL_LENGTH);
  const subject =
    normalizeString(payload.subject, MAX_SUBJECT_LENGTH) || DEFAULT_SUBJECT;
  const message = normalizeString(payload.message, MAX_MESSAGE_LENGTH);

  if (name.length < 2) {
    return {
      isBot: false,
      data: null,
      error: "Please enter your name.",
    };
  }

  if (!isValidEmail(email)) {
    return {
      isBot: false,
      data: null,
      error: "Please enter a valid email address.",
    };
  }

  if (message.length < 10) {
    return {
      isBot: false,
      data: null,
      error: "Please enter a message with at least 10 characters.",
    };
  }

  return {
    isBot: false,
    data: {
      name,
      email,
      subject,
      message,
    },
    error: null,
  };
}

export async function POST(request: Request) {
  const resendApiKey = getEnvValue("RESEND_API_KEY");
  const contactToEmail = getEnvValue("CONTACT_TO_EMAIL");
  const contactFromEmail = getEnvValue("CONTACT_FROM_EMAIL") ?? DEFAULT_FROM_EMAIL;

  if (!resendApiKey || !contactToEmail) {
    return jsonResponse(
      {
        ok: false,
        message: "Contact form is not configured yet.",
      },
      500,
    );
  }

  const payload = await readPayload(request);

  if (!payload) {
    return jsonResponse(
      {
        ok: false,
        message: "Invalid contact form request.",
      },
      400,
    );
  }

  const validation = validatePayload(payload);

  if (validation.isBot) {
    return jsonResponse({
      ok: true,
      message: "Message sent.",
    });
  }

  if (validation.error || !validation.data) {
    return jsonResponse(
      {
        ok: false,
        message: validation.error ?? "Please check your message and try again.",
      },
      400,
    );
  }

  const resend = new Resend(resendApiKey);
  const emailData = validation.data;

  try {
    const { data, error } = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      subject: `[TateByers.ca] ${emailData.subject}`,
      html: buildHtmlEmail(emailData),
      text: buildTextEmail(emailData),
      replyTo: emailData.email,
    });

    if (error) {
      console.error("Resend contact error:", error);

      return jsonResponse(
        {
          ok: false,
          message: "The message could not be sent right now.",
        },
        502,
      );
    }

    return jsonResponse({
      ok: true,
      id: data?.id ?? null,
      message: "Message sent. Tate has been notified.",
    });
  } catch (error) {
    console.error("Contact route error:", error);

    return jsonResponse(
      {
        ok: false,
        message: "Something went wrong while sending the message.",
      },
      500,
    );
  }
}
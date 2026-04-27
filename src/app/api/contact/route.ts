import nodemailer from "nodemailer";

export const runtime = "nodejs";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  organization?: string;
  role?: string;
  reason?: string;
};

function missingEnvResponse() {
  return Response.json(
    {
      ok: false,
      error: "Form delivery is not configured yet. Add SMTP credentials in your deployment environment."
    },
    { status: 500 }
  );
}

export async function POST(request: Request) {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpUser || !smtpPass) {
    return missingEnvResponse();
  }

  const payload = (await request.json()) as ContactPayload;

  const firstName = payload.firstName?.trim() ?? "";
  const lastName = payload.lastName?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const organization = payload.organization?.trim() ?? "";
  const role = payload.role?.trim() ?? "";
  const reason = payload.reason?.trim() ?? "";

  if (!firstName || !lastName || !email || !organization || !role || !reason) {
    return Response.json({ ok: false, error: "Please complete all fields before submitting." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : true,
    auth: {
      user: smtpUser,
      pass: smtpPass
    }
  });

  const toEmail = process.env.CONTACT_TO_EMAIL ?? "clearcarehq@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser;

  await transporter.sendMail({
    to: toEmail,
    from: fromEmail,
    replyTo: email,
    subject: "New ClearCare Audit demo request",
    text: [
      "New ClearCare Audit demo request",
      "",
      `First name: ${firstName}`,
      `Last name: ${lastName}`,
      `Work email: ${email}`,
      `Organization: ${organization}`,
      `Role: ${role}`,
      `Reason: ${reason}`
    ].join("\n")
  });

  return Response.json({ ok: true });
}

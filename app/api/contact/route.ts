import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Campos obrigatórios ausentes" },
        { status: 400 },
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || "587");
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO || "mmtheus69@gmail.com";
    const from = process.env.CONTACT_FROM || user;

    if (!host || !user || !pass || !to || !from) {
      return NextResponse.json(
        { message: "Configuração de e‑mail ausente" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const info = await transporter.sendMail({
      from,
      to,
      subject: `Contato do Blog: ${name}`,
      replyTo: email,
      text: message,
      html: `<div>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E‑mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      </div>`,
    });

    return NextResponse.json({
      message: "Mensagem enviada com sucesso",
      id: info.messageId,
    });
  } catch {
    return NextResponse.json(
      { message: "Erro ao enviar mensagem" },
      { status: 500 },
    );
  }
}

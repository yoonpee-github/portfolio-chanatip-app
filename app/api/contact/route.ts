import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, social } = await req.json();
    const formLink = process.env.GOOGLE_FORM_LINK;
    const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
    const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
    const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
    const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;
    const formData = new URLSearchParams();
    formData.append(fieldIdName || "", name);
    formData.append(fieldIdEmail || "", email);
    formData.append(fieldIdMessage || "", message);
    formData.append(fieldIdSocial || "", social || "");

    const res = await fetch(`${formLink}/formResponse`, {
      method: "POST",
      body: formData.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `📩 New Contact from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Social: ${social || "N/A"}

Message:
${message}
      `,
      html: `
        <h2>📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Social:</strong> ${social || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    // console.error("❌ Error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

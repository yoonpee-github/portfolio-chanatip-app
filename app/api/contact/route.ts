// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const formLink = process.env.GOOGLE_FORM_LINK;
//   if (!formLink) {
//     return new NextResponse("Please configure the env variables", {
//       status: 500,
//     });
//   }

//   // configure this according to your google form
//   const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
//   const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
//   const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
//   const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

//   try {
//     const body = await req.json();
//     const { name, message, social, email } = body;
//     console.log("Received body:", body);
//     console.log("name:", name);
//     console.log("email:", email);
//     console.log("message:", message);
//     console.log("social:", social);

//     const res = await fetch(
//       `${formLink}/formResponse?${fieldIdName}=${encodeURIComponent(name)}&${fieldIdEmail}=${encodeURIComponent(email)}&${fieldIdMessage}=${encodeURIComponent(message)}&${fieldIdSocial}=${encodeURIComponent(social || "")}`,
//       {
//         method: "POST", // ต้อง POST
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded", // Google Form ต้องการ urlencoded
//         },
//       }
//     );

//     return NextResponse.json("Success!");
//   } catch (error) {
//     console.log(error);
//     return new NextResponse("Internal error", { status: 500 });
//   }
// }

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

    // ✅ สร้าง transporter ด้วย Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Gmail ของคุณ
        pass: process.env.GMAIL_PASS, // App password ของ Gmail
      },
    });

    // ✅ กำหนดข้อมูลอีเมล
    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      replyTo: email, // เวลา reply จะไปหาคนที่กรอกฟอร์ม
      to: process.env.GMAIL_USER, // ส่งเข้ากล่อง Gmail ของคุณเอง
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

    // ✅ ส่งอีเมล
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (err) {
    console.error("❌ Error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

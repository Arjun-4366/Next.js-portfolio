import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactInputs {
  firstName: string;
  email: string;
  text: string;
}

export async function POST(request: Request) {
  try {
    const { firstName, email, text }: ContactInputs = await request.json();

    const transporter = nodemailer.createTransport({
      service: "SMPT",
      host: process.env.HOST,
      secure: false,
      auth: {
        user: process.env.SMPT_MAIL,
        pass: process.env.SMPT_PASSWORD,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `Mail from ${firstName}`,
      html: `${text}`,
    };
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.log(error.message);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

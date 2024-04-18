import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import axios from "axios";

interface PostData {
  gRecaptchaToken: string;
  name: string;
  email: string;
  message: string;
}

const verifyReCaptcha = async (gRecaptchaToken: string) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  var url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${gRecaptchaToken}`;
  return await axios.post(url);
};

export async function POST(req: Request, res: Response) {
  try {
  const postData = await req.json();
  const { gRecaptchaToken, name, email, message } = postData as PostData;

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve("Email sent");
          } else {
            reject(err.message);
          }
        });
      });

    const response = await verifyReCaptcha(gRecaptchaToken);

    if (response && response.data.success && response.data.score > 0.5) {
      await sendMailPromise();
      return NextResponse.json({
        success: true,
        name,
        score: response.data?.score,
        message: "Email sent",
      });
    } else {
      return NextResponse.json({ success: false, score: response.data?.score });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}

import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import axios from "axios";

export async function POST(request: Request, response: Response) {

    const { email, name, message, gRecaptchaToken } = await request.json();
    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    console.log(
        "gRecaptchaToken,firstName,lastName,email,hearFromSponsors:",
        gRecaptchaToken?.slice(0, 10) + "...",
        name,
        email,
        message
      );

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.MY_PASSWORD
        }
    });

    const mailOptions: Mail.Options = {
        from: process.env.MY_EMAIL,
        to: process.env.MY_EMAIL,
        subject: `Message from ${name} (${email})`,
        text: message,
    };

    let res: any;
    const formData = `secret=${secretKey}&response=${gRecaptchaToken}`;

    try {
      res = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        formData,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
    } catch (e) {
      console.log("recaptcha error:", e);
    }

    const sendMailPromise = () => 
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if(!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message)
                }
            })
        });

    if (res && res.data?.success && res.data?.score > 0.5) {
        // Save data to the database from here
        console.log("res.data?.score:", res.data?.score);
    
        try {
        await sendMailPromise();
        return NextResponse.json({ success: true, name, score: res.data?.score, message: 'Email sent' })
        } catch (error) {
            return NextResponse.json({success: false, name, score: res.data?.score, error }, { status: 500})
        }
      } else {
        console.log("fail: res.data?.score:", res.data?.score);
        return NextResponse.json({ success: false, name, score: res.data?.score });
      }
}
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // true for 465, false for 587
  auth: {
    user: process.env.Nodemailerusername,
    pass: process.env.NodemailerPassword,
  },
});

// Send OTP Mail
export const newUserOtp = async (email, name, otp) => {
  try {
    const info = await transporter.sendMail({
      from: `"OTP Service" <${process.env.NODEMAILER_USERNAME}>`,
      to: email,
      subject: "Your OTP Code",
      text: `Hello ${name}, your OTP is ${otp}`,
      html: `
        <div style="max-width:600px;margin:auto;font-family:Arial,sans-serif;border:1px solid #ddd;padding:20px;border-radius:8px;">
          <h2 style="color:#333;">Hello ${name} 👋</h2>
          <p style="font-size:16px;color:#555;">
            Your One Time Password (OTP) is:
          </p>

          <div style="font-size:24px;font-weight:bold;color:#0d6efd;text-align:center;margin:20px 0;">
            ${otp}
          </div>

          <p style="font-size:14px;color:#777;">
            This OTP is valid for 5 minutes. Please do not share it with anyone.
          </p>

          <hr />

          <p style="font-size:12px;color:#999;text-align:center;">
            © 2026 OTP Service. All rights reserved.
          </p>
        </div>
      `,
    });

    console.log("Email sent successfully:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error.message);
  }
};

import NodeMailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = NodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.Nodemailerusername,
        pass: process.env.NodemailerPassword,
    },
});

export const newUserOtp = async (email, name, otp) => {
    try {
        const info = await transporter.sendMail({
            from: "Maddison Foo Koch",
            to: email,
            subject: "Verify Your Account - OTP Inside",
            html: `
            <div style="width:100%; background:#fff3cd; padding:30px 0; font-family:Arial, sans-serif;">
                <div style="max-width:450px; background:#ffffff; margin:auto; padding:25px; border-radius:8px; border:2px solid #28a745;">
                    
                    <h2 style="color:#28a745; margin-bottom:10px; font-size:22px;">
                        Welcome, ${name}! 🎉
                    </h2>

                    <p style="color:#333; font-size:15px; line-height:1.5; margin-bottom:18px;">
                        Thanks for creating an account with us.<br>
                        Please use the OTP below to verify your email address:
                    </p>

                    <div style="text-align:center; margin:25px 0; background:#fff3cd; padding:15px; border-radius:6px;">
                        <p style="color:#856404; font-size:13px; margin-bottom:8px;">
                            Your One-Time Password (OTP)
                        </p>
                        <span style="
                            font-size:34px;
                            font-weight:bold;
                            letter-spacing:4px;
                            color:#d39e00;
                        ">
                            ${otp}
                        </span>
                    </div>

                    <p style="color:#dc3545; font-size:14px; line-height:1.5; margin-bottom:20px;">
                        ⏳ <strong>OTP expires in 5 minutes.</strong><br>
                        If you didn’t request this, please ignore this email.
                    </p>

                    <p style="text-align:center; color:#28a745; font-size:12px; margin-top:25px;">
                        © ${new Date().getFullYear()} Your Company. All rights reserved.
                    </p>

                </div>
            </div>
            `
        });

        console.log("Message sent:", info.messageId);
    } catch (err) {
        console.log(err.message);
    }
};

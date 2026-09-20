import nodemailer from "nodemailer";
import dns from "node:dns";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT, 10),
  family: 4,
  secure: parseInt(process.env.EMAIL_PORT, 10) === 465,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendWelcomeEmail = async (email) => {
  const mailOptions = {
    from: `"Gina's Luxury" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "Welcome to Gina's Luxury Newsletter!",
    html: `<div style='font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;'><h1 style='color: #b8860b; text-align: center;'>Welcome to Gina's Luxury</h1><p style='font-size: 16px; line-height: 1.6;'>Dear Valued Subscriber,</p><p style='font-size: 16px; line-height: 1.6;'>Thank you for subscribing to the Gina's Luxury newsletter! We're thrilled to have you join our exclusive community.</p><p style='font-size: 16px; line-height: 1.6;'>You'll be the first to know about:</p><ul style='font-size: 16px; line-height: 1.8;'><li>New arrivals and exclusive collections</li><li>Special offers and private sales</li><li>Style tips and fashion inspiration</li></ul><p style='font-size: 16px; line-height: 1.6;'>Stay tuned for luxurious updates delivered straight to your inbox.</p><p style='font-size: 16px; line-height: 1.6; margin-top: 30px;'>With love,<br/><strong>The Gina's Luxury Team</strong></p><hr style='border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;' /><p style='font-size: 12px; color: #999; text-align: center;'>If you did not subscribe to this newsletter, please ignore this email.</p></div>`,
  };

  await transporter.sendMail(mailOptions);
};

export default transporter;
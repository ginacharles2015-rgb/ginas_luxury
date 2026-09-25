const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export const sendWelcomeEmail = async (email) => {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    throw new Error("BREVO_API_KEY environment variable is not set");
  }

  const senderEmail = process.env.BREVO_SENDER_EMAIL || "gina.charles2015@gmail.com";
  const senderName = "Gina's Luxury";

  const payload = {
    sender: { name: senderName, email: senderEmail },
    to: [{ email }],
    subject: "Welcome to Gina's Luxury Newsletter!",
    htmlContent: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <h1 style="color: #b8860b; text-align: center;">
          Welcome to Gina's Luxury
        </h1>

        <p style="font-size: 16px; line-height: 1.6;">
          Dear Valued Subscriber,
        </p>

        <p style="font-size: 16px; line-height: 1.6;">
          Thank you for subscribing to the Gina's Luxury newsletter!
          We're thrilled to have you join our exclusive community.
        </p>

        <p style="font-size: 16px; line-height: 1.6;">
          You'll be the first to know about:
        </p>

        <ul style="font-size: 16px; line-height: 1.8;">
          <li>New arrivals and exclusive collections</li>
          <li>Special offers and private sales</li>
          <li>Style tips and fashion inspiration</li>
        </ul>

        <p style="font-size: 16px; line-height: 1.6;">
          Stay tuned for luxurious updates delivered straight to your inbox.
        </p>

        <p style="font-size: 16px; line-height: 1.6; margin-top: 30px;">
          With love,<br />
          <strong>The Gina's Luxury Team</strong>
        </p>

        <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 30px 0;" />

        <p style="font-size: 12px; color: #999; text-align: center;">
          If you did not subscribe to this newsletter, please ignore this email.
        </p>
      </div>
    `,
  };

  const response = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      "accept": "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  console.log("Brevo response status:", response.status);
  console.log("Brevo response body:", JSON.stringify(data));

  if (!response.ok) {
    const errorMessage = data.message || `Brevo API error: ${response.status}`;
    throw new Error(errorMessage);
  }

  return data;
};
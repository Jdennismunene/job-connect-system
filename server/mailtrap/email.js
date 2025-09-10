const { MailtrapClient } = require("mailtrap");
const { client, sender } = require("./mailtrap.config"); // make sure you export client from mailtrap.config
const { VERIFICATION_EMAIL_TEMPLATE } = require("./emailTemplate");
const sendVerificationEmail = async (email, verificationToken) => {
  if (!email) {
    throw new Error("Recipient email is missing!");
  }

  const recipient = [{ email }];

  try {
    const response = await client.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verificationToken
      ),
      category: "Email Verification",
    });

    console.log("✅ Email Sent Successfully", response);
    return response;
  } catch (error) {
    console.error("❌ Error sending verification email:", error.message);
    throw new Error(`Error sending verification email: ${error.message}`);
  }
};

module.exports = { sendVerificationEmail };

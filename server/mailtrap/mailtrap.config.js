const { MailtrapClient } = require("mailtrap");
const dotenv = require("dotenv");
dotenv.config();

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

const client = new MailtrapClient({
  token: TOKEN,
  endpoint: ENDPOINT,
});

const sender = {
  email: "hello@demomailtrap.co",
  name: "Chebby",
};

module.exports = { client, sender };

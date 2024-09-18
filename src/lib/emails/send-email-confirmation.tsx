import { Resend } from "resend";
import ConfirmationEmail from "./confirmation-email";

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export async function sendEmailConfirmation() {
  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["oldenburgtomas@hotmail.com"],
    subject: "Hello World",
    react: <ConfirmationEmail />,
  });
  if (error) {
    console.error(error);
  }
  console.log(data);
}

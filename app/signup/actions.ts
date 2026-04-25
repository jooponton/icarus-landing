"use server";

import { headers } from "next/headers";
import { render } from "@react-email/render";
import SignupConfirmationEmail from "@/emails/signup-confirmation";
import { createAdminClient } from "@/lib/supabase/admin";
import { getResend, getFromAddress } from "@/lib/resend";

interface SignUpInput {
  fullName: string;
  email: string;
  password: string;
}

export async function signUpWithConfirmation(
  input: SignUpInput,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const fullName = input.fullName.trim();
  const email = input.email.trim().toLowerCase();
  const password = input.password;

  if (!fullName) return { ok: false, error: "Enter your name." };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Enter a valid email address." };
  }
  if (password.length < 12) {
    return { ok: false, error: "Password must be at least 12 characters." };
  }

  const h = await headers();
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (h.get("origin") || `https://${h.get("host")}`);
  const redirectTo = `${siteUrl}/auth/callback?next=/pilot`;

  try {
    const admin = createAdminClient();

    const { data, error } = await admin.auth.admin.generateLink({
      type: "signup",
      email,
      password,
      options: {
        data: { full_name: fullName },
        redirectTo,
      },
    });

    if (error) {
      const msg = error.message.toLowerCase();
      if (msg.includes("already registered") || msg.includes("already exists")) {
        return {
          ok: false,
          error: "An account with that email already exists. Try signing in.",
        };
      }
      console.error("[signup] generateLink error", error);
      return { ok: false, error: "Couldn't create account. Try again." };
    }

    const actionLink = data?.properties?.action_link;
    if (!actionLink) {
      console.error("[signup] missing action_link", data);
      return { ok: false, error: "Couldn't create account. Try again." };
    }

    const html = await render(
      SignupConfirmationEmail({
        confirmLink: actionLink,
        fullName,
        baseUrl: siteUrl,
      }),
    );

    const resend = getResend();
    const sendResult = await resend.emails.send({
      from: getFromAddress(),
      to: email,
      subject: "Confirm your Atria account",
      html,
    });

    if (sendResult.error) {
      console.error("[signup] resend error", sendResult.error);
      return { ok: false, error: "Couldn't send confirmation email. Try again." };
    }

    return { ok: true };
  } catch (e) {
    console.error("[signup] unexpected", e);
    return { ok: false, error: "Couldn't create account. Try again." };
  }
}

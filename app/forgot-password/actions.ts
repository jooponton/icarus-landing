"use server";

import { headers } from "next/headers";
import { render } from "@react-email/render";
import PasswordResetEmail from "@/emails/password-reset";
import { createAdminClient } from "@/lib/supabase/admin";
import { getResend, getFromAddress } from "@/lib/resend";

export async function sendPasswordResetEmail(
  email: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const trimmed = email.trim().toLowerCase();
  if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
    return { ok: false, error: "Enter a valid email address." };
  }

  const h = await headers();
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    (h.get("origin") || `https://${h.get("host")}`);
  const redirectTo = `${siteUrl}/auth/callback?next=/reset-password`;

  try {
    const admin = createAdminClient();
    const { data, error } = await admin.auth.admin.generateLink({
      type: "recovery",
      email: trimmed,
      options: { redirectTo },
    });

    // Email enumeration protection: if the user doesn't exist, we silently
    // succeed. Only surface errors to the caller for unexpected failures.
    if (error) {
      if (
        error.message.toLowerCase().includes("user not found") ||
        error.status === 404
      ) {
        return { ok: true };
      }
      console.error("[forgot-password] generateLink error", error);
      return { ok: false, error: "Couldn't send reset email. Try again." };
    }

    const actionLink = data?.properties?.action_link;
    if (!actionLink) {
      console.error("[forgot-password] missing action_link", data);
      return { ok: false, error: "Couldn't send reset email. Try again." };
    }

    const html = await render(
      PasswordResetEmail({
        resetLink: actionLink,
        requesterEmail: trimmed,
        baseUrl: siteUrl,
      }),
    );

    const resend = getResend();
    const sendResult = await resend.emails.send({
      from: getFromAddress(),
      to: trimmed,
      subject: "Reset your Atria password",
      html,
    });

    if (sendResult.error) {
      console.error("[forgot-password] resend error", sendResult.error);
      return { ok: false, error: "Couldn't send reset email. Try again." };
    }

    return { ok: true };
  } catch (e) {
    console.error("[forgot-password] unexpected", e);
    return { ok: false, error: "Couldn't send reset email. Try again." };
  }
}

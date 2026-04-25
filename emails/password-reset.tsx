import { ActionLink, EmailLayout, Text, heading, paragraph } from "./_components";

interface PasswordResetEmailProps {
  resetLink: string;
  requesterEmail: string;
  baseUrl: string;
}

export default function PasswordResetEmail({
  resetLink,
  requesterEmail,
  baseUrl,
}: PasswordResetEmailProps) {
  return (
    <EmailLayout preview="Reset your Atria password" baseUrl={baseUrl}>
      <Text style={heading}>Reset your password</Text>

      <Text style={paragraph}>
        We got a request to reset the password for{" "}
        <strong>{requesterEmail}</strong>. Click the button below to set a new
        one. The link expires in 1 hour.
      </Text>

      <ActionLink href={resetLink} label="Reset password" />

      <Text style={footer}>
        If you didn&apos;t request this, you can safely ignore this email. Your
        password won&apos;t change until you click the link above and set a new
        one.
      </Text>
    </EmailLayout>
  );
}

const footer: React.CSSProperties = {
  color: "rgba(255,255,255,0.4)",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "0 0 8px 0",
};

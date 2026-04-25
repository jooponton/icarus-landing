import { ActionLink, EmailLayout, Text, heading, paragraph } from "./_components";

interface SignupConfirmationEmailProps {
  confirmLink: string;
  fullName: string;
  baseUrl: string;
}

export default function SignupConfirmationEmail({
  confirmLink,
  fullName,
  baseUrl,
}: SignupConfirmationEmailProps) {
  const firstName = fullName.trim().split(/\s+/)[0] || "there";

  return (
    <EmailLayout preview="Confirm your Atria account" baseUrl={baseUrl}>
      <Text style={heading}>Welcome to Atria, {firstName}.</Text>

      <Text style={paragraph}>
        One last step. Confirm your email to activate your account and get into
        the pilot.
      </Text>

      <ActionLink href={confirmLink} label="Confirm email" />

      <Text style={footer}>
        If you didn&apos;t create this account, you can safely ignore this
        email.
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

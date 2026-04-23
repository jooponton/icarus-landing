import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

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
    <Html>
      <Head />
      <Preview>Reset your Atria password</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={logoSection}>
            <table cellPadding={0} cellSpacing={0} role="presentation">
              <tbody>
                <tr>
                  <td style={{ paddingRight: "10px", verticalAlign: "middle" }}>
                    <Img
                      src={`${baseUrl}/atria-arc.png`}
                      alt=""
                      width="26"
                      height="26"
                      style={{ display: "block" }}
                    />
                  </td>
                  <td style={{ verticalAlign: "middle" }}>
                    <span style={wordmark}>atria</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </Section>

          <Text style={heading}>Reset your password</Text>

          <Text style={paragraph}>
            We got a request to reset the password for{" "}
            <strong>{requesterEmail}</strong>. Click the button below to set a
            new one. The link expires in 1 hour.
          </Text>

          <Section style={{ textAlign: "center", margin: "32px 0" }}>
            <Button style={button} href={resetLink}>
              Reset password
            </Button>
          </Section>

          <Text style={paragraphSmall}>
            Or paste this URL into your browser:
          </Text>
          <Text style={linkBox}>
            <Link href={resetLink} style={linkText}>
              {resetLink}
            </Link>
          </Text>

          <Hr style={hr} />

          <Text style={footer}>
            If you didn&apos;t request this, you can safely ignore this email.
            Your password won&apos;t change until you click the link above and
            set a new one.
          </Text>

          <Text style={footer}>
            Atria · From drone to deal.
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body: React.CSSProperties = {
  backgroundColor: "#0a0a0a",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: 0,
  padding: "40px 0",
};

const container: React.CSSProperties = {
  backgroundColor: "#111111",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  margin: "0 auto",
  maxWidth: "560px",
  padding: "40px",
};

const logoSection: React.CSSProperties = { marginBottom: "32px" };

const wordmark: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 700,
  letterSpacing: "-0.05em",
  lineHeight: "26px",
};

const heading: React.CSSProperties = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "32px",
  margin: "0 0 16px 0",
};

const paragraph: React.CSSProperties = {
  color: "rgba(255,255,255,0.7)",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
};

const paragraphSmall: React.CSSProperties = {
  color: "rgba(255,255,255,0.4)",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "8px 0",
};

const button: React.CSSProperties = {
  backgroundColor: "#f59e0b",
  borderRadius: "10px",
  color: "#0a0a0a",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: 600,
  padding: "14px 28px",
  textDecoration: "none",
};

const linkBox: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  borderRadius: "8px",
  padding: "12px",
  margin: "8px 0 24px",
  wordBreak: "break-all",
  fontSize: "12px",
};

const linkText: React.CSSProperties = {
  color: "#f59e0b",
  textDecoration: "none",
};

const hr: React.CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  margin: "32px 0 24px",
};

const footer: React.CSSProperties = {
  color: "rgba(255,255,255,0.4)",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0 0 8px 0",
};

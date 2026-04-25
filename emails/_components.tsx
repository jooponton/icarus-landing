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
import type { CSSProperties, ReactNode } from "react";

export { Button, Link, Section, Text };

interface EmailLayoutProps {
  preview: string;
  baseUrl: string;
  children: ReactNode;
}

export function EmailLayout({
  preview,
  baseUrl,
  children,
}: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={bodyStyle}>
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

          {children}

          <Hr style={hr} />

          <Text style={footer}>Atria · From drone to deal.</Text>
        </Container>
      </Body>
    </Html>
  );
}

interface ActionLinkProps {
  href: string;
  label: string;
  fallbackIntro?: string;
}

export function ActionLink({
  href,
  label,
  fallbackIntro = "Or paste this URL into your browser:",
}: ActionLinkProps) {
  return (
    <>
      <Section style={{ textAlign: "center", margin: "32px 0" }}>
        <Button style={button} href={href}>
          {label}
        </Button>
      </Section>

      <Text style={paragraphSmall}>{fallbackIntro}</Text>
      <Text style={linkBox}>
        <Link href={href} style={linkText}>
          {href}
        </Link>
      </Text>
    </>
  );
}

export const heading: CSSProperties = {
  color: "#ffffff",
  fontSize: "24px",
  fontWeight: 600,
  lineHeight: "32px",
  margin: "0 0 16px 0",
};

export const paragraph: CSSProperties = {
  color: "rgba(255,255,255,0.7)",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 16px 0",
};

const bodyStyle: CSSProperties = {
  backgroundColor: "#0a0a0a",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: 0,
  padding: "40px 0",
};

const container: CSSProperties = {
  backgroundColor: "#111111",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "16px",
  margin: "0 auto",
  maxWidth: "560px",
  padding: "40px",
};

const logoSection: CSSProperties = { marginBottom: "32px" };

const wordmark: CSSProperties = {
  color: "#ffffff",
  fontSize: "22px",
  fontWeight: 700,
  letterSpacing: "-0.05em",
  lineHeight: "26px",
};

const paragraphSmall: CSSProperties = {
  color: "rgba(255,255,255,0.4)",
  fontSize: "13px",
  lineHeight: "20px",
  margin: "8px 0",
};

const button: CSSProperties = {
  backgroundColor: "#f59e0b",
  borderRadius: "10px",
  color: "#0a0a0a",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: 600,
  padding: "14px 28px",
  textDecoration: "none",
};

const linkBox: CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.04)",
  borderRadius: "8px",
  padding: "12px",
  margin: "8px 0 24px",
  wordBreak: "break-all",
  fontSize: "12px",
};

const linkText: CSSProperties = {
  color: "#f59e0b",
  textDecoration: "none",
};

const hr: CSSProperties = {
  border: "none",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  margin: "32px 0 24px",
};

const footer: CSSProperties = {
  color: "rgba(255,255,255,0.4)",
  fontSize: "12px",
  lineHeight: "18px",
  margin: "0 0 8px 0",
};

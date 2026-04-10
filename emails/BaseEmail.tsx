import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface BaseEmailProps {
  previewText: string;
  heading: string;
  children: React.ReactNode;
}

export const BaseEmail = ({
  previewText,
  heading,
  children,
}: BaseEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Img
              src="https://liftfarms.sl/logo.png" // Replace with actual logo URL
              width="150"
              height="auto"
              alt="LiFT Farms"
            />
          </Section>
          <Heading style={h1}>{heading}</Heading>
          <Section style={content}>
            {children}
          </Section>
          <Hr style={hr} />
          <Section style={footer}>
            <Text style={footerText}>
              © {new Date().getFullYear()} LiFT Farms. All rights reserved.
            </Text>
            <Text style={footerText}>
              26 Magburaka Road, Makeni, Northern Province, Sierra Leone.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  marginBottom: "64px",
  borderRadius: "8px",
  border: "1px solid #e6ebf1",
};

const header = {
  marginBottom: "32px",
  textAlign: "center" as const,
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "1.3",
  margin: "0 0 20px",
  textAlign: "center" as const,
};

const content = {
  color: "#4a4a4a",
  fontSize: "16px",
  lineHeight: "24px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "40px 0 20px",
};

const footer = {
  textAlign: "center" as const,
};

const footerText = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "4px 0",
};

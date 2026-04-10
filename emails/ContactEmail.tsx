import { BaseEmail } from "./BaseEmail";
import { Section, Text } from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const ContactEmail = ({
  name,
  email,
  subject,
  message,
}: ContactEmailProps) => {
  return (
    <BaseEmail
      previewText={`New General Inquiry: ${subject}`}
      heading="New General Inquiry"
    >
      <Section>
        <Text style={label}>From:</Text>
        <Text style={value}>{name} ({email})</Text>
      </Section>
      <Section style={section}>
        <Text style={label}>Subject:</Text>
        <Text style={value}>{subject}</Text>
      </Section>
      <Section style={section}>
        <Text style={label}>Message:</Text>
        <Text style={messageText}>{message}</Text>
      </Section>
    </BaseEmail>
  );
};

const section = {
  marginTop: "16px",
};

const label = {
  fontSize: "12px",
  fontWeight: "700",
  textTransform: "uppercase" as const,
  color: "#8898aa",
  margin: "0",
};

const value = {
  fontSize: "16px",
  fontWeight: "500",
  margin: "4px 0 0",
};

const messageText = {
  fontSize: "16px",
  lineHeight: "24px",
  margin: "4px 0 0",
  whiteSpace: "pre-wrap" as const,
};

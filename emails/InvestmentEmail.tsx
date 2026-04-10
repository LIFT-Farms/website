import { BaseEmail } from "./BaseEmail";
import { Section, Text } from "@react-email/components";

interface InvestmentEmailProps {
  fullname: string;
  institution: string;
  tier: string;
  message: string;
}

export const InvestmentEmail = ({
  fullname,
  institution,
  tier,
  message,
}: InvestmentEmailProps) => {
  return (
    <BaseEmail
      previewText={`New Investment Enquiry from ${institution}`}
      heading="Investor Relations Enquiry"
    >
      <Section>
        <Text style={label}>Investor Name:</Text>
        <Text style={value}>{fullname}</Text>
      </Section>
      <Section style={section}>
        <Text style={label}>Institution:</Text>
        <Text style={value}>{institution}</Text>
      </Section>
      <Section style={section}>
        <Text style={label}>Investment Tier:</Text>
        <Text style={value}>{tier}</Text>
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

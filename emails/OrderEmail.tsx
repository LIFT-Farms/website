import { BaseEmail } from "./BaseEmail";
import { Section, Text } from "@react-email/components";

interface OrderEmailProps {
  name: string;
  email: string;
  product?: string;
  quantity?: string;
  message: string;
}

export const OrderEmail = ({
  name,
  email,
  product,
  quantity,
  message,
}: OrderEmailProps) => {
  return (
    <BaseEmail
      previewText={`New Order Request: ${product || "Bulk Inquiry"}`}
      heading="New Product Order Request"
    >
      <Section>
        <Text style={label}>Customer Name:</Text>
        <Text style={value}>{name} ({email})</Text>
      </Section>
      {product && (
        <Section style={section}>
          <Text style={label}>Product:</Text>
          <Text style={value}>{product}</Text>
        </Section>
      )}
      {quantity && (
        <Section style={section}>
          <Text style={label}>Quantity/Scale:</Text>
          <Text style={value}>{quantity}</Text>
        </Section>
      )}
      <Section style={section}>
        <Text style={label}>Message/Requirements:</Text>
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

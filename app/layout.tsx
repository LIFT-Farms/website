import type { Metadata } from "next";
import "@fontsource-variable/geist";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "LiFT Farms | Sustainable Innovation, From Soil to Soul",
  description:
    "At Lift Farms (LiFT), we believe agriculture is the bedrock of societal transformation. We integrate modern sustainable techniques with deep community engagement.",
  keywords:
    "sustainable agriculture, farming, Sierra Leone, organic produce, community empowerment, agritech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased">
        <Toaster position="top-right" richColors />
        {children}
      </body>
    </html>
  );
}

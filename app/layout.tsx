import type { Metadata } from "next";
import "@fontsource-variable/geist";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"

const siteUrl = "https://farm.liftgroup.online";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "LiFT Farms | Sustainable Innovation, From Soil to Soul",
  description:
    "At Lift Farms (LiFT), we believe agriculture is the bedrock of societal transformation. We integrate modern sustainable techniques with deep community engagement.",
  keywords:
    "sustainable agriculture, farming, Sierra Leone, organic produce, community empowerment, agritech",
  alternates: {
    canonical: "https://farm.liftgroup.online",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "LiFT Farms | Sustainable Innovation, From Soil to Soul",
    description:
      "We integrate modern sustainable techniques with deep community engagement to transform agriculture in Sierra Leone.",
    url: siteUrl,
    siteName: "LiFT Farms",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LiFT Farms — Sustainable Innovation, From Soil to Soul",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LiFT Farms | Sustainable Innovation, From Soil to Soul",
    description:
      "We integrate modern sustainable techniques with deep community engagement to transform agriculture in Sierra Leone.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <meta name="google-site-verification" content="s1Qr5giCbOziB5fcCBJmUaW8vkZV5UE8TU38Snqav-M" />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Toaster position="top-right" richColors />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

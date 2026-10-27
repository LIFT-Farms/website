import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next"
import { SITE_NAME, SITE_URL } from "@/lib/seo";

const homeTitle = "LiFT Farms | Sustainable Innovation, From Soil to Soul";
const homeDescription =
  "At Lift Farms (LiFT), we believe agriculture is the bedrock of societal transformation. We integrate modern sustainable techniques with deep community engagement in Sierra Leone.";

// Share images come from app/opengraph-image.jpg and app/twitter-image.jpg
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: homeTitle,
    template: `%s | ${SITE_NAME}`,
  },
  description: homeDescription,
  keywords: [
    "sustainable agriculture",
    "farming",
    "Sierra Leone",
    "organic produce",
    "community empowerment",
    "agritech",
  ],
  // Every other route overrides this with its own canonical
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: { url: "/favicon.png", type: "image/png" },
  },
  verification: {
    google: "s1Qr5giCbOziB5fcCBJmUaW8vkZV5UE8TU38Snqav-M",
  },
  openGraph: {
    title: homeTitle,
    description: homeDescription,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="min-h-full flex flex-col antialiased">
        <Toaster position="top-right" richColors />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

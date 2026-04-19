import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zonkalicious | Indulge in Joyful Fusions",
  description:
    "Gourmet artisanal mushroom-infused chocolates crafted in Denver, Colorado. Explore the Wonderland Series and Zonkafé Barista Series.",
  keywords: [
    "Zonkalicious",
    "artisanal chocolate",
    "mushroom chocolate",
    "Denver Colorado",
    "gourmet chocolate",
    "Wonderland Series",
    "Zonkafé",
  ],
  openGraph: {
    title: "Zonkalicious | Indulge in Joyful Fusions",
    description:
      "Gourmet artisanal mushroom-infused chocolates crafted in Denver, Colorado.",
    type: "website",
    url: "https://zonkacatering.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="overflow-x-hidden">{children}</body>
    </html>
  );
}

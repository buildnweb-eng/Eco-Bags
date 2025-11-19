import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Orders - Personalized Eco-friendly Paper Bags",
  description: "Order custom printed paper bags with your brand logo. Choose from various sizes, colors, handles, and finishes. Minimum order 500 bags. Get a quote today!",
  keywords: ["custom paper bags", "personalized paper bags", "branded paper bags", "custom printed bags", "bulk paper bags order", "wholesale paper bags"],
  openGraph: {
    title: "Custom Orders - EcoBagsFactory",
    description: "Create personalized eco-friendly paper bags for your business. Custom printing, sizes, and finishes available.",
    images: ["/varieties/1.png"],
  },
};

export default function CustomOrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch with EcoBagsFactory",
  description: "Contact EcoBagsFactory for eco-friendly paper bags in Hyderabad. Call +91 9949826222 or email eco4bags@gmail.com. Visit us at Kukatpally, Hyderabad. Monday-Saturday: 9AM-7PM.",
  keywords: ["contact EcoBagsFactory", "paper bags supplier Hyderabad", "eco-friendly bags contact", "paper bags manufacturer contact"],
  openGraph: {
    title: "Contact EcoBagsFactory - Paper Bags Manufacturer",
    description: "Get in touch with us for sustainable packaging solutions. Located in Hyderabad.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


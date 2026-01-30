import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact EcoBagsFactory Hyderabad - Paperbags Manufacturer India | Get Quote",
  description: "Contact EcoBagsFactory - Leading paperbags manufacturer in India. Call +91 9949826222 for custom paper bags manufacturing, wholesale orders. Visit us at Kukatpally, Hyderabad. Best paperbags manufacturer contact for bulk orders.",
  keywords: [
    "contact EcoBagsFactory",
    "paperbags manufacturer contact",
    "paperbags manufacturer Hyderabad contact",
    "paper bags manufacturer India contact",
    "paper bags supplier Hyderabad",
    "eco-friendly bags contact",
    "custom bags manufacturer contact",
    "wholesale paperbags manufacturer"
  ],
  openGraph: {
    title: "Contact EcoBagsFactory - Paperbags Manufacturer Hyderabad",
    description: "Get in touch with India's leading paperbags manufacturer. Located in Kukatpally, Hyderabad.",
    images: ["/hero-bags.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}


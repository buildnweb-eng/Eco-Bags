import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Paper Bags Order - Paperbags Manufacturer India | EcoBagsFactory",
  description: "Order custom paper bags from India's leading paperbags manufacturer. EcoBagsFactory offers custom paperbags manufacturing, printed bags, wholesale production. Get personalized eco-friendly bags from trusted paperbags manufacturer in Hyderabad.",
  keywords: [
    "custom paper bags order",
    "custom paperbags manufacturer",
    "paperbags manufacturer India",
    "paperbags manufacturer Hyderabad",
    "printed paperbags manufacturer",
    "personalized paper bags",
    "custom eco-friendly bags",
    "wholesale paperbags order",
    "bulk paper bags manufacturer",
    "branded paper bags manufacturer"
  ],
  openGraph: {
    title: "Custom Paper Bags - Paperbags Manufacturer India | EcoBagsFactory",
    description: "Order custom paper bags from India's leading paperbags manufacturer. Custom printing, wholesale orders, bulk production.",
    images: ["/hero-bags.jpg"],
  },
};

export default function CustomOrdersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

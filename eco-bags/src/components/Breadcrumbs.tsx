"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

const pathNameMap: Record<string, string> = {
  "": "Home",
  "about": "About Us",
  "products": "Products",
  "custom-orders": "Custom Orders",
  "gallery": "Gallery",
  "contact": "Contact",
  "faq": "FAQ",
  "eco-bags-hyderabad": "Eco Bags Hyderabad",
  "paper-bags-kukatpally": "Paper Bags Kukatpally",
  "eco-bags-secunderabad": "Eco Bags Secunderabad",
  "paper-bags-banjara-hills": "Paper Bags Banjara Hills",
  "eco-bags-madhapur": "Eco Bags Madhapur",
  "paper-bags-gachibowli": "Paper Bags Gachibowli",
  "eco-bags-jubilee-hills": "Eco Bags Jubilee Hills",
  "paper-bags-kondapur": "Paper Bags Kondapur",
  "eco-bags-ameerpet": "Eco Bags Ameerpet",
  "kraft-paper-bags": "Kraft Paper Bags",
  "custom-printed-bags": "Custom Printed Bags",
  "white-paper-bags": "White Paper Bags",
  "shopping-bags-wholesale": "Shopping Bags Wholesale",
  "gift-bags-hyderabad": "Gift Bags Hyderabad",
  "blog": "Blog",
  "benefits-eco-friendly-paper-bags-hyderabad-businesses": "Benefits of Eco-Friendly Paper Bags",
  "choose-right-paper-bag-brand": "Choosing the Right Paper Bag",
  "paper-vs-plastic-environmental-impact": "Paper vs Plastic",
  "custom-printed-bags-marketing-strategy": "Custom Printed Bags Marketing",
  "gsm-guide-paper-bags": "GSM Guide",
};

export default function Breadcrumbs() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);

  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
  ];

  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      name: pathNameMap[segment] || segment.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase()),
      href: currentPath,
    });
  });

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://ecobagsfactory.org${item.href === "/" ? "" : item.href}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 pt-24 pb-2">
        <ol className="flex items-center gap-1 text-sm text-muted-foreground flex-wrap">
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="w-4 h-4" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  {index === 0 && <Home className="w-4 h-4" />}
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}

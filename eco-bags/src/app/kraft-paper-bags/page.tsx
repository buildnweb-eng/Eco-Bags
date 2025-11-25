import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Leaf, Package, Recycle } from "lucide-react";

export const metadata: Metadata = {
  title: "Kraft Paper Bags Hyderabad | Brown Paper Bags | EcoBagsFactory",
  description: "Premium kraft paper bags manufacturer in Hyderabad. Durable, eco-friendly brown paper bags for retail, shopping, and groceries. Custom printing available. 140-300 GSM options. Call +91 9949826222.",
  keywords: ["kraft paper bags", "brown paper bags hyderabad", "kraft bags manufacturer", "eco-friendly kraft bags", "wholesale kraft bags hyderabad"],
  openGraph: {
    title: "Kraft Paper Bags Hyderabad - EcoBagsFactory",
    description: "Premium kraft paper bags - durable, eco-friendly, customizable. Wholesale pricing available.",
    images: ["/product-1.jpg"],
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/kraft-paper-bags",
  },
};

export default function KraftPaperBags() {
  const sizes = [
    { size: "Small", dimensions: "6x6x4 inch", use: "Jewelry, small gifts" },
    { size: "Medium", dimensions: "9x8x8 inch", use: "Retail, clothing" },
    { size: "Large", dimensions: "12x16x4 inch", use: "Shopping, groceries" },
    { size: "Extra Large", dimensions: "17x12x5 inch", use: "Bulk items, gifts" },
  ];

  const gsmOptions = [
    { gsm: "140 GSM", desc: "Light items, cost-effective", icon: Package },
    { gsm: "160-180 GSM", desc: "Standard retail use", icon: Package },
    { gsm: "200-220 GSM", desc: "Medium weight items", icon: Package },
    { gsm: "250-300 GSM", desc: "Heavy items, premium feel", icon: Package },
  ];

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Kraft Paper Bags",
    "description": "Premium eco-friendly kraft paper bags for retail and shopping. Available in multiple sizes and GSM options.",
    "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
    "manufacturer": { "@type": "Organization", "name": "EcoBagsFactory" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "offerCount": "4"
    }
  };

  return (
    <div className="pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% Eco-Friendly</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Kraft Paper <span className="text-primary">Bags</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Classic brown kraft paper bags - the most popular choice for eco-conscious businesses.
              Durable, recyclable, and available with custom printing. Perfect for retail stores,
              restaurants, and groceries in Hyderabad.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Recycle className="w-4 h-4 text-primary" />
                <span>100% Recyclable</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Leaf className="w-4 h-4 text-primary" />
                <span>Biodegradable</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Get Quote
                </Button>
              </Link>
              <a href="tel:+919949826222">
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 w-4 h-4" />
                  +91 9949826222
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <Image
              src="/product-1.jpg"
              alt="Kraft paper bags Hyderabad - eco-friendly brown paper bags"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Available <span className="text-primary">Sizes</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sizes.map((size, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{size.size}</h3>
                  <p className="text-primary font-medium mb-2">{size.dimensions}</p>
                  <p className="text-sm text-muted-foreground">{size.use}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* GSM Options */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Paper <span className="text-primary">Thickness</span> Options
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gsmOptions.map((option, index) => (
              <div key={index} className="bg-background rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{option.gsm}</h3>
                <p className="text-sm text-muted-foreground">{option.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Our <span className="text-primary">Kraft Bags</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Made from virgin kraft paper for maximum strength",
              "Multiple handle options: twisted, flat, or paper handles",
              "Custom sizes available on request",
              "Full-color printing with your logo and design",
              "Food-safe options available",
              "Competitive wholesale pricing for bulk orders",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="eco-gradient border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Order Kraft Paper Bags Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Minimum order: 3,000 bags. Get the best wholesale prices in Hyderabad.
            </p>
            <Link href="/custom-orders">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Request Quote
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

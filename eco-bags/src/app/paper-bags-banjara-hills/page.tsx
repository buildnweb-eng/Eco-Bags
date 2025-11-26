import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Sparkles, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Paper Bags Banjara Hills | Premium Eco Bags | EcoBagsFactory",
  description: "Premium paper bags for Banjara Hills boutiques and luxury brands. EcoBagsFactory offers high-end eco-friendly bags with custom printing, gold foiling, and premium finishes. Call +91 9949826222.",
  keywords: ["paper bags banjara hills", "eco bags banjara hills", "premium paper bags hyderabad", "luxury paper bags banjara hills", "boutique bags hyderabad"],
  openGraph: {
    title: "Paper Bags Banjara Hills - Premium Eco Bags",
    description: "Premium eco-friendly paper bags for Banjara Hills boutiques and luxury brands.",
    images: ["/hero-bags.jpg"],
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/paper-bags-banjara-hills",
  },
};

export default function PaperBagsBanjaraHills() {
  const premiumFeatures = [
    { icon: Sparkles, title: "Gold Foiling", desc: "Elegant gold foil accents for luxury branding" },
    { icon: Award, title: "Premium 300 GSM", desc: "Thick, sturdy paper for upscale feel" },
    { icon: CheckCircle, title: "Matt Lamination", desc: "Sophisticated matte finish" },
  ];

  const nearbyAreas = [
    "Jubilee Hills", "Road No. 1-14", "Film Nagar", "Punjagutta",
    "Somajiguda", "Begumpet", "Ameerpet", "Yousufguda"
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Premium Quality</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Paper Bags <span className="text-primary">Banjara Hills</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Premium eco-friendly paper bags designed for Banjara Hills&apos; upscale boutiques,
              luxury brands, and high-end retail stores. Gold foiling, premium finishes,
              and sophisticated designs that match your brand&apos;s prestige.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Request Premium Quote
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
              src="/hero-bags.jpg"
              alt="Premium paper bags Banjara Hills - luxury eco-friendly packaging"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Premium Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Premium Features for <span className="text-primary">Banjara Hills</span> Brands
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ideal For */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Perfect for Banjara Hills Businesses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Fashion Boutiques", "Jewelry Stores", "Art Galleries", "Luxury Spas",
              "Fine Dining", "Designer Stores", "Gift Shops", "Premium Retail"].map((biz, i) => (
              <div key={i} className="flex items-center gap-2 bg-background rounded-lg p-3">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">{biz}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Areas */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Also Serving Nearby Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="eco-gradient border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Elevate Your Brand with Premium Paper Bags
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Custom designed luxury paper bags for Banjara Hills&apos; finest establishments.
            </p>
            <Link href="/custom-orders">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Premium Quote
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Gift, Sparkles, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Gift Bags Hyderabad | Eco-Friendly Gift Paper Bags | EcoBagsFactory",
  description: "Beautiful eco-friendly gift bags in Hyderabad. Perfect for weddings, birthdays, corporate gifting, and festivals. Custom designs with premium finishes. Call +91 9949826222.",
  keywords: ["gift bags hyderabad", "eco-friendly gift bags", "wedding bags hyderabad", "corporate gift bags", "custom gift packaging"],
  openGraph: {
    title: "Gift Bags Hyderabad - Beautiful Eco-Friendly Packaging",
    description: "Premium gift bags for weddings, birthdays, and corporate events.",
    images: ["/hero-bags.jpg"],
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/gift-bags-hyderabad",
  },
};

export default function GiftBagsHyderabad() {
  const occasions = [
    { icon: Heart, title: "Weddings", desc: "Elegant bags for wedding favors and gifts" },
    { icon: Gift, title: "Birthdays", desc: "Colorful bags for party favors" },
    { icon: Sparkles, title: "Corporate Events", desc: "Professional branded gift bags" },
    { icon: Gift, title: "Festivals", desc: "Festive designs for Diwali, Eid, Christmas" },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Gift className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Make Gifts Special</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Gift Bags <span className="text-primary">Hyderabad</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Beautiful eco-friendly gift bags that make every occasion special.
              From elegant wedding favors to festive celebrations, our gift bags
              add the perfect finishing touch to your presents.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Order Gift Bags
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
              alt="Gift bags Hyderabad - eco-friendly gift packaging"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Occasions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perfect For Every <span className="text-primary">Occasion</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {occasions.map((occasion, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <occasion.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{occasion.title}</h3>
                  <p className="text-sm text-muted-foreground">{occasion.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Gift Bag Features</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Satin ribbon handles for luxury feel",
              "Gold and silver foiling options",
              "Custom sizes for any gift",
              "Premium lamination finishes",
              "Eco-friendly and recyclable",
              "Bulk discounts for events",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3 bg-background rounded-lg p-4">
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
              Order Custom Gift Bags Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Make your gifts memorable with beautiful eco-friendly packaging.
            </p>
            <Link href="/custom-orders">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Quote
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

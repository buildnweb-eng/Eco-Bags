import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "White Paper Bags Hyderabad | Premium Bags | EcoBagsFactory",
  description: "Premium white paper bags for boutiques and luxury brands in Hyderabad. Elegant, eco-friendly bags with custom printing. Perfect for fashion, jewelry, and gift stores. Call +91 9949826222.",
  keywords: ["white paper bags hyderabad", "premium paper bags", "boutique bags hyderabad", "luxury paper bags", "elegant eco bags"],
  openGraph: {
    title: "White Paper Bags Hyderabad - Premium Eco Bags",
    description: "Elegant white paper bags for boutiques and luxury brands.",
    images: ["/product-2.jpg"],
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/white-paper-bags",
  },
};

export default function WhitePaperBags() {
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
              White Paper <span className="text-primary">Bags</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Elegant white paper bags that elevate your brand presentation. Perfect for
              boutiques, jewelry stores, fashion retail, and luxury gift packaging.
              Clean, sophisticated, and eco-friendly.
            </p>

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
              src="/product-2.jpg"
              alt="White paper bags Hyderabad - premium eco-friendly bags"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Perfect For <span className="text-primary">Premium</span> Brands
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Fashion Boutiques", desc: "Elegant packaging for clothing and accessories" },
              { title: "Jewelry Stores", desc: "Premium bags for precious purchases" },
              { title: "Gift Shops", desc: "Beautiful presentation for special occasions" },
            ].map((item, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="pt-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose White Bags?</h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Clean, professional appearance",
              "Excellent for vibrant logo printing",
              "Premium feel for customers",
              "Multiple handle options available",
              "Various sizes and GSM options",
              "100% eco-friendly and recyclable",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-background rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="eco-gradient border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Elevate Your Brand with White Paper Bags
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Premium quality, elegant design, eco-friendly materials.
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

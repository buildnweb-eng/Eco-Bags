import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, ShoppingBag, TrendingDown, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Shopping Bags Wholesale Hyderabad | Bulk Paper Bags | EcoBagsFactory",
  description: "Wholesale paper bags for retail and shopping in Hyderabad. Best bulk pricing for eco-friendly shopping bags. Min 3000 bags. Free delivery on large orders. Call +91 9949826222.",
  keywords: ["shopping bags wholesale hyderabad", "bulk paper bags", "wholesale eco bags", "retail paper bags wholesale", "paper bags bulk order"],
  openGraph: {
    title: "Shopping Bags Wholesale Hyderabad - EcoBagsFactory",
    description: "Best wholesale prices for eco-friendly shopping bags. Bulk orders welcome.",
    images: ["/hero-bags.jpg"],
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/shopping-bags-wholesale",
  },
};

export default function ShoppingBagsWholesale() {
  const pricingTiers = [
    { qty: "3,000 - 5,000", discount: "Standard Pricing", benefit: "Entry wholesale rate" },
    { qty: "5,000 - 10,000", discount: "5% Off", benefit: "Medium bulk savings" },
    { qty: "10,000 - 25,000", discount: "10% Off", benefit: "Large order discount" },
    { qty: "25,000+", discount: "15%+ Off", benefit: "Best wholesale rate" },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <TrendingDown className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Best Wholesale Prices</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Shopping Bags <span className="text-primary">Wholesale</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Get the best wholesale prices on eco-friendly shopping bags in Hyderabad.
              Perfect for retailers, supermarkets, and businesses needing large quantities.
              The more you order, the more you save.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-primary" />
                <span>Free delivery on 10K+ orders</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Get Wholesale Quote
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
              alt="Shopping bags wholesale Hyderabad - bulk eco-friendly paper bags"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            Wholesale <span className="text-primary">Pricing</span> Tiers
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            Order more, save more - our tiered pricing rewards bulk orders
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`hover-lift border-border/50 ${index === 3 ? 'ring-2 ring-primary' : ''}`}>
                <CardContent className="pt-6 text-center">
                  {index === 3 && (
                    <span className="inline-block px-3 py-1 rounded-full bg-primary text-white text-xs font-medium mb-4">
                      Best Value
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{tier.qty}</h3>
                  <p className="text-primary font-semibold mb-2">{tier.discount}</p>
                  <p className="text-sm text-muted-foreground">{tier.benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ideal For */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Ideal For
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {["Retail Stores", "Supermarkets", "Restaurants", "Bakeries", "Boutiques", "Events"].map((biz, i) => (
              <div key={i} className="bg-background rounded-lg p-4 text-center">
                <ShoppingBag className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-sm font-medium">{biz}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Wholesale <span className="text-primary">Benefits</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Direct from manufacturer - no middleman markup",
              "Consistent quality across all batches",
              "Flexible delivery schedules",
              "Dedicated account manager for large orders",
              "Custom sizes and printing at wholesale rates",
              "Priority production for repeat customers",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 p-4 border rounded-lg">
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
              Start Saving with Wholesale Orders
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get a custom wholesale quote for your business needs today.
            </p>
            <Link href="/custom-orders">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Request Wholesale Quote
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

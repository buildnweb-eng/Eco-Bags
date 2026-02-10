import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, CheckCircle, Truck, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Eco Bags Secunderabad | Paper Bags Manufacturer | EcoBagsFactory",
  description: "Premium eco-friendly paper bags in Secunderabad. EcoBagsFactory delivers custom printed bags to Secunderabad, Malkajgiri, Alwal, Kompally. Fast delivery, wholesale pricing. Call +91 9949826222.",
  keywords: ["eco bags secunderabad", "paper bags secunderabad", "eco-friendly bags secunderabad", "custom paper bags secunderabad", "paper bags manufacturer secunderabad", "paper bag manufacturer secunderabad"],
  openGraph: {
    title: "Eco Bags Secunderabad - EcoBagsFactory",
    description: "Eco-friendly paper bags delivered to Secunderabad. Custom printing, wholesale prices.",
    images: ["/hero-bags.jpg"],
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/eco-bags-secunderabad",
  },
};

export default function EcoBagsSecunderabad() {
  const nearbyAreas = [
    "Malkajgiri", "Alwal", "Kompally", "Bowenpally", "Trimulgherry",
    "Tarnaka", "Sainikpuri", "ECIL", "AS Rao Nagar", "Yapral"
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Truck className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Fast Delivery to Secunderabad</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Eco Bags <span className="text-primary">Secunderabad</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Get premium eco-friendly paper bags delivered to Secunderabad and surrounding areas.
              EcoBagsFactory provides custom printed bags for businesses, retailers, and events
              across Secunderabad with fast, reliable delivery.
            </p>

            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span>24-48 hour delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Free delivery on bulk orders</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Order Now
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
              alt="Eco bags Secunderabad - eco-friendly paper bags delivery"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Areas */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            Delivery Areas in <span className="text-primary">Secunderabad</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            We deliver eco-friendly paper bags to all areas of Secunderabad
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Products for Secunderabad */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Paper Bags in <span className="text-primary">Secunderabad</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Retail Shopping Bags", desc: "Perfect for Secunderabad's busy markets and shops" },
              { title: "Gift Bags", desc: "Elegant bags for gift shops and boutiques" },
              { title: "Food-Grade Bags", desc: "Safe for restaurants and bakeries in Secunderabad" },
            ].map((product, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-muted-foreground mb-4">{product.desc}</p>
                  <Link href="/products">
                    <Button variant="outline" size="sm">View Products</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="eco-gradient border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Order Eco Bags for Secunderabad Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Premium quality, competitive prices, fast delivery to your Secunderabad location.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/custom-orders">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Get Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

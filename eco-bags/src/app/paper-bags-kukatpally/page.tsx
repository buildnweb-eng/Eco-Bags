import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, CheckCircle, Leaf, Truck, Factory } from "lucide-react";

export const metadata: Metadata = {
  title: "Paper Bags Kukatpally | Eco-Friendly Bags | EcoBagsFactory",
  description: "Premium paper bags manufacturer in Kukatpally, Hyderabad. EcoBagsFactory offers custom printed eco-friendly bags with same-day pickup available. Located in Rajiv Gandhi Nagar, Kukatpally.",
  keywords: ["paper bags kukatpally", "eco bags kukatpally", "paper bags manufacturer kukatpally", "eco-friendly bags kukatpally hyderabad", "custom paper bags kukatpally"],
  openGraph: {
    title: "Paper Bags Kukatpally - EcoBagsFactory",
    description: "Eco-friendly paper bags manufacturer in Kukatpally. Custom printing, wholesale pricing, same-day pickup.",
    images: ["/hero-bags.jpg"],
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/paper-bags-kukatpally",
  },
};

export default function PaperBagsKukatpally() {
  const nearbyAreas = [
    "KPHB Colony", "Miyapur", "Bachupally", "Nizampet", "Pragathi Nagar",
    "Chandanagar", "JNTU", "Moosapet", "Erragadda", "Balanagar"
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Factory className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Factory Located Here</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Paper Bags <span className="text-primary">Kukatpally</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Our factory is located right here in Kukatpally! Get premium eco-friendly
              paper bags with the fastest delivery and same-day pickup options.
              Visit our facility at Rajiv Gandhi Nagar, Prashanthi Nagar.
            </p>

            <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold">Our Kukatpally Location</p>
                <p className="text-sm text-muted-foreground">
                  Plot No. 91, Rajiv Gandhi Nagar, Prashanthi Nagar, Kukatpally, Hyderabad - 500072
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Get Custom Quote
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
              alt="Paper bags Kukatpally - EcoBagsFactory manufacturing facility"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Benefits of Kukatpally Location */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <Card className="hover-lift border-border/50">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Factory className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct from Factory</h3>
              <p className="text-sm text-muted-foreground">
                Order directly from our Kukatpally factory - no middlemen, best prices
              </p>
            </CardContent>
          </Card>
          <Card className="hover-lift border-border/50">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Same-Day Pickup</h3>
              <p className="text-sm text-muted-foreground">
                Visit our factory for instant pickup of ready stock items
              </p>
            </CardContent>
          </Card>
          <Card className="hover-lift border-border/50">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">100% Eco-Friendly</h3>
              <p className="text-sm text-muted-foreground">
                All bags manufactured with sustainable, recyclable materials
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Nearby Areas */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">
            Delivering to Areas Near <span className="text-primary">Kukatpally</span>
          </h2>
          <p className="text-muted-foreground text-center mb-8">
            Fast delivery to all neighborhoods around Kukatpally
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

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Paper Bag Services in <span className="text-primary">Kukatpally</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Custom Printed Bags", desc: "Your brand logo printed with high-quality printing" },
              { title: "Wholesale Orders", desc: "Best rates for bulk orders - minimum 3000 bags" },
              { title: "Same-Day Pickup", desc: "Ready stock available for immediate pickup" },
              { title: "Free Design Consultation", desc: "Our team helps you design the perfect bag" },
            ].map((service, index) => (
              <div key={index} className="flex gap-4 p-6 border rounded-lg">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="eco-gradient border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Visit Our Kukatpally Factory Today
            </h2>
            <p className="text-xl mb-8 opacity-90">
              See our eco-friendly paper bags manufacturing process and pick up your order directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Get Directions
                </Button>
              </Link>
              <a href="tel:+919949826222">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Call +91 9949826222
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

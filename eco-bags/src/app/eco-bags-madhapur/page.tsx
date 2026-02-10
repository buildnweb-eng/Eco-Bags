import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Building2, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Eco Bags Madhapur | Paper Bags HITEC City | EcoBagsFactory",
  description: "Eco-friendly paper bags for Madhapur and HITEC City businesses. EcoBagsFactory delivers custom printed bags to IT companies, startups, and retail stores. Bulk orders welcome. Call +91 9949826222.",
  keywords: ["eco bags madhapur", "paper bags hitec city", "eco-friendly bags madhapur", "corporate paper bags hyderabad", "paper bags IT corridor", "paper bag manufacturer madhapur"],
  openGraph: {
    title: "Eco Bags Madhapur & HITEC City - EcoBagsFactory",
    description: "Eco-friendly paper bags for Madhapur's IT corridor and HITEC City businesses.",
    images: ["/hero-bags.jpg"],
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/eco-bags-madhapur",
  },
};

export default function EcoBagsMadhapur() {
  const nearbyAreas = [
    "HITEC City", "Kondapur", "Gachibowli", "Raidurg", "Cyber Towers",
    "DLF Cyber City", "Raheja Mindspace", "Inorbit Mall", "Shilparamam"
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">IT Corridor Delivery</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Eco Bags <span className="text-primary">Madhapur</span> & HITEC City
            </h1>

            <p className="text-xl text-muted-foreground">
              Premium eco-friendly paper bags for Madhapur&apos;s thriving business district.
              Perfect for corporate events, IT companies, startups, conferences, and retail
              stores in Hyderabad&apos;s tech hub.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Corporate Orders
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
              alt="Eco bags Madhapur HITEC City - corporate eco-friendly paper bags"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Corporate Solutions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Corporate Solutions for <span className="text-primary">Madhapur</span> Businesses
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: "Conference Bags", desc: "Branded bags for corporate events" },
              { icon: Building2, title: "Office Supplies", desc: "Eco-friendly bags for daily use" },
              { icon: CheckCircle, title: "Bulk Orders", desc: "Large quantity discounts" },
              { icon: CheckCircle, title: "Quick Delivery", desc: "Express delivery to IT parks" },
            ].map((item, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 mb-3">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Areas */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Delivery to <span className="text-primary">IT Corridor</span> Locations
          </h2>
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

        {/* CTA */}
        <Card className="eco-gradient border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Go Green with Your Corporate Events
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Custom branded eco-friendly bags for conferences, meetups, and corporate gifting.
            </p>
            <Link href="/custom-orders">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Corporate Quote
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

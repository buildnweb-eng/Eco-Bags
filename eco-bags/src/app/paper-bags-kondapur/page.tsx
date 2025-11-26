import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, Building2, Coffee, ShoppingCart, Utensils } from "lucide-react";

export const metadata: Metadata = {
  title: "Paper Bags Kondapur - Eco-Friendly Bags for IT Hub Businesses",
  description: "Eco-friendly paper bags for Kondapur businesses. Serving IT companies, restaurants, cafes, and retail stores near HITEC City. Fast delivery, bulk orders, custom printing.",
  keywords: ["paper bags kondapur", "eco bags kondapur", "paper bags hitec city", "kondapur packaging", "eco-friendly bags kondapur", "corporate paper bags hyderabad"],
  openGraph: {
    title: "Paper Bags Kondapur - Eco-Friendly Bags for IT Hub Businesses",
    description: "Eco-friendly paper bags for Kondapur businesses near HITEC City. Fast delivery, bulk orders.",
    images: ["/varieties/7.png"],
  },
};

export default function PaperBagsKondapur() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EcoBagsFactory - Paper Bags Kondapur",
    "image": "https://ecobagsfactory.org/varieties/7.png",
    "description": "Eco-friendly paper bags for Kondapur businesses near HITEC City.",
    "url": "https://ecobagsfactory.org/paper-bags-kondapur",
    "telephone": "+91-9949826222",
    "email": "eco4bags@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 91, Rajiv Gandhi Nagar, Prashanthi Nagar, Kukatpally",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500072",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Kondapur, Hyderabad"
    }
  };

  const businessTypes = [
    { icon: Building2, title: "IT Companies", desc: "Corporate event bags, conference kits, welcome packages" },
    { icon: Coffee, title: "Cafes & Bakeries", desc: "Food-grade paper bags for takeaway and delivery" },
    { icon: Utensils, title: "Restaurants", desc: "Branded bags for parcel and home delivery" },
    { icon: ShoppingCart, title: "Retail Stores", desc: "Shopping bags for boutiques and grocery stores" },
  ];

  const kondapurAreas = [
    "Kondapur Main Road",
    "Botanical Garden Area",
    "Laxmi Cyber City",
    "Kothaguda",
    "Hafeezpet",
    "Whitefields"
  ];

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="py-16 earth-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Building2 className="w-4 h-4" />
                IT Hub Paper Bags Partner
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Paper Bags <span className="text-primary">Kondapur</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Eco-friendly paper bags for Kondapur&apos;s thriving business community. From IT corporates to cafes, we serve the entire Kondapur-HITEC City corridor with sustainable packaging solutions.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Same-Day Delivery</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="eco-gradient text-white">
                    Get Quote for Kondapur
                  </Button>
                </Link>
                <Link href="/shopping-bags-wholesale">
                  <Button size="lg" variant="outline">
                    Bulk Orders
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-80 lg:h-96">
              <Image
                src="/varieties/7.png"
                alt="Eco-friendly paper bags for Kondapur businesses"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Serving Kondapur Businesses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From tech startups to established restaurants, we provide custom paper bags for every business type in Kondapur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessTypes.map((type, index) => (
              <Card key={index} className="hover-lift border-border/50 text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <type.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Delivery Across Kondapur
              </h2>
              <p className="text-muted-foreground mb-6">
                We deliver to all localities in and around Kondapur. Whether you&apos;re near the Botanical Garden or in Kothaguda, we&apos;ve got you covered.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {kondapurAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact for Kondapur Orders</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">+91 9949826222</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">eco4bags@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">Mon-Sat: 9AM - 7PM</span>
                  </div>
                </div>

                <Link href="/contact" className="block mt-6">
                  <Button className="w-full eco-gradient text-white">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Go Green in Kondapur
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the sustainable packaging movement. Get eco-friendly paper bags delivered to your Kondapur business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="eco-gradient text-white">
                Get Started
              </Button>
            </Link>
            <Link href="/eco-bags-madhapur">
              <Button size="lg" variant="outline">
                See Madhapur Page
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

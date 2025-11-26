import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, Sparkles, Gift, Crown, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Eco Bags Jubilee Hills - Premium Paper Bags for Luxury Boutiques",
  description: "Premium eco-friendly paper bags for Jubilee Hills boutiques and luxury stores. Gold foiling, spot UV, satin ribbon handles. Same-day delivery available in Jubilee Hills, Hyderabad.",
  keywords: ["eco bags jubilee hills", "paper bags jubilee hills", "luxury paper bags hyderabad", "boutique bags jubilee hills", "premium shopping bags", "designer paper bags"],
  openGraph: {
    title: "Eco Bags Jubilee Hills - Premium Paper Bags for Luxury Boutiques",
    description: "Premium eco-friendly paper bags for Jubilee Hills boutiques. Gold foiling, spot UV, satin ribbon handles.",
    images: ["/varieties/5.png"],
  },
};

export default function EcoBagsJubileeHills() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EcoBagsFactory - Eco Bags Jubilee Hills",
    "image": "https://ecobagsfactory.org/varieties/5.png",
    "description": "Premium eco-friendly paper bags for Jubilee Hills boutiques and luxury stores. Gold foiling, spot UV, satin ribbon handles.",
    "url": "https://ecobagsfactory.org/eco-bags-jubilee-hills",
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
      "name": "Jubilee Hills, Hyderabad"
    }
  };

  const premiumFeatures = [
    { icon: Crown, title: "Gold & Silver Foiling", desc: "Metallic accents for luxury brands" },
    { icon: Sparkles, title: "Spot UV Coating", desc: "Selective glossy highlights" },
    { icon: Gift, title: "Satin Ribbon Handles", desc: "Premium look and feel" },
    { icon: Award, title: "300 GSM Premium Paper", desc: "Thick, luxurious quality" },
  ];

  const jubileeHillsAreas = [
    "Road No. 1 to 92",
    "Film Nagar",
    "Peddamma Temple Area",
    "KBR Park Vicinity",
    "Jubilee Hills Check Post",
    "Road No. 36 Shopping Area"
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
                <Crown className="w-4 h-4" />
                Jubilee Hills Premium Partner
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Eco Bags <span className="text-primary">Jubilee Hills</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Premium eco-friendly paper bags crafted for Jubilee Hills&apos; luxury boutiques, designer stores, and high-end retail. Make your packaging as exclusive as your products.
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
                    Get Premium Quote
                  </Button>
                </Link>
                <Link href="/custom-orders">
                  <Button size="lg" variant="outline">
                    Custom Luxury Bags
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-80 lg:h-96">
              <Image
                src="/varieties/5.png"
                alt="Premium eco-friendly paper bags for Jubilee Hills boutiques"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Premium Finishes for Luxury Brands
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Jubilee Hills boutiques deserve the finest packaging. Our premium options elevate your brand.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {premiumFeatures.map((feature, index) => (
              <Card key={index} className="hover-lift border-border/50 text-center">
                <CardContent className="pt-8">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
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
                Serving All of Jubilee Hills
              </h2>
              <p className="text-muted-foreground mb-6">
                We deliver premium paper bags to every road and locality in Jubilee Hills. From Road No. 1 to Film Nagar, we&apos;ve got you covered.
              </p>

              <div className="grid grid-cols-2 gap-3">
                {jubileeHillsAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <Card className="border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact for Jubilee Hills Delivery</h3>
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
                    Request Premium Quote
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
            Elevate Your Jubilee Hills Boutique
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join premium brands in Jubilee Hills using our luxury eco-friendly paper bags. Make sustainability stylish.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="eco-gradient text-white">
                Get Started
              </Button>
            </Link>
            <Link href="/gift-bags-hyderabad">
              <Button size="lg" variant="outline">
                View Gift Bags
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

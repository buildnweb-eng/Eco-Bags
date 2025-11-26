import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Star, CheckCircle, GraduationCap, Store, ShoppingBag, Shirt } from "lucide-react";

export const metadata: Metadata = {
  title: "Eco Bags Ameerpet - Paper Bags for Retail & Coaching Centers",
  description: "Eco-friendly paper bags for Ameerpet businesses. Serving retail stores, coaching centers, boutiques, and shops. Affordable bulk pricing, fast delivery across Ameerpet.",
  keywords: ["eco bags ameerpet", "paper bags ameerpet", "ameerpet paper bags", "coaching center bags", "retail bags ameerpet", "shopping bags ameerpet"],
  openGraph: {
    title: "Eco Bags Ameerpet - Paper Bags for Retail & Coaching Centers",
    description: "Eco-friendly paper bags for Ameerpet businesses. Affordable bulk pricing, fast delivery.",
    images: ["/varieties/8.png"],
  },
};

export default function EcoBagsAmeerpet() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EcoBagsFactory - Eco Bags Ameerpet",
    "image": "https://ecobagsfactory.org/varieties/8.png",
    "description": "Eco-friendly paper bags for Ameerpet businesses - retail, coaching centers, and shops.",
    "url": "https://ecobagsfactory.org/eco-bags-ameerpet",
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
      "name": "Ameerpet, Hyderabad"
    }
  };

  const businessTypes = [
    { icon: GraduationCap, title: "Coaching Centers", desc: "Branded bags for study materials, certificates, and welcome kits" },
    { icon: Store, title: "Retail Stores", desc: "Durable shopping bags for all retail needs" },
    { icon: Shirt, title: "Clothing Shops", desc: "Stylish bags for apparel and accessories" },
    { icon: ShoppingBag, title: "General Shops", desc: "Versatile bags for everyday retail use" },
  ];

  const ameerpetAreas = [
    "Ameerpet Metro Station Area",
    "SR Nagar",
    "Yousufguda",
    "Sanathnagar",
    "Balkampet",
    "Erragadda"
  ];

  const pricingBenefits = [
    "Competitive bulk pricing for high volumes",
    "Special rates for coaching institutes",
    "Flexible payment options available",
    "No minimum order for repeat customers",
    "Volume discounts up to 20%"
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
                <GraduationCap className="w-4 h-4" />
                Education Hub Partner
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Eco Bags <span className="text-primary">Ameerpet</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Affordable eco-friendly paper bags for Ameerpet&apos;s bustling commercial hub. Serving coaching centers, retail stores, and businesses across Hyderabad&apos;s education and shopping district.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Budget-Friendly Pricing</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button size="lg" className="eco-gradient text-white">
                    Get Ameerpet Quote
                  </Button>
                </Link>
                <Link href="/shopping-bags-wholesale">
                  <Button size="lg" variant="outline">
                    Wholesale Rates
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative h-80 lg:h-96">
              <Image
                src="/varieties/8.png"
                alt="Eco-friendly paper bags for Ameerpet businesses"
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
              Perfect for Ameerpet Businesses
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From coaching centers to retail shops, we provide affordable paper bags that suit every business need in Ameerpet.
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

      {/* Pricing Benefits */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Budget-Friendly for Ameerpet
              </h2>
              <p className="text-muted-foreground mb-6">
                We understand the competitive nature of Ameerpet businesses. That&apos;s why we offer special pricing to help you go eco-friendly without breaking the bank.
              </p>

              <ul className="space-y-3">
                {pricingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Delivery Areas in Ameerpet</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {ameerpetAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{area}</span>
                  </div>
                ))}
              </div>

              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <div className="space-y-3">
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

                  <Link href="/contact" className="block mt-4">
                    <Button className="w-full eco-gradient text-white">
                      Request Quote
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Affordable Eco Bags for Ameerpet
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Quality eco-friendly paper bags at competitive prices. Perfect for coaching centers, retail stores, and all Ameerpet businesses.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="eco-gradient text-white">
                Get Started
              </Button>
            </Link>
            <Link href="/kraft-paper-bags">
              <Button size="lg" variant="outline">
                View Kraft Bags
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

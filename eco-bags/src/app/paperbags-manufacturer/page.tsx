import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Award, Truck, Shield, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paperbags Manufacturer India | Leading Paper Bags Manufacturer - EcoBagsFactory",
  description: "EcoBagsFactory - Premier paperbags manufacturer in India. Professional paper bags manufacturer offering custom paperbags manufacturing, wholesale production, bulk orders. Trusted paperbags manufacturer in Hyderabad, India, and UK. Expert ecobags manufacturer delivering 100% recyclable bags nationwide. Contact the best paperbags manufacturer today!",
  keywords: ["paperbags manufacturer", "paperbags manufacturer India", "paperbags manufacturer Hyderabad", "paperbags manufacturer hyd", "paperbags manufacturer UK", "paper bags manufacturer", "paper bags manufacturer India", "paper bags manufacturer Hyderabad", "ecobags manufacturer", "custom paperbags manufacturer", "wholesale paperbags manufacturer", "bulk paperbags manufacturer", "EcoBagsFactory"],
  openGraph: {
    title: "Paperbags Manufacturer India | EcoBagsFactory - Paper Bags Manufacturer",
    description: "Leading paperbags manufacturer in India. Premier paper bags manufacturer offering custom manufacturing, wholesale, bulk orders. Trusted paperbags manufacturer.",
    images: ["/factory/factory-enhanced-1.1.jpeg"],
  },
};

export default function PaperbagsManufacturer() {
  const manufacturingCapabilities = [
    {
      icon: Factory,
      title: "State-of-the-Art Manufacturing",
      description: "Advanced paperbags manufacturing facility with high-speed production lines",
    },
    {
      icon: Award,
      title: "Certified Manufacturer",
      description: "ISO certified paperbags manufacturer with quality assurance",
    },
    {
      icon: Truck,
      title: "Nationwide Delivery",
      description: "Paperbags manufacturer delivering across India, Hyderabad, and UK",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "Premium paperbags manufacturer with 100% quality guarantee",
    },
  ];

  const manufacturingServices = [
    "Custom Paperbags Manufacturing",
    "Wholesale Paper Bags Manufacturing",
    "Bulk Paperbags Production",
    "Printed Paperbags Manufacturing",
    "Kraft Paper Bags Manufacturing",
    "White Paper Bags Manufacturing",
    "Shopping Bags Manufacturing",
    "Gift Bags Manufacturing",
    "Eco-Friendly Bags Manufacturing",
    "Biodegradable Bags Manufacturing",
  ];

  // Manufacturer Schema
  const manufacturerSchema = {
    "@context": "https://schema.org",
    "@type": "Manufacturer",
    "name": "EcoBagsFactory - Paperbags Manufacturer",
    "alternateName": ["Paperbags Manufacturer India", "Paper Bags Manufacturer", "Paperbags Manufacturer Hyderabad"],
    "url": "https://ecobagsfactory.org/paperbags-manufacturer",
    "logo": "https://ecobagsfactory.org/hero-bags.jpg",
    "description": "Leading paperbags manufacturer in India. Professional paper bags manufacturer offering custom paperbags manufacturing, wholesale production, and bulk orders.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 91, Rajiv Gandhi Nagar, Prashanthi Nagar, Kukatpally",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500072",
      "addressCountry": "IN"
    },
    "telephone": "+91-9949826222",
    "email": "eco4bags@gmail.com",
    "areaServed": ["India", "Hyderabad", "UK"],
    "productionLocation": "Hyderabad, India",
    "foundingDate": "2010",
    "naics": "322220",
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Product",
        "name": "Custom Paperbags Manufacturing Services",
        "description": "Professional paperbags manufacturer offering custom, wholesale, and bulk manufacturing"
      }
    }
  };

  return (
    <div className="pt-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturerSchema) }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Leading <span className="text-primary">Paperbags Manufacturer</span> in India
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              EcoBagsFactory - Premier Paper Bags Manufacturer
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Professional paperbags manufacturer offering custom paperbags manufacturing, wholesale paper bags production, 
              and bulk manufacturing services. Trusted paperbags manufacturer in Hyderabad, India, and UK delivering 
              100% eco-friendly, recyclable, and biodegradable bags since 2010.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Request Manufacturing Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Contact Manufacturer
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capabilities */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Our <span className="text-primary">Paperbags Manufacturing</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leading paperbags manufacturer with state-of-the-art facilities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {manufacturingCapabilities.map((capability, index) => (
              <Card
                key={index}
                className="hover-lift border-border/50"
              >
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <capability.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground">{capability.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Services */}
      <section className="py-20 earth-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Our <span className="text-primary">Manufacturing Services</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Comprehensive paperbags manufacturing solutions
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {manufacturingServices.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border/50"
                >
                  <Check className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/products">
                <Button size="lg" className="eco-gradient text-white">
                  View Manufacturing Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional <span className="text-primary">Paperbags Manufacturing</span> Process
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                As a leading paperbags manufacturer, we follow strict quality control and manufacturing 
                standards. Our paper bags manufacturing facility in Hyderabad is equipped with advanced 
                machinery for custom paperbags manufacturing, wholesale production, and bulk orders.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Custom Paperbags Manufacturing</h3>
                    <p className="text-muted-foreground">Tailored paperbags manufacturing solutions for your brand</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Wholesale Manufacturing</h3>
                    <p className="text-muted-foreground">Large-scale paperbags manufacturing for wholesale orders</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Quality Assurance</h3>
                    <p className="text-muted-foreground">Certified paperbags manufacturer with ISO quality standards</p>
                  </div>
                </li>
              </ul>
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Start Manufacturing Order
                </Button>
              </Link>
            </div>

            <div className="relative h-[500px]">
              <Image
                src="/factory/factory-enhanced-1.1.jpeg"
                alt="Paperbags Manufacturing Facility - EcoBagsFactory Paper Bags Manufacturer India"
                fill
                className="object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 earth-gradient">
        <div className="container mx-auto px-4">
          <Card className="eco-gradient border-0">
            <CardContent className="p-12 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Partner with India's Leading Paperbags Manufacturer
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                EcoBagsFactory - Your trusted paperbags manufacturer for custom manufacturing, 
                wholesale production, and bulk orders. Contact the best paper bags manufacturer today!
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Contact Manufacturer
                  </Button>
                </Link>
                <Link href="/custom-orders">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Request Quote
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Factory, Award, Truck, Shield, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paper Bag Manufacturer in Hyderabad | Paper Bag Manufacturers India - EcoBagsFactory",
  description: "EcoBagsFactory - Top paper bag manufacturer in Hyderabad, India. Premier paperbags manufacturer offering custom paper bags manufacturing, wholesale production, bulk orders. Trusted paper bag manufacturer and paper bag manufacturers serving Hyderabad, India, and UK. Expert ecobags manufacturer delivering 100% recyclable bags. Contact the best paper bag manufacturer today!",
  keywords: ["paperbags manufacturer", "paperbags manufacturer India", "paperbags manufacturer Hyderabad", "paperbags manufacturer hyd", "paperbags manufacturer UK", "paper bags manufacturer", "paper bags manufacturer India", "paper bags manufacturer Hyderabad", "ecobags manufacturer", "custom paperbags manufacturer", "wholesale paperbags manufacturer", "bulk paperbags manufacturer", "EcoBagsFactory", "paper bag manufacturer", "paper bag manufacturers", "paper bag manufacturer hyderabad", "paper bag manufacturers hyderabad", "paper bag manufacturer in hyderabad", "paper bag manufacturer india", "paper bag manufacturers near me", "best paper bag manufacturer in hyderabad"],
  openGraph: {
    title: "Paper Bag Manufacturer Hyderabad | EcoBagsFactory - Paperbags Manufacturer India",
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
    "name": "EcoBagsFactory - Paper Bag Manufacturer Hyderabad",
    "alternateName": ["Paperbags Manufacturer India", "Paper Bags Manufacturer", "Paperbags Manufacturer Hyderabad", "Paper Bag Manufacturer Hyderabad", "Paper Bag Manufacturers Hyderabad", "Paper Bag Manufacturer in Hyderabad", "Paper Bag Manufacturers in Hyderabad", "Paper Bag Manufacturer India", "Best Paper Bag Manufacturer Hyderabad"],
    "url": "https://ecobagsfactory.org/paperbags-manufacturer",
    "logo": "https://ecobagsfactory.org/hero-bags.jpg",
    "description": "Leading paper bag manufacturer in Hyderabad, India. Professional paper bag manufacturers offering custom paper bags manufacturing, wholesale production, and bulk orders. EcoBagsFactory - trusted paperbags manufacturer since 2010.",
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

  // FAQ Schema for Paperbags Manufacturer Page
  const manufacturerFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why choose EcoBagsFactory as your paper bag manufacturer in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EcoBagsFactory is India's trusted paper bag manufacturer and paperbags manufacturer since 2010 with 10M+ bags produced. As a leading paper bag manufacturer in Hyderabad, we offer competitive pricing, fast delivery, ISO quality standards, and 100% eco-friendly manufacturing. EcoBagsFactory is among the top paper bag manufacturers serving clients across India, UK, and USA."
        }
      },
      {
        "@type": "Question",
        "name": "What GSM paper does the paperbags manufacturer use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a professional paperbags manufacturer, we use 140 GSM to 300 GSM paper based on requirements. Standard shopping bags use 160-200 GSM, while premium bags use 220-300 GSM kraft paper. Our paper bags manufacturer facility ensures consistent quality across all GSM ranges."
        }
      },
      {
        "@type": "Question",
        "name": "Does the paperbags manufacturer offer wholesale pricing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, EcoBagsFactory offers wholesale paperbags manufacturing with bulk discounts. Contact our paperbags manufacturer team for wholesale pricing on custom paper bags manufacturing orders above 5000 pieces. We are the preferred paper bags manufacturer for wholesale orders in India."
        }
      },
      {
        "@type": "Question",
        "name": "What is the delivery time for paperbags manufacturing orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our paperbags manufacturer facility typically delivers orders within 7-14 days depending on quantity and customization. As a paper bags manufacturer in Hyderabad, we offer express delivery options for urgent manufacturing orders across India."
        }
      },
      {
        "@type": "Question",
        "name": "Can the paperbags manufacturer handle large bulk orders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! As a leading paperbags manufacturer in India, EcoBagsFactory has the capacity to handle orders from 500 pieces to 100,000+ pieces. Our paper bags manufacturer facility is equipped with high-speed production lines for large-scale manufacturing."
        }
      },
      {
        "@type": "Question",
        "name": "What certifications does the paperbags manufacturer have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EcoBagsFactory paperbags manufacturer facility maintains ISO quality standards and uses FSC-certified paper. As a responsible paper bags manufacturer, all our products are 100% recyclable and biodegradable, meeting international eco-friendly packaging standards."
        }
      },
      {
        "@type": "Question",
        "name": "What are the benefits of choosing a local paper bag manufacturer in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choosing a local paper bag manufacturer in Hyderabad like EcoBagsFactory offers faster delivery, lower shipping costs, easy quality checks, and direct communication. As a Hyderabad-based paper bag manufacturer, we provide same-day consultations, factory visits, and quick turnaround for urgent orders across Telangana and India."
        }
      },
      {
        "@type": "Question",
        "name": "What paper bag sizes does the paper bag manufacturer offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "EcoBagsFactory paper bag manufacturer offers all standard and custom sizes: small gift bags (6x6x4 inch), medium retail bags (9x8x8 inch, 12x8x3.5 inch), large shopping bags (14x10x4 inch, 15x12x4 inch), extra large bags (15.25x18.65x4 inch, 17x12x5 inch). As a custom paper bag manufacturer, we also manufacture any size to your specifications."
        }
      },
      {
        "@type": "Question",
        "name": "How to place a bulk order with EcoBagsFactory paper bag manufacturer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To place a bulk order with EcoBagsFactory paper bag manufacturer: 1) Visit ecobagsfactory.org/custom-orders 2) Fill in your requirements (size, GSM, printing, quantity) 3) Our paper bag manufacturer team reviews within 24 hours 4) Receive mockups and pricing 5) Approve and production starts. Minimum order: 500 pieces. Call +91 9949826222 for immediate quotes."
        }
      }
    ]
  };

  return (
    <div className="pt-16 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturerSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturerFaqSchema) }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-primary">Paper Bag Manufacturer</span> in Hyderabad, India
            </h1>
            <p className="text-xl text-muted-foreground mb-4">
              EcoBagsFactory - Leading Paper Bag Manufacturer &amp; Paper Bag Manufacturers
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              Top paper bag manufacturer in Hyderabad offering custom paper bags manufacturing, wholesale paper bags production,
              and bulk manufacturing services. EcoBagsFactory is among the most trusted paper bag manufacturers in India,
              delivering 100% eco-friendly, recyclable, and biodegradable bags since 2010.
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
              Why Choose Our <span className="text-primary">Paper Bag Manufacturing</span>
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
                Professional <span className="text-primary">Paper Bag Manufacturer</span> Process
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

      {/* Paper Bag Manufacturer - Areas We Serve */}
      <section className="py-20 earth-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Paper Bag Manufacturer - <span className="text-primary">Areas We Serve</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                As the leading paper bag manufacturer in Hyderabad, EcoBagsFactory delivers premium paper bags across all major areas
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { name: "Kukatpally", href: "/paper-bags-kukatpally" },
                { name: "Banjara Hills", href: "/paper-bags-banjara-hills" },
                { name: "Madhapur", href: "/eco-bags-madhapur" },
                { name: "Gachibowli", href: "/paper-bags-gachibowli" },
                { name: "Secunderabad", href: "/eco-bags-secunderabad" },
                { name: "Jubilee Hills", href: "/eco-bags-jubilee-hills" },
                { name: "Kondapur", href: "/paper-bags-kondapur" },
                { name: "Ameerpet", href: "/eco-bags-ameerpet" },
              ].map((area) => (
                <Link
                  key={area.name}
                  href={area.href}
                  className="bg-card p-4 rounded-lg border border-border/50 text-center hover:border-primary/50 transition-colors"
                >
                  <span className="font-medium text-foreground">Paper Bag Manufacturer in {area.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose a Trusted Paper Bag Manufacturer */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
              Why Choose a Trusted <span className="text-primary">Paper Bag Manufacturer</span>
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Choosing the right paper bag manufacturer is crucial for your business. A reliable paper bag manufacturer
                ensures consistent quality, timely delivery, and competitive pricing. EcoBagsFactory has been a trusted
                paper bag manufacturer in Hyderabad since 2010, serving over 5000 businesses with premium eco-friendly bags.
              </p>
              <p>
                As one of the leading paper bag manufacturers in India, EcoBagsFactory combines state-of-the-art manufacturing
                technology with skilled craftsmanship. Our paper bag manufacturer facility in Kukatpally, Hyderabad is equipped
                with advanced printing and cutting machines that produce bags ranging from 140 GSM to 300 GSM.
              </p>
              <p>
                Working with an experienced paper bag manufacturer like EcoBagsFactory means you get access to custom printing
                options including spot UV, gold foiling, matt and gloss lamination. Our paper bag manufacturers team handles
                everything from design to delivery, making us the preferred paper bag manufacturer for brands like Neerus,
                Almond House, Ramraj Cotton, and Cafe Niloufer.
              </p>
              <p>
                Environmental responsibility sets EcoBagsFactory apart from other paper bag manufacturers. Every bag from our
                paper bag manufacturer facility is 100% recyclable and biodegradable, helping your business reduce its carbon
                footprint while maintaining premium packaging quality.
              </p>
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
                Partner with Hyderabad&apos;s Leading Paper Bag Manufacturer
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


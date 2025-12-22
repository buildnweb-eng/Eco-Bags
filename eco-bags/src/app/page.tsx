import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Package, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next";
import FactoryShowcase from "@/components/FactoryShowcase";

export const metadata: Metadata = {
  title: "EcoBagsFactory | ecobags | paperbags - Buy Premium Paper Bags Online India",
  description: "EcoBagsFactory - Buy ecobags and paperbags online. India's #1 ecobags manufacturer and paperbags supplier. Premium quality ecobags, custom printed paperbags, kraft paper bags at wholesale prices. 100% recyclable ecobags, biodegradable paperbags. Order ecobags online, bulk paperbags. EcoBagsFactory delivers ecobags and paperbags across India.",
  keywords: ["EcoBagsFactory", "ecobags", "paperbags", "EcoBags Factory", "ecobags India", "paperbags India", "ecobags manufacturer", "paperbags manufacturer", "ecobags online", "paperbags online", "buy ecobags", "buy paperbags", "ecobags wholesale", "paperbags wholesale", "ecobags bulk", "paperbags bulk", "custom ecobags", "printed paperbags", "kraft paperbags", "ecobags Hyderabad", "paperbags Hyderabad", "ecobags supplier", "paperbags supplier", "cheap ecobags", "cheap paperbags", "ecobags price", "paperbags price", "shopping bags", "gift bags", "grocery bags", "retail bags", "carry bags", "recyclable bags", "biodegradable bags", "eco friendly bags", "sustainable packaging"],
  openGraph: {
    title: "EcoBagsFactory | ecobags | paperbags - Premium Manufacturer India",
    description: "EcoBagsFactory - Buy ecobags and paperbags online. Premium quality ecobags at wholesale prices. Custom printed paperbags. 100% recyclable ecobags and biodegradable paperbags.",
    images: ["/hero-bags.jpg"],
  },
};

export default function Home() {
  // Product List Schema for varieties
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "EcoBagsFactory ecobags and paperbags Collection",
    "description": "EcoBagsFactory premium ecobags and paperbags - buy ecobags online, wholesale paperbags, custom printed ecobags, kraft paperbags, gift bags, shopping bags in various sizes",
    "numberOfItems": 8,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "Brown Kraft paperbags - EcoBagsFactory ecobags 9x8x8 inch",
          "description": "EcoBagsFactory ecobags - Brown kraft paperbags with thread handles - 140 GSM - Premium quality ecobags and paperbags for retail and shopping",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Custom Printed paperbags - EcoBagsFactory ecobags 12x8x3.5 inch",
          "description": "EcoBagsFactory custom printed ecobags and paperbags with Spot UV coating - Personalized paperbags for branding - Premium ecobags manufacturer",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
        }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": {
          "@type": "Product",
          "name": "Gloss Lamination Paper Bag 6x6x4 inch",
          "description": "Premium paper bag with gloss lamination - Cyber XL 220 GSM",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
        }
      },
      {
        "@type": "ListItem",
        "position": 4,
        "item": {
          "@type": "Product",
          "name": "Matt Lamination Paper Bag 14x10x4 inch",
          "description": "Luxury paper bag with matt lamination and special handles - 250 GSM",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
        }
      },
      {
        "@type": "ListItem",
        "position": 5,
        "item": {
          "@type": "Product",
          "name": "Satin Ribbon Gift Bag 15x12x4 inch",
          "description": "Premium gift bag with satin ribbon handles - Cyber XL 270 GSM",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
        }
      },
      {
        "@type": "ListItem",
        "position": 6,
        "item": {
          "@type": "Product",
          "name": "Gold Foiling Luxury Bag 17x12x5 inch",
          "description": "Luxury paper bag with gold foiling - Cyber XL 300 GSM",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
        }
      },
      {
        "@type": "ListItem",
        "position": 7,
        "item": {
          "@type": "Product",
          "name": "Shopping Bag 15.25x18.65x4 inch",
          "description": "Eco-friendly shopping bag with paper handles - Viva Linear 160 GSM",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
        }
      },
      {
        "@type": "ListItem",
        "position": 8,
        "item": {
          "@type": "Product",
          "name": "White paperbags - EcoBagsFactory ecobags 12x16x4 inch",
          "description": "EcoBagsFactory premium white paperbags - ecobags with paper handles - 160 GSM sustainable packaging - Best paperbags and ecobags for retail",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "offers": { "@type": "Offer", "priceCurrency": "INR", "availability": "https://schema.org/InStock" }
        }
      }
    ]
  };

  const features = [
    {
      icon: Leaf,
      title: "100% Biodegradable",
      description: "Made from sustainable materials that naturally decompose",
    },
    {
      icon: Recycle,
      title: "Fully Recyclable",
      description: "Can be recycled multiple times without quality loss",
    },
    {
      icon: Package,
      title: "Custom Designs",
      description: "Personalize with your brand logo and colors",
    },
    {
      icon: Heart,
      title: "Earth Friendly",
      description: "Reduce your carbon footprint with every bag",
    },
  ];

  const products = [
    { id: 1, name: "Classic Kraft Bags", image: "/product-1.jpg", alt: "Classic eco-friendly kraft paper bags for retail and shopping - 100% recyclable ecobags paperbags" },
    { id: 2, name: "Premium White Bags", image: "/product-2.jpg", alt: "Premium white paper bags eco bags for boutiques and gift shops - sustainable packaging paperbags" },
    { id: 3, name: "Custom Printed Bags", image: "/product-3.jpg", alt: "Custom printed paper bags ecobags with brand logo - personalized eco-friendly packaging paperbags" },
  ];

  const varieties = [
    {
      id: 1,
      image: "/varieties/1.png",
      size: "9x8x8 inch",
      color: "Two Colour",
      handles: "Thread Handles",
      paper: "Brown 140 GSM",
      alt: "9x8x8 inch eco-friendly paper bags ecobags kraft paperbags with thread handles - Brown 140 GSM eco bags manufacturer",
    },
    {
      id: 2,
      image: "/varieties/2.png",
      size: "12x8x3.5 inch",
      color: "Multi Colour",
      handles: "Thread Handles",
      paper: "Spot UV Coating",
      alt: "12x8x3.5 inch custom printed paper bags ecobags with Spot UV coating - personalized paperbags eco bags India",
    },
    {
      id: 3,
      image: "/varieties/3.png",
      size: "6x6x4 inch",
      color: "Multi Colour",
      handles: "Thread Handles",
      paper: "Cyber XL 220 GSM Gloss Lamination",
      alt: "6x6x4 inch premium paper bags ecobags with gloss lamination - luxury paperbags eco bags gift bags India",
    },
    {
      id: 4,
      image: "/varieties/4.png",
      size: "14x10x4 inch",
      color: "Multi Colour",
      handles: "Special Handles",
      paper: "Cyber XL 250 GSM Matt Lamination",
      alt: "14x10x4 inch luxury paper bags ecobags with matt lamination - premium paperbags eco bags shopping bags wholesale",
    },
    {
      id: 5,
      image: "/varieties/5.png",
      size: "15x12x4 inch",
      color: "Multi Colour",
      handles: "Satin Ribbon",
      paper: "Cyber XL 270 GSM",
      alt: "15x12x4 inch premium gift bags ecobags with satin ribbon - luxury paper bags paperbags eco bags India",
    },
    {
      id: 6,
      image: "/varieties/6.png",
      size: "17x12x5 inch",
      color: "Multi Colour",
      handles: "Thread Handles",
      paper: "Cyber XL 300 GSM Gold Foiling",
      alt: "17x12x5 inch luxury paper bags ecobags with gold foiling - premium paperbags eco bags shopping bags manufacturer",
    },
    {
      id: 7,
      image: "/varieties/7.png",
      size: "15.25x18.65x4 inch",
      color: "Multi Colour",
      handles: "Paper Handles",
      paper: "Viva Linear 160 GSM",
      alt: "15.25x18.65x4 inch eco-friendly shopping bags ecobags with paper handles - sustainable paperbags eco bags bulk wholesale",
    },
    {
      id: 8,
      image: "/varieties/8.png",
      size: "12x16x4 inch",
      color: "Two Colour",
      handles: "Paper Handles",
      paper: "White 160 GSM",
      alt: "12x16x4 inch white paper bags ecobags with paper handles - 160 GSM sustainable paperbags eco bags packaging India",
    },
  ];

  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ecobagsfactory.org/"
      }
    ]
  };

  // Additional Product Offers Schema for SEO
  const offersSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "name": "EcoBagsFactory ecobags and paperbags Collection",
    "description": "EcoBagsFactory premium ecobags, paperbags, kraft bags, custom printed ecobags, gift paperbags, shopping bags - buy ecobags online, wholesale paperbags, bulk orders available",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Kraft paperbags - EcoBagsFactory ecobags",
          "description": "EcoBagsFactory brown kraft paperbags ecobags for retail, shopping, wholesale - buy ecobags online",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "category": "ecobags paperbags"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Custom Printed paperbags - EcoBagsFactory ecobags",
          "description": "EcoBagsFactory custom printed ecobags paperbags with logo, personalized paperbags, branded ecobags",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "category": "Custom ecobags paperbags"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "White paperbags - Premium EcoBagsFactory ecobags",
          "description": "EcoBagsFactory premium white paperbags ecobags for boutiques, gift shops, retail - buy paperbags online",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "category": "Premium ecobags paperbags"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Gift paperbags - Luxury EcoBagsFactory ecobags",
          "description": "EcoBagsFactory luxury gift paperbags ecobags with custom designs, wholesale ecobags and paperbags available",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "category": "Gift ecobags paperbags"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Shopping paperbags - Bulk EcoBagsFactory ecobags",
          "description": "EcoBagsFactory shopping paperbags ecobags bulk wholesale orders, buy paperbags online India, ecobags supplier",
          "brand": { "@type": "Brand", "name": "EcoBagsFactory" },
          "category": "Wholesale ecobags paperbags"
        }
      }
    ]
  };

  return (
    <div className="pt-20">
      {/* Hidden SEO Schemas - Not visible in UI but powerful for search rankings */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offersSchema) }}
      />
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose EcoBags?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sustainable solutions that don&apos;t compromise on quality or style
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="hover-lift border-border/50 bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Manufacturing <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              State-of-the-art machinery meets skilled craftsmanship to deliver premium quality
            </p>
          </div>

          <div className="mt-12">
            <FactoryShowcase />
          </div>
        </div>
      </section>

      {/* Our Varieties Section */}
      <section className="py-20 earth-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Varieties</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of paper bags with custom sizes, colors, and finishes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {varieties.map((variety, index) => (
              <Card
                key={variety.id}
                className="hover-lift overflow-hidden border-border/50 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-64 overflow-hidden bg-secondary/30">
                  <div className="relative w-full h-full p-4">
                    <div className="relative w-full h-full overflow-hidden">
                      <Image
                        src={variety.image}
                        alt={variety.alt}
                        width={400}
                        height={400}
                        className="w-full h-[120%] object-contain group-hover:scale-105 transition-transform duration-300"
                        style={{ marginTop: '-8%' }}
                      />
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4 pb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary shrink-0" />
                      <p className="text-sm font-semibold text-foreground">
                        {variety.size}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {variety.color}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 shrink-0 mt-0.5">
                        <div className="w-full h-full border-2 border-primary/40 rounded" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {variety.handles}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground font-medium">
                        {variety.paper}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/custom-orders">
              <Button size="lg" className="eco-gradient text-white cursor-pointer">
                Order Custom Bags
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular eco-friendly paper bag collections
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
              <Card key={product.id} className="hover-lift overflow-hidden border-border/50">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    High-quality, sustainable paper bags
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <Button size="lg" variant="outline" className="bg-background">
                View All Products
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Hidden FAQ Schema for SEO (not visible in UI) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is EcoBagsFactory and what are ecobags and paperbags?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EcoBagsFactory is India's leading manufacturer of ecobags and paperbags. ecobags (also known as eco bags) and paperbags (paper bags) are environmentally friendly alternatives to plastic bags. Made from 100% recyclable and biodegradable materials, ecobags and paperbags from EcoBagsFactory help reduce plastic waste and are perfect for businesses looking to adopt sustainable packaging solutions."
                }
              },
              {
                "@type": "Question",
                "name": "Where can I buy ecobags and paperbags online in India?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EcoBagsFactory is the leading ecobags and paperbags manufacturer in India. You can buy ecobags online and order paperbags at wholesale prices directly from EcoBagsFactory. We offer bulk ecobags, custom printed paperbags, kraft bags, gift bags, and shopping bags with fast shipping across India. Visit ecobagsfactory.org to buy ecobags and paperbags online."
                }
              },
              {
                "@type": "Question",
                "name": "Can I customize ecobags and paperbags with my brand logo?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! At EcoBagsFactory, we specialize in custom printed ecobags and paperbags. You can personalize your ecobags and paperbags with your brand logo, colors, and design. EcoBagsFactory offers various printing options for paperbags including Spot UV, gold foiling, and matt/gloss lamination on ecobags."
                }
              },
              {
                "@type": "Question",
                "name": "What sizes of ecobags and paperbags does EcoBagsFactory manufacture?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EcoBagsFactory produces ecobags and paperbags in all sizes - from small gift paperbags (6x6x4 inch) to large shopping ecobags (17x12x5 inch). EcoBagsFactory manufactures custom sizes of ecobags and paperbags to meet your specific requirements."
                }
              },
              {
                "@type": "Question",
                "name": "Are EcoBagsFactory ecobags and paperbags 100% eco-friendly and biodegradable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely! All EcoBagsFactory ecobags and paperbags are made from 100% recyclable and biodegradable materials. Unlike plastic bags, our eco-friendly ecobags and paperbags naturally decompose without harming the environment. EcoBagsFactory paperbags can also be recycled multiple times."
                }
              },
              {
                "@type": "Question",
                "name": "What is the minimum order quantity for bulk ecobags and paperbags from EcoBagsFactory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "At EcoBagsFactory, we offer flexible minimum order quantities for both plain and custom printed ecobags and paperbags. Whether you need 500 pieces of ecobags for a small business or 50,000+ paperbags for large retail chains, EcoBagsFactory can accommodate your bulk ecobags and paperbags order. Contact us for the best wholesale prices on ecobags and paperbags in India."
                }
              }
            ]
          })
        }}
      />

      {/* Our Clients Section - Infinite Auto Scroll */}
      <section className="py-20 earth-gradient overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Trusted Clients</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proud to serve leading brands with premium eco-friendly packaging solutions
            </p>
          </div>

          {/* Infinite Auto-Scrolling Container */}
          <div className="relative">
            <div className="flex gap-6 animate-infinite-scroll hover:pause-animation">
              {/* First set of clients */}
              {[
                { name: "Neerus", image: "/clients/neerus.png", alt: "Neerus client EcoBagsFactory ecobags paperbags manufacturer Hyderabad - premium ecobags hyd paper bags supplier India" },
                { name: "Almond House", image: "/clients/almond-house.png", alt: "Almond House client EcoBagsFactory ecobags paperbags manufacturer - custom printed ecobags paper bags Hyderabad" },
                { name: "Ramraj Cotton", image: "/clients/ramraj.png", alt: "Ramraj Cotton client EcoBagsFactory ecobags paperbags - eco friendly paper bags ecobags hyd manufacturer India" },
                { name: "G. Pulla Reddy Sweets", image: "/clients/g-pulla-reddy.png", alt: "G Pulla Reddy Sweets client EcoBagsFactory ecobags paperbags - wholesale ecobags paper bags manufacturer Hyderabad" },
                { name: "Cafe Niloufer", image: "/clients/cafe-niloufer.png", alt: "Cafe Niloufer client EcoBagsFactory ecobags paperbags - biodegradable ecobags paper bags supplier hyd India" },
              ].map((client) => (
                <Card
                  key={`${client.name}-1`}
                  className="shrink-0 w-64 p-6 bg-card border-border/50 group hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-28 flex items-center justify-center">
                    <Image
                      src={client.image}
                      alt={client.alt}
                      width={250}
                      height={120}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </Card>
              ))}
              {/* Duplicate set for infinite effect */}
              {[
                { name: "Neerus", image: "/clients/neerus.png", alt: "Neerus client EcoBagsFactory ecobags paperbags manufacturer Hyderabad - premium ecobags hyd paper bags supplier India" },
                { name: "Almond House", image: "/clients/almond-house.png", alt: "Almond House client EcoBagsFactory ecobags paperbags manufacturer - custom printed ecobags paper bags Hyderabad" },
                { name: "Ramraj Cotton", image: "/clients/ramraj.png", alt: "Ramraj Cotton client EcoBagsFactory ecobags paperbags - eco friendly paper bags ecobags hyd manufacturer India" },
                { name: "G. Pulla Reddy Sweets", image: "/clients/g-pulla-reddy.png", alt: "G Pulla Reddy Sweets client EcoBagsFactory ecobags paperbags - wholesale ecobags paper bags manufacturer Hyderabad" },
                { name: "Cafe Niloufer", image: "/clients/cafe-niloufer.png", alt: "Cafe Niloufer client EcoBagsFactory ecobags paperbags - biodegradable ecobags paper bags supplier hyd India" },
              ].map((client) => (
                <Card
                  key={`${client.name}-2`}
                  className="shrink-0 w-64 p-6 bg-card border-border/50 group hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-28 flex items-center justify-center">
                    <Image
                      src={client.image}
                      alt={client.alt}
                      width={250}
                      height={120}
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Join these industry leaders in choosing sustainable packaging
            </p>
            <Link href="/contact">
              <Button size="lg" className="eco-gradient text-white cursor-pointer">
                Become a Partner
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="eco-gradient border-0 overflow-hidden">
            <CardContent className="p-12 text-center text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Ready to Go Green?
              </h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of businesses making the switch to sustainable packaging
              </p>
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90 cursor-pointer">
                  Get Started Today
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

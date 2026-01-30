import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Package, Heart, Download, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Metadata } from "next";
import FactoryShowcase from "@/components/FactoryShowcase";

export const metadata: Metadata = {
  title: "Paperbags Manufacturer India | EcoBagsFactory | Paper Bags Manufacturer - ecobags paperbags",
  description: "EcoBagsFactory - Leading paperbags manufacturer in India. Premier paper bags manufacturer offering custom paperbags manufacturing, wholesale ecobags manufacturing, bulk production. Trusted paperbags manufacturer in Hyderabad, India, and UK. Professional ecobags manufacturer and paperbags manufacturer delivering 100% recyclable bags. Buy from the best paperbags manufacturer - EcoBagsFactory delivers across India.",
  keywords: ["paperbags manufacturer", "paperbags manufacturer India", "paperbags manufacturer Hyderabad", "paperbags manufacturer hyd", "paperbags manufacturer UK", "paper bags manufacturer", "paper bags manufacturer India", "ecobags manufacturer", "ecobags manufacturer India", "EcoBagsFactory", "EcoBags Factory", "EcoBagsFactory hyd", "Eco Bags Factory", "custom paperbags manufacturer", "printed paperbags manufacturer", "kraft paperbags manufacturer", "wholesale paperbags manufacturer", "bulk paperbags manufacturer", "shopping bags manufacturer", "gift bags manufacturer", "grocery bags manufacturer", "retail bags manufacturer", "carry bags manufacturer", "recyclable bags manufacturer", "biodegradable bags manufacturer", "sustainable packaging manufacturer", "eco friendly bags manufacturer"],
  openGraph: {
    title: "Paperbags Manufacturer India | EcoBagsFactory - Paper Bags Manufacturer",
    description: "EcoBagsFactory - Leading paperbags manufacturer in India. Premier paper bags manufacturer. Custom paperbags manufacturing, wholesale, bulk orders. Trusted paperbags manufacturer delivering nationwide.",
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
    { id: 1, name: "Classic Kraft Bags", image: "/product-1.jpg", alt: "EcoBagsFactory Paperbags Manufacturer - Classic kraft paper bags manufacturing - Professional paper bags manufacturer India - Wholesale kraft paperbags manufacturer - 100% recyclable ecobags manufacturing" },
    { id: 2, name: "Premium White Bags", image: "/product-2.jpg", alt: "EcoBagsFactory Paper Bags Manufacturer - Premium white paperbags manufacturing - Custom white paper bags manufacturer Hyderabad - Boutique paperbags manufacturer - Sustainable packaging manufacturer" },
    { id: 3, name: "Custom Printed Bags", image: "/product-3.jpg", alt: "EcoBagsFactory Paperbags Manufacturer - Custom printed paperbags manufacturing - Branded paper bags manufacturer India - Logo printing paperbags manufacturer - Personalized ecobags manufacturer" },
  ];

  const collections = [
    { id: 1, name: "Neerus Collection", image: "/Collections/Neerus.jpeg", alt: "Neerus custom printed ecobags paperbags EcoBagsFactory manufacturer Hyderabad - premium paper bags hyd India" },
    { id: 2, name: "Almond House Collection", image: "/Collections/Almond-house.jpeg", alt: "Almond House branded ecobags paperbags EcoBagsFactory - custom paper bags manufacturer Hyderabad India" },
    { id: 3, name: "Ramraj Collection", image: "/Collections/Ramraj.jpeg", alt: "Ramraj Cotton ecobags paperbags EcoBagsFactory - wholesale paper bags manufacturer Hyderabad hyd" },
    { id: 4, name: "Pulla Reddy Sweets Collection", image: "/Collections/Pulla-reddy-sweets.jpeg", alt: "Pulla Reddy Sweets ecobags paperbags EcoBagsFactory - custom branded paper bags Hyderabad India" },
    { id: 5, name: "Cafe Niloufer Collection", image: "/Collections/Cafe-niloufer.jpeg", alt: "Cafe Niloufer ecobags paperbags EcoBagsFactory - eco friendly paper bags manufacturer hyd Hyderabad" },
    { id: 6, name: "Brand Dot Collection", image: "/Collections/Brand-dot.jpeg", alt: "Brand Dot custom ecobags paperbags EcoBagsFactory - printed paper bags manufacturer Hyderabad India" },
    { id: 7, name: "Saravana Collection", image: "/Collections/Saravana.jpeg", alt: "Saravana ecobags paperbags EcoBagsFactory - bulk paper bags manufacturer supplier Hyderabad hyd India" },
    { id: 8, name: "Cherrys Collection", image: "/Collections/Cherrys.jpeg", alt: "Cherrys custom ecobags paperbags EcoBagsFactory - premium paper bags manufacturer Hyderabad India" },
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

      {/* Download Brochure Section */}
      <section className="py-16 bg-muted/30" aria-labelledby="brochure-heading">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border-primary/20 bg-gradient-to-r from-primary/5 to-primary/10">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-full bg-primary/10">
                    <FileText className="w-10 h-10 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 id="brochure-heading" className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                      Download Our Brochure
                    </h3>
                    <p className="text-muted-foreground max-w-md">
                      Get detailed information about our products, services, and manufacturing capabilities
                    </p>
                  </div>
                </div>
                <a
                  href="/Browcher/ECO BAG FACTORY BROCHURE.pdf"
                  download="EcoBagsFactory-Brochure.pdf"
                  className="shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label="Download EcoBagsFactory product brochure PDF"
                >
                  <Button size="lg" className="eco-gradient text-white cursor-pointer gap-2">
                    <Download className="w-5 h-5" aria-hidden="true" />
                    Download PDF Brochure
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
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

      {/* Our Collections Section */}
      <section className="py-20 earth-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Collections</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium paperbags manufactured by EcoBagsFactory for leading brands
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((collection, index) => (
              <Card
                key={collection.id}
                className="hover-lift overflow-hidden border-border/50 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-72 overflow-hidden bg-secondary/30">
                  <Image
                    src={collection.image}
                    alt={collection.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-foreground text-center">
                    {collection.name}
                  </h3>
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

      {/* Additional FAQ Schema targeting "Paperbags Manufacturer" keywords */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is EcoBagsFactory?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EcoBagsFactory is a leading paperbags manufacturer in India, based in Hyderabad. We specialize in custom paper bags manufacturing, wholesale production, and eco-friendly packaging solutions. As a premier paperbags manufacturer, we serve businesses across India, UK, and USA."
                }
              },
              {
                "@type": "Question",
                "name": "Where is the paperbags manufacturer located?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "EcoBagsFactory paperbags manufacturing facility is located at Plot No. 91, Rajiv Gandhi Nagar, Kukatpally, Hyderabad - 500072, India. As a paperbags manufacturer in Hyderabad, we deliver paper bags across India, UK, and USA."
                }
              },
              {
                "@type": "Question",
                "name": "What types of paper bags do you manufacture?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "As a comprehensive paperbags manufacturer, we produce kraft paper bags, white paper bags, custom printed bags, gift bags, shopping bags, and food packaging. All bags from our paper bags manufacturer facility are 100% recyclable and eco-friendly."
                }
              },
              {
                "@type": "Question",
                "name": "What is the minimum order quantity for paperbags manufacturing?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our minimum order quantity starts from 500 pieces for custom paper bags manufacturing. For wholesale paperbags manufacturing orders, we offer competitive bulk pricing. Contact our paperbags manufacturer team for detailed quotes."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer custom printing on paper bags?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, as a professional paperbags manufacturer, we offer custom printing including logo printing, full-color printing, foil stamping, spot UV, and embossing on all paper bags. Our paper bags manufacturer facility has advanced printing capabilities."
                }
              },
              {
                "@type": "Question",
                "name": "How to contact the paperbags manufacturer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Contact EcoBagsFactory paperbags manufacturer at +91 9949826222 or email eco4bags@gmail.com. Visit our website ecobagsfactory.org for custom paper bags manufacturing quotes. We are the trusted paperbags manufacturer in Hyderabad, India."
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

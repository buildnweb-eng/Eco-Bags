import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Leaf, Recycle, Award, Truck, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Eco Bags Hyderabad | #1 Paper Bags Manufacturer | EcoBagsFactory",
  description: "Looking for eco bags in Hyderabad? EcoBagsFactory is the leading manufacturer of eco-friendly paper bags. Custom printing, wholesale pricing, fast delivery across Hyderabad. Call +91 9949826222.",
  keywords: ["eco bags hyderabad", "eco bags hyd", "paper bags hyderabad", "eco-friendly bags hyderabad", "paper bags manufacturer hyderabad", "custom paper bags hyderabad", "wholesale paper bags hyderabad"],
  openGraph: {
    title: "Eco Bags Hyderabad - #1 Paper Bags Manufacturer",
    description: "Premium eco-friendly paper bags manufacturer in Hyderabad. Custom printing, wholesale pricing, all areas covered.",
    images: ["/hero-bags.jpg"],
    locale: "en_IN",
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/eco-bags-hyderabad",
  },
};

export default function EcoBagsHyderabad() {
  const areas = [
    "Kukatpally", "Secunderabad", "Banjara Hills", "Madhapur", "Gachibowli",
    "HITEC City", "Jubilee Hills", "Kondapur", "Miyapur", "Ameerpet",
    "Begumpet", "Somajiguda", "Uppal", "LB Nagar", "Dilsukhnagar"
  ];

  const features = [
    { icon: Leaf, title: "100% Eco-Friendly", description: "Biodegradable and sustainable materials" },
    { icon: Recycle, title: "Fully Recyclable", description: "Can be recycled multiple times" },
    { icon: Award, title: "Premium Quality", description: "Best-in-class manufacturing" },
    { icon: Truck, title: "Fast Delivery", description: "Quick delivery across Hyderabad" },
  ];

  const products = [
    { name: "Kraft Paper Bags", description: "Durable eco-friendly kraft bags for retail" },
    { name: "Custom Printed Bags", description: "Your brand logo printed with precision" },
    { name: "White Premium Bags", description: "Elegant bags for boutiques and gifts" },
    { name: "Shopping Bags", description: "Strong bags for everyday shopping needs" },
    { name: "Gift Bags", description: "Beautiful bags for special occasions" },
    { name: "Grocery Bags", description: "Food-safe bags for groceries" },
  ];

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "EcoBagsFactory - Eco Bags Hyderabad",
    "image": "https://ecobagsfactory.org/hero-bags.jpg",
    "description": "Premier eco-friendly paper bags manufacturer in Hyderabad. Custom printed bags, kraft bags, shopping bags. 100% recyclable.",
    "url": "https://ecobagsfactory.org/eco-bags-hyderabad",
    "telephone": "+91-9949826222",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 91, Rajiv Gandhi Nagar, Prashanthi Nagar, Kukatpally",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500072",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4947",
      "longitude": "78.3996"
    },
    "areaServed": {
      "@type": "City",
      "name": "Hyderabad"
    },
    "priceRange": "$$"
  };

  return (
    <div className="pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Hyderabad&apos;s #1 Choice</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Eco Bags <span className="text-primary">Hyderabad</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Looking for eco-friendly paper bags in Hyderabad? EcoBagsFactory is the leading
              manufacturer of sustainable, recyclable paper bags. Custom printing available
              with fast delivery across all Hyderabad areas.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Get Custom Quote
                </Button>
              </Link>
              <a href="tel:+919949826222">
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>10M+ Bags Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>5000+ Happy Clients</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <Image
              src="/hero-bags.jpg"
              alt="Eco bags Hyderabad - EcoBagsFactory eco-friendly paper bags collection"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
              priority
            />
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift border-border/50">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Products Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            Paper Bags We Manufacture in <span className="text-primary">Hyderabad</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Wide range of eco-friendly paper bags for businesses across Hyderabad
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <Link href="/products">
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-4xl font-bold text-center mb-4">
            Areas We Serve in <span className="text-primary">Hyderabad</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-8">
            Fast delivery of eco-friendly paper bags across all Hyderabad locations
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {areas.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose EcoBagsFactory for <span className="text-primary">Eco Bags in Hyderabad</span>?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Local Manufacturing</h3>
                  <p className="text-muted-foreground">Based in Kukatpally, Hyderabad - faster turnaround and delivery</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Competitive Pricing</h3>
                  <p className="text-muted-foreground">Best wholesale rates for bulk orders in Hyderabad</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Custom Printing</h3>
                  <p className="text-muted-foreground">High-quality logo and brand printing on all bag types</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Wide Variety</h3>
                  <p className="text-muted-foreground">Multiple sizes, GSM options, handle types, and finishes</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Eco-Friendly Promise</h3>
                  <p className="text-muted-foreground">100% biodegradable and recyclable materials</p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-1">Expert Support</h3>
                  <p className="text-muted-foreground">Dedicated team to help with design and specifications</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <Card className="eco-gradient border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Order Eco Bags in Hyderabad?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get premium quality eco-friendly paper bags with custom printing.
              Contact us today for the best prices in Hyderabad.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/custom-orders">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  Request Quote
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
            <div className="flex justify-center gap-8 mt-8 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9949826222</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Mon-Sat: 9AM-7PM</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

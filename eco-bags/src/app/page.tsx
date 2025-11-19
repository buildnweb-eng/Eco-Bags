import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Package, Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
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
    { id: 1, name: "Classic Kraft Bags", image: "/product-1.jpg" },
    { id: 2, name: "Premium White Bags", image: "/product-2.jpg" },
    { id: 3, name: "Custom Printed Bags", image: "/product-3.jpg" },
  ];

  const varieties = [
    {
      id: 1,
      image: "/varieties/1.png",
      size: "9x8x8 inch",
      color: "Two Colour",
      handles: "Thread Handles",
      paper: "Brown 140 GSM",
    },
    {
      id: 2,
      image: "/varieties/2.png",
      size: "12x8x3.5 inch",
      color: "Multi Colour",
      handles: "Thread Handles",
      paper: "Spot UV Coating",
    },
    {
      id: 3,
      image: "/varieties/3.png",
      size: "6x6x4 inch",
      color: "Multi Colour",
      handles: "Thread Handles",
      paper: "Cyber XL 220 GSM Gloss Lamination",
    },
    {
      id: 4,
      image: "/varieties/4.png",
      size: "14x10x4 inch",
      color: "Multi Colour",
      handles: "Special Handles",
      paper: "Cyber XL 250 GSM Matt Lamination",
    },
    {
      id: 5,
      image: "/varieties/5.png",
      size: "15x12x4 inch",
      color: "Multi Colour",
      handles: "Satin Ribbon",
      paper: "Cyber XL 270 GSM",
    },
    {
      id: 6,
      image: "/varieties/6.png",
      size: "17x12x5 inch",
      color: "Multi Colour",
      handles: "Thread Handles",
      paper: "Cyber XL 300 GSM Gold Foiling",
    },
    {
      id: 7,
      image: "/varieties/7.png",
      size: "15.25x18.65x4 inch",
      color: "Multi Colour",
      handles: "Paper Handles",
      paper: "Viva Linear 160 GSM",
    },
    {
      id: 8,
      image: "/varieties/8.png",
      size: "12x16x4 inch",
      color: "Two Colour",
      handles: "Paper Handles",
      paper: "White 160 GSM",
    },
  ];

  return (
    <div className="pt-20">
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
                  <Image
                    src={variety.image}
                    alt={`Paper bag variety ${variety.id}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="pt-4 pb-6">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4 text-primary flex-shrink-0" />
                      <p className="text-sm font-semibold text-foreground">
                        {variety.size}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-muted-foreground">
                        {variety.color}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 flex-shrink-0 mt-0.5">
                        <div className="w-full h-full border-2 border-primary/40 rounded" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {variety.handles}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
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
                  alt={product.name}
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

      {/* CTA Section */}
      <section className="py-20 earth-gradient">
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

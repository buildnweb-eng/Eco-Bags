import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products - Eco-friendly Paper Bags Collection",
  description: "Explore our range of sustainable paper bags: Classic Kraft Bags, Premium White Bags, and Custom Printed Bags. All sizes available. 100% recyclable and biodegradable.",
  keywords: ["kraft paper bags", "custom printed bags", "white paper bags", "shopping bags", "gift bags", "recyclable paper bags", "paper bags wholesale"],
  openGraph: {
    title: "EcoBagsFactory Products - Sustainable Paper Bags",
    description: "High-quality eco-friendly paper bags in various sizes and designs. Custom printing available.",
    images: ["/product-1.jpg"],
  },
};

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Classic Kraft Bags",
      image: "/product-1.jpg",
      alt: "Durable eco-friendly kraft paper bags with twisted handles - recyclable and biodegradable",
      description: "Durable and eco-friendly kraft paper bags perfect for retail",
      sizes: ["Small", "Medium", "Large", "Extra Large"],
      features: ["Twisted paper handles", "100% recyclable", "Biodegradable"],
    },
    {
      id: 2,
      name: "Premium White Bags",
      image: "/product-2.jpg",
      alt: "Elegant premium white paper bags with reinforced handles - ideal for boutiques and gift shops",
      description: "Elegant white paper bags ideal for boutiques and gift shops",
      sizes: ["Small", "Medium", "Large"],
      features: ["Reinforced handles", "Premium finish", "Customizable"],
    },
    {
      id: 3,
      name: "Custom Printed Bags",
      image: "/product-3.jpg",
      alt: "Custom printed paper bags with full color brand logo and personalized design",
      description: "Personalized bags with your brand logo and design",
      sizes: ["All sizes available"],
      features: ["Full color printing", "Brand customization", "Bulk discounts"],
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Discover our range of sustainable, high-quality paper bags designed 
            for businesses of all sizes
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="hover-lift border-border/50 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={400}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {product.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2">
                    Available Sizes:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-2">
                    Features:
                  </h4>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact">
                  <Button className="w-full eco-gradient text-white">
                    <ShoppingBag className="mr-2 w-4 h-4" />
                    Order Now
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <Card className="earth-gradient border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer fully customizable options to match your brand identity
            </p>
            <Link href="/custom-orders">
              <Button size="lg" variant="outline" className="bg-background">
                Explore Custom Orders
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


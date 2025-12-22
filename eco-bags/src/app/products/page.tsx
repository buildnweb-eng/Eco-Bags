import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EcoBagsFactory Products | ecobags paperbags Hyderabad - Custom Paper Bags Manufacturer India",
  description: "EcoBagsFactory ecobags paperbags manufacturer Hyderabad - Browse our premium collection of custom printed ecobags, kraft paperbags, wholesale paper bags. Buy ecobags hyd India. Real client projects showcase.",
  keywords: ["ecobags", "paperbags", "EcoBagsFactory", "ecobags hyd", "paper bags Hyderabad", "ecobags manufacturer", "paperbags manufacturer", "custom printed bags", "kraft paper bags", "wholesale paper bags", "ecobags India", "paperbags supplier", "buy ecobags online", "paper bags wholesale"],
  openGraph: {
    title: "EcoBagsFactory Products - ecobags paperbags Manufacturer Hyderabad",
    description: "Premium ecobags and paperbags manufacturer in Hyderabad. Custom printed paper bags for brands across India. View our real client projects.",
    images: ["/product-1.jpg"],
  },
};

type Collection = {
  name: string;
  image: string;
  alt: string;
  specs?: string;
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
    <div className="pt-16 pb-20">
      <div className="container mx-auto px-4">
        {/* Our Collections - Real Projects Gallery */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Collections</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium   paperbags manufactured by EcoBagsFactory
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "Neerus Collection", image: "/Collections/Neerus.jpeg", alt: "Neerus custom printed ecobags paperbags EcoBagsFactory manufacturer Hyderabad - premium paper bags hyd India" },
              { name: "Almond House Collection", image: "/Collections/Almond-house.jpeg", alt: "Almond House branded ecobags paperbags EcoBagsFactory - custom paper bags manufacturer Hyderabad India" },
              { name: "Ramraj Collection", image: "/Collections/Ramraj.jpeg", alt: "Ramraj Cotton ecobags paperbags EcoBagsFactory - wholesale paper bags manufacturer Hyderabad hyd" },
              { name: "Pulla Reddy Sweets Collection", image: "/Collections/Pulla-reddy-sweets.jpeg", alt: "Pulla Reddy Sweets ecobags paperbags EcoBagsFactory - custom branded paper bags Hyderabad India" },
              { name: "Cafe Niloufer Collection", image: "/Collections/Cafe-niloufer.jpeg", alt: "Cafe Niloufer ecobags paperbags EcoBagsFactory - eco friendly paper bags manufacturer hyd Hyderabad" },
              { name: "Brand Dot Collection", image: "/Collections/Brand-dot.jpeg", alt: "Brand Dot custom ecobags paperbags EcoBagsFactory - printed paper bags manufacturer Hyderabad India" },
              { name: "Saravana Collection", image: "/Collections/Saravana.jpeg", alt: "Saravana ecobags paperbags EcoBagsFactory - bulk paper bags manufacturer supplier Hyderabad hyd India" },
              { name: "Cherrys Collection", image: "/Collections/Cherrys.jpeg", alt: "Cherrys custom ecobags paperbags EcoBagsFactory - premium paper bags manufacturer Hyderabad India" },
              { name: "Chennai Jewellers Collection", image: "/Collections/chennai-jewllers.jpeg", alt: "Chennai Jewellers luxury ecobags paperbags EcoBagsFactory - premium paper bags manufacturer Hyderabad India" },
              { name: "Neeraj Collection", image: "/Collections/neeraj.jpeg", alt: "Neeraj custom branded ecobags paperbags EcoBagsFactory - paper bags manufacturer Hyderabad hyd India" },
              { name: "Tanika Collection", image: "/Collections/Tanika.jpeg", alt: "Tanika fashion ecobags paperbags EcoBagsFactory - custom printed paper bags manufacturer Hyderabad India" },
              { name: "Tyohaar Collection", image: "/Collections/Tyohaar.jpeg", alt: "Tyohaar festive ecobags paperbags EcoBagsFactory - custom paper bags manufacturer Hyderabad hyd India" },
              { name: "Paper Bags Collection", image: "/Collections/bags.jpeg", alt: "EcoBagsFactory ecobags paperbags collection - wholesale paper bags manufacturer supplier Hyderabad hyd India" },
              { name: "Top Chop", image: "/Collections/Top-chop.jpeg", alt: "Top Chop ecobags paperbags EcoBagsFactory - 10x12x7.5 inch 140 GSM single colour print paper handles Hyderabad", specs: "10×12×7.5 | 140 GSM | Single Colour" },
              { name: "Golden Shade Brown", image: "/Collections/Golden-shade-brown.jpeg", alt: "Golden Shade Brown ecobags paperbags EcoBagsFactory - 12x11x4 inch 140 GSM paper handles manufacturer Hyderabad", specs: "12×11×4 | 140 GSM" },
              { name: "Khaba", image: "/Collections/khabab.jpeg", alt: "Khaba ecobags paperbags EcoBagsFactory - 12x13.5x12 inch 160 GSM white viva linear multi colour print paper handles Hyderabad", specs: "12×13.5×12 | 160 GSM | Multi Colour" },
            ].map((collection, index) => (
              <Card
                key={collection.name}
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
                  {collection.specs && (
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      {collection.specs}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Products Grid - Eco Bags Hyderabad Collection */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Eco Bags <span className="text-primary">Product Types</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our premium range of paper bags for your business needs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
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
                          <Check className="w-4 h-4 text-primary shrink-0" />
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


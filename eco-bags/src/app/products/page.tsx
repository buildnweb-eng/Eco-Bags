import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Check, Package, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "EcoBagsFactory Products | Paperbags Manufacturer India | Paper Bags Catalog Hyderabad",
  description: "EcoBagsFactory paperbags manufacturer products - Browse premium paper bags from India's leading paperbags manufacturer. Custom printed bags, kraft paperbags, wholesale paper bags. Trusted paperbags manufacturer in Hyderabad serving India, UK, USA.",
  keywords: [
    "EcoBagsFactory products",
    "paperbags manufacturer products",
    "paperbags manufacturer India catalog",
    "paper bags manufacturer Hyderabad",
    "paperbags manufacturer",
    "paperbags manufacturer India",
    "paperbags manufacturer Hyderabad",
    "ecobags manufacturer",
    "custom printed bags manufacturer",
    "kraft paper bags manufacturer",
    "wholesale paper bags manufacturer",
    "paper bags Hyderabad",
    "ecobags hyd",
    "paperbags supplier India",
    "bulk paper bags manufacturer"
  ],
  openGraph: {
    title: "EcoBagsFactory Products - Paperbags Manufacturer India | Paper Bags Catalog",
    description: "Premium paper bags from India's leading paperbags manufacturer. Custom printed bags, kraft paperbags, wholesale orders. Paperbags manufacturer in Hyderabad.",
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
    <div className="pt-16 pb-20">
      <div className="container mx-auto px-4">
        {/* Our Varieties - Paper Bags Gallery */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Varieties</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our diverse range of paper bags with custom sizes, colors, and finishes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { id: 1, image: "/varieties/1.png", size: "9x8x8 inch", color: "Two Colour", handles: "Thread Handles", paper: "Brown 140 GSM", alt: "9x8x8 inch eco-friendly paper bags ecobags kraft paperbags with thread handles - Brown 140 GSM eco bags manufacturer" },
              { id: 2, image: "/varieties/2.png", size: "12x8x3.5 inch", color: "Multi Colour", handles: "Thread Handles", paper: "Spot UV Coating", alt: "12x8x3.5 inch custom printed paper bags ecobags with Spot UV coating - personalized paperbags eco bags India" },
              { id: 3, image: "/varieties/3.png", size: "6x6x4 inch", color: "Multi Colour", handles: "Thread Handles", paper: "Cyber XL 220 GSM Gloss Lamination", alt: "6x6x4 inch premium paper bags ecobags with gloss lamination - luxury paperbags eco bags gift bags India" },
              { id: 4, image: "/varieties/4.png", size: "14x10x4 inch", color: "Multi Colour", handles: "Special Handles", paper: "Cyber XL 250 GSM Matt Lamination", alt: "14x10x4 inch luxury paper bags ecobags with matt lamination - premium paperbags eco bags shopping bags wholesale" },
              { id: 5, image: "/varieties/5.png", size: "15x12x4 inch", color: "Multi Colour", handles: "Satin Ribbon", paper: "Cyber XL 270 GSM", alt: "15x12x4 inch premium gift bags ecobags with satin ribbon - luxury paper bags paperbags eco bags India" },
              { id: 6, image: "/varieties/6.png", size: "17x12x5 inch", color: "Multi Colour", handles: "Thread Handles", paper: "Cyber XL 300 GSM Gold Foiling", alt: "17x12x5 inch luxury paper bags ecobags with gold foiling - premium paperbags eco bags shopping bags manufacturer" },
              { id: 7, image: "/varieties/7.png", size: "15.25x18.65x4 inch", color: "Multi Colour", handles: "Paper Handles", paper: "Viva Linear 160 GSM", alt: "15.25x18.65x4 inch eco-friendly shopping bags ecobags with paper handles - sustainable paperbags eco bags bulk wholesale" },
              { id: 8, image: "/varieties/8.png", size: "12x16x4 inch", color: "Two Colour", handles: "Paper Handles", paper: "White 160 GSM", alt: "12x16x4 inch white paper bags ecobags with paper handles - 160 GSM sustainable paperbags eco bags packaging India" },
            ].map((variety, index) => (
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
                      <Package className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                      <p className="text-sm font-semibold text-foreground">
                        {variety.size}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 rounded-full bg-primary/20 shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground">
                        {variety.color}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true">
                        <div className="w-full h-full border-2 border-primary/40 rounded" />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {variety.handles}
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Leaf className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground font-medium">
                        {variety.paper}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sweet Boxes & Food Packaging Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Sweet Boxes & <span className="text-primary">Food Packaging</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium quality food-grade packaging for sweets, cakes, and more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { id: 1, name: "Boat Trays", capacity: "500ml", size: "5L x 3.5W x 1.5H", paper: "240 GSM", image: "/Sweetboxes-and-other/1-removebg-preview.png", alt: "Boat trays 500ml food packaging - 240 GSM paper EcoBagsFactory Hyderabad" },
              { id: 2, name: "Cookies/Brownie Box", capacity: "", size: "3.5L x 3.5W x 2H", paper: "", image: "/Sweetboxes-and-other/2-removebg-preview.png", alt: "Cookies brownie box food packaging EcoBagsFactory Hyderabad" },
              { id: 3, name: "Window Pastry Box", capacity: "", size: "5L x 5W x 4.5H", paper: "220 GSM", image: "/Sweetboxes-and-other/3-removebg-preview.png", alt: "Window pastry box 220 GSM food packaging EcoBagsFactory Hyderabad" },
              { id: 4, name: "Sweet Box - Small", capacity: "250 gms", size: "5.75L x 3.75W x 1.5H", paper: "220 GSM", image: "/Sweetboxes-and-other/4-removebg-preview.png", alt: "Sweet box small 250 gms 220 GSM EcoBagsFactory Hyderabad" },
              { id: 5, name: "Sweet Box - Medium", capacity: "500 gms", size: "6.75L x 5W x 1.5H", paper: "220 GSM", image: "/Sweetboxes-and-other/5-removebg-preview.png", alt: "Sweet box medium 500 gms 220 GSM EcoBagsFactory Hyderabad" },
              { id: 6, name: "Sweet Box - Large", capacity: "1 kg", size: "10L x 6.75W x 1.5H", paper: "220 GSM", image: "/Sweetboxes-and-other/6-removebg-preview.png", alt: "Sweet box large 1kg 220 GSM EcoBagsFactory Hyderabad" },
              { id: 7, name: "Sweet Box - 250 gms", capacity: "250 gms", size: "6.5L x 4.75W x 1.5H", paper: "220 GSM", image: "/Sweetboxes-and-other/7-removebg-preview.png", alt: "Sweet box 250 gms 220 GSM paper quality EcoBagsFactory Hyderabad" },
              { id: 8, name: "Sweet Box - 500 gms", capacity: "500 gms", size: "9L x 7W x 1.5H", paper: "220 GSM", image: "/Sweetboxes-and-other/8-removebg-preview.png", alt: "Sweet box 500 gms medium 220 GSM EcoBagsFactory Hyderabad" },
              { id: 9, name: "Small Shawarma Box", capacity: "", size: "7L x 3W", paper: "240 GSM", image: "/Sweetboxes-and-other/9-removebg-preview.png", alt: "Small shawarma box 240 GSM paper EcoBagsFactory Hyderabad" },
              { id: 10, name: "Big Shawarma Box", capacity: "", size: "8L x 3.5W", paper: "240 GSM", image: "/Sweetboxes-and-other/10-removebg-preview.png", alt: "Big shawarma box 240 GSM paper EcoBagsFactory Hyderabad" },
              { id: 11, name: "Cake Box - Small", capacity: "", size: "7L x 5W x 3H", paper: "250 GSM", image: "/Sweetboxes-and-other/11-removebg-preview.png", alt: "Cake box small 250 GSM EcoBagsFactory Hyderabad" },
              { id: 12, name: "Cake Box - Medium", capacity: "", size: "10L x 10W x 5H", paper: "250 GSM", image: "/Sweetboxes-and-other/12-removebg-preview.png", alt: "Cake box medium 250 GSM EcoBagsFactory Hyderabad" },
              { id: 13, name: "Cake Box - Large", capacity: "", size: "12L x 12W x 5H", paper: "270 GSM", image: "/Sweetboxes-and-other/13-removebg-preview.png", alt: "Cake box large 270 GSM EcoBagsFactory Hyderabad" },
              { id: 14, name: "Sweet Boxes Collection", capacity: "", size: "", paper: "", image: "/Sweetboxes-and-other/14-removebg-preview.png", alt: "Sweet boxes collection food packaging EcoBagsFactory Hyderabad" },
              { id: 15, name: "Food Packaging Range", capacity: "", size: "", paper: "", image: "/Sweetboxes-and-other/15-removebg-preview.png", alt: "Food packaging range sweet boxes EcoBagsFactory Hyderabad" },
              { id: 16, name: "Packaging Varieties", capacity: "", size: "", paper: "", image: "/Sweetboxes-and-other/16-removebg-preview.png", alt: "Packaging varieties sweet boxes cake boxes EcoBagsFactory Hyderabad" },
            ].map((item, index) => (
              <Card
                key={item.id}
                className="hover-lift overflow-hidden border-border/50 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative h-64 overflow-hidden bg-secondary/30">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardContent className="pt-4 pb-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {item.name}
                  </h3>
                  <div className="space-y-1">
                    {item.size && (
                      <div className="flex items-center gap-2">
                        <Package className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                        <p className="text-sm text-muted-foreground">
                          {item.size}
                        </p>
                      </div>
                    )}
                    {item.capacity && (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-primary/20 shrink-0" aria-hidden="true" />
                        <p className="text-sm text-muted-foreground">
                          {item.capacity}
                        </p>
                      </div>
                    )}
                    {item.paper && (
                      <div className="flex items-center gap-2">
                        <Leaf className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                        <p className="text-sm text-muted-foreground font-medium">
                          {item.paper}
                        </p>
                      </div>
                    )}
                  </div>
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


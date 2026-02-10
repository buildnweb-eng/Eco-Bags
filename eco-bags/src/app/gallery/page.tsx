import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery - Paper Bag Manufacturer Hyderabad | EcoBagsFactory Product Showcase",
  description: "Browse our gallery of eco-friendly paper bags. See our diverse collection of sustainable packaging solutions, custom designs, and premium quality products.",
  keywords: ["paper bags gallery", "eco-friendly packaging showcase", "custom bag designs", "sustainable products", "paper bags portfolio", "paper bag manufacturer", "paper bag manufacturer hyderabad", "paper bag manufacturer gallery"],
  openGraph: {
    title: "EcoBagsFactory Gallery - Eco-friendly Paper Bags",
    description: "Browse our stunning collection of sustainable paper bags and custom designs.",
    images: ["/product-1.jpg"],
  },
};

export default function Gallery() {
  const galleryItems = [
    { id: 1, image: "/product-1.jpg", title: "Classic Kraft Collection", alt: "Classic kraft paper bags collection - sustainable retail packaging solutions" },
    { id: 2, image: "/product-2.jpg", title: "Premium White Series", alt: "Premium white paper bags series - elegant packaging for boutiques" },
    { id: 3, image: "/product-3.jpg", title: "Custom Designs", alt: "Custom designed paper bags with brand printing and personalization" },
    { id: 4, image: "/about-image.jpg", title: "Craftsmanship", alt: "EcoBagsFactory craftsmanship and quality manufacturing process" },
    { id: 5, image: "/hero-bags.jpg", title: "Product Range", alt: "Complete range of eco-friendly paper bags - shopping, gift, and grocery bags" },
    { id: 6, image: "/product-1.jpg", title: "Retail Solutions", alt: "Sustainable retail packaging solutions - eco-friendly paper bags for businesses" },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Eco Bags <span className="text-primary">Gallery</span> Hyderabad
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore our beautiful collection of eco-friendly paper bags and 
            see how we bring sustainability and style together
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover-lift border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={400}
                  height={320}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-xl font-semibold">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center earth-gradient rounded-3xl p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Want to See Your Brand Here?
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let us create custom paper bags that showcase your unique brand identity.{" "}
            <Link href="/paperbags-manufacturer" className="text-primary underline hover:opacity-80">Learn about our paper bag manufacturing</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}


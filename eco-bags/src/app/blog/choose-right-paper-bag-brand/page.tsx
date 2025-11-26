import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Package, Ruler, Palette, CircleDot } from "lucide-react";

export const metadata: Metadata = {
  title: "How to Choose the Right Paper Bag for Your Brand",
  description: "Complete guide to selecting the perfect paper bag size, GSM, finish, and handle type. Expert tips from Hyderabad's leading paper bag manufacturer.",
  keywords: ["choose paper bag", "paper bag sizes", "paper bag GSM guide", "custom paper bags", "paper bag handles", "branded paper bags"],
  openGraph: {
    title: "How to Choose the Right Paper Bag for Your Brand",
    description: "Complete guide to selecting the perfect paper bag size, GSM, finish, and handle type for your business needs.",
    images: ["/varieties/3.png"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Choose the Right Paper Bag for Your Brand",
    "description": "Complete guide to selecting the perfect paper bag size, GSM, finish, and handle type for your business needs.",
    "image": "https://ecobagsfactory.org/varieties/3.png",
    "datePublished": "2025-11-18",
    "dateModified": "2025-11-18",
    "author": {
      "@type": "Organization",
      "name": "EcoBagsFactory"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EcoBagsFactory",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ecobagsfactory.org/hero-bags.jpg"
      }
    }
  };

  const sizeGuide = [
    { size: "Small (6x6x4 inch)", use: "Jewelry, small gifts, cosmetics", ideal: "Boutiques, jewelry stores" },
    { size: "Medium (9x8x8 inch)", use: "Clothing accessories, medium products", ideal: "Retail stores, pharmacies" },
    { size: "Large (12x8x3.5 inch)", use: "Apparel, multiple items", ideal: "Fashion boutiques, gift shops" },
    { size: "Extra Large (15x12x4 inch)", use: "Large items, bulk purchases", ideal: "Department stores, electronics" },
    { size: "Shopping (15.25x18.65x4 inch)", use: "Groceries, multiple items", ideal: "Supermarkets, general retail" },
  ];

  const gsmGuide = [
    { gsm: "120-140 GSM", strength: "Light", use: "Small, lightweight items", cost: "Budget-friendly" },
    { gsm: "160-180 GSM", strength: "Medium", use: "Everyday retail, moderate weight", cost: "Balanced" },
    { gsm: "200-220 GSM", strength: "Strong", use: "Premium products, heavier items", cost: "Mid-range" },
    { gsm: "250-300 GSM", strength: "Heavy-duty", use: "Luxury items, heavy products", cost: "Premium" },
  ];

  const finishes = [
    { name: "Matte Lamination", look: "Elegant, sophisticated", feel: "Smooth, velvety", best: "Luxury brands, boutiques" },
    { name: "Gloss Lamination", look: "Shiny, vibrant colors", feel: "Smooth, sleek", best: "Fashion, cosmetics" },
    { name: "Spot UV", look: "Selective shine highlights", feel: "Textured contrast", best: "Premium brands" },
    { name: "Gold/Silver Foiling", look: "Luxurious, premium", feel: "Raised metallic", best: "Jewelry, high-end retail" },
    { name: "Natural Kraft", look: "Eco-friendly, rustic", feel: "Natural texture", best: "Organic stores, cafes" },
  ];

  const handles = [
    { type: "Thread Handles", durability: "High", look: "Classic, elegant", best: "Boutiques, retail" },
    { type: "Paper Handles", durability: "Medium", look: "Eco-friendly, seamless", best: "Grocery, general retail" },
    { type: "Satin Ribbon", durability: "High", look: "Luxurious, premium", best: "Gifts, jewelry" },
    { type: "Cotton Rope", durability: "Very High", look: "Sturdy, premium", best: "Heavy items, luxury" },
  ];

  return (
    <article className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero Section */}
      <section className="py-12 earth-gradient">
        <div className="container mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="max-w-4xl">
            <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
              Guide
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
              How to Choose the Right Paper Bag for Your Brand
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                November 18, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                7 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Choosing the right paper bag for your business involves several key decisions: size, paper thickness (GSM), finish, and handle type. This comprehensive guide will help you make informed choices that align with your brand identity and practical needs.
            </p>

            {/* Size Guide */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Ruler className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">1. Choosing the Right Size</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                The bag size should accommodate your products comfortably while maintaining a professional appearance. Here&apos;s a quick reference guide:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="border border-border p-3 text-left">Size</th>
                      <th className="border border-border p-3 text-left">Best For</th>
                      <th className="border border-border p-3 text-left">Ideal Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizeGuide.map((item, index) => (
                      <tr key={index} className="hover:bg-secondary/30">
                        <td className="border border-border p-3 font-medium">{item.size}</td>
                        <td className="border border-border p-3 text-muted-foreground">{item.use}</td>
                        <td className="border border-border p-3 text-muted-foreground">{item.ideal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* GSM Guide */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">2. Understanding GSM (Paper Thickness)</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                GSM (grams per square meter) indicates paper thickness and durability. Higher GSM means stronger bags but also higher costs. Choose based on what you&apos;re carrying:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {gsmGuide.map((item, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-primary text-lg">{item.gsm}</h3>
                      <div className="mt-3 space-y-1 text-sm">
                        <p><span className="font-medium">Strength:</span> <span className="text-muted-foreground">{item.strength}</span></p>
                        <p><span className="font-medium">Best For:</span> <span className="text-muted-foreground">{item.use}</span></p>
                        <p><span className="font-medium">Cost:</span> <span className="text-muted-foreground">{item.cost}</span></p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Finishes */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">3. Selecting the Right Finish</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                The finish adds visual appeal and can significantly impact brand perception. Consider your brand personality when choosing:
              </p>
              <div className="space-y-4">
                {finishes.map((item, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="font-bold text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.look} | {item.feel}</p>
                        </div>
                        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full whitespace-nowrap">
                          Best for: {item.best}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Handles */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <CircleDot className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground">4. Handle Options</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Handles affect both functionality and aesthetics. Choose based on bag weight capacity and brand image:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {handles.map((item, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-foreground">{item.type}</h3>
                      <div className="mt-3 space-y-1 text-sm">
                        <p><span className="font-medium">Durability:</span> <span className="text-muted-foreground">{item.durability}</span></p>
                        <p><span className="font-medium">Look:</span> <span className="text-muted-foreground">{item.look}</span></p>
                        <p><span className="font-medium">Best For:</span> <span className="text-muted-foreground">{item.best}</span></p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-8 bg-secondary/30 rounded-xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Need Help Choosing?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team at EcoBagsFactory can help you select the perfect paper bag combination for your brand. We offer free consultations and samples to ensure you make the right choice.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="eco-gradient text-white">
                    Get Free Consultation
                  </Button>
                </Link>
                <Link href="/custom-orders">
                  <Button variant="outline">
                    Custom Orders
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

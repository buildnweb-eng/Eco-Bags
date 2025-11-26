import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Scale, Package, ShieldCheck, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Understanding GSM: Complete Guide to Paper Bag Thickness",
  description: "Everything you need to know about GSM (grams per square meter) and how to choose the right paper bag thickness for your products. Expert guide from EcoBagsFactory.",
  keywords: ["paper bag GSM", "GSM meaning", "paper thickness guide", "paper bag weight", "GSM for paper bags", "paper bag specifications"],
  openGraph: {
    title: "Understanding GSM: Complete Guide to Paper Bag Thickness",
    description: "Everything you need to know about GSM and how to choose the right paper bag thickness for your products.",
    images: ["/varieties/6.png"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Understanding GSM: Complete Guide to Paper Bag Thickness",
    "description": "Everything you need to know about GSM (grams per square meter) and how to choose the right paper bag thickness.",
    "image": "https://ecobagsfactory.org/varieties/6.png",
    "datePublished": "2025-11-10",
    "dateModified": "2025-11-10",
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

  const gsmRanges = [
    {
      range: "100-130 GSM",
      category: "Light",
      thickness: "Thin, flexible",
      strength: "Low",
      bestFor: ["Lightweight items", "Bread & bakery", "Small accessories", "Promotional giveaways"],
      notFor: ["Heavy items", "Bottles", "Books"],
      cost: "Most economical",
      examples: "Bakery bags, pharmacy bags"
    },
    {
      range: "140-160 GSM",
      category: "Medium-Light",
      thickness: "Moderate flexibility",
      strength: "Medium",
      bestFor: ["Clothing", "Light retail items", "Documents", "Cosmetics"],
      notFor: ["Heavy or sharp items"],
      cost: "Budget-friendly",
      examples: "General retail, clothing stores"
    },
    {
      range: "170-200 GSM",
      category: "Medium",
      thickness: "Firm, structured",
      strength: "Good",
      bestFor: ["Most retail items", "Medium weight products", "Gift bags", "Branded packaging"],
      notFor: ["Very heavy items"],
      cost: "Moderate",
      examples: "Boutiques, gift shops, jewelry"
    },
    {
      range: "210-250 GSM",
      category: "Medium-Heavy",
      thickness: "Rigid, premium feel",
      strength: "High",
      bestFor: ["Premium products", "Multiple items", "Wine bottles (with support)", "Luxury retail"],
      notFor: ["Extreme weight only"],
      cost: "Premium",
      examples: "High-end boutiques, luxury brands"
    },
    {
      range: "270-300 GSM",
      category: "Heavy",
      thickness: "Very rigid, cardboard-like",
      strength: "Very High",
      bestFor: ["Heavy items", "Wine & bottles", "Electronics", "Luxury gifts", "Brand boxes"],
      notFor: ["When flexibility needed"],
      cost: "Highest",
      examples: "Luxury retail, electronics, wine shops"
    }
  ];

  const faqs = [
    {
      q: "What does GSM stand for?",
      a: "GSM stands for 'Grams per Square Meter'. It measures the weight of paper per square meter, which directly correlates to thickness and strength. Higher GSM = thicker, stronger paper."
    },
    {
      q: "How do I know what GSM I need?",
      a: "Consider what you're putting in the bag. Light items (under 500g) work with 120-150 GSM. Medium items (500g-2kg) need 160-200 GSM. Heavy items (over 2kg) require 220+ GSM."
    },
    {
      q: "Does higher GSM always mean better quality?",
      a: "Not necessarily. Higher GSM means stronger and more rigid, but that's not always needed. Over-specifying GSM increases costs unnecessarily. Match GSM to your actual product weight."
    },
    {
      q: "What's the most popular GSM for retail?",
      a: "160-180 GSM is the most commonly used range for general retail. It offers good strength, print quality, and value for money. This is our best-selling specification at EcoBagsFactory."
    },
    {
      q: "Can I mix different GSMs in one order?",
      a: "Yes! Many businesses order different GSMs for different products. Small accessories might use 140 GSM while premium items use 220 GSM bags. Contact us for mixed orders."
    }
  ];

  const quickReference = [
    { product: "Jewelry & Accessories", gsm: "180-200 GSM", reason: "Premium feel, light items" },
    { product: "Clothing & Apparel", gsm: "140-160 GSM", reason: "Light to moderate weight" },
    { product: "Food & Bakery", gsm: "120-140 GSM", reason: "Light items, cost-effective" },
    { product: "Wine & Bottles", gsm: "270-300 GSM", reason: "Heavy, needs rigid support" },
    { product: "Electronics", gsm: "220-250 GSM", reason: "Heavy, needs protection" },
    { product: "Cosmetics & Beauty", gsm: "180-220 GSM", reason: "Premium perception" },
    { product: "Gifts & Premium Items", gsm: "200-250 GSM", reason: "Luxury feel, durability" },
    { product: "Grocery & General", gsm: "160-180 GSM", reason: "Balance of strength & cost" },
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
              Understanding GSM: Complete Guide to Paper Bag Thickness
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                November 10, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                5 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              GSM (Grams per Square Meter) is the single most important specification when ordering paper bags. It determines the bag&apos;s strength, feel, and suitability for your products. This guide will help you choose the right GSM for your needs.
            </p>

            {/* What is GSM */}
            <div className="mb-12 p-6 bg-primary/5 rounded-xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  <Scale className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2">What is GSM?</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    GSM measures how much one square meter of paper weighs in grams. A 200 GSM paper weighs 200 grams per square meter. Higher GSM means thicker, heavier, and generally stronger paper. It&apos;s the standard measurement used worldwide in the paper industry.
                  </p>
                </div>
              </div>
            </div>

            {/* GSM Ranges */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">GSM Ranges Explained</h2>
              <div className="space-y-6">
                {gsmRanges.map((item, index) => (
                  <Card key={index} className="border-border/50 overflow-hidden">
                    <div className="bg-primary/10 px-6 py-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-primary">{item.range}</h3>
                        <span className="text-sm font-medium text-muted-foreground">{item.category}</span>
                      </div>
                    </div>
                    <CardContent className="pt-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm"><span className="font-medium">Thickness:</span> <span className="text-muted-foreground">{item.thickness}</span></p>
                          <p className="text-sm"><span className="font-medium">Strength:</span> <span className="text-muted-foreground">{item.strength}</span></p>
                          <p className="text-sm"><span className="font-medium">Cost:</span> <span className="text-muted-foreground">{item.cost}</span></p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-green-600 mb-1">Best For:</p>
                          <ul className="text-sm text-muted-foreground list-disc list-inside">
                            {item.bestFor.map((use, i) => (
                              <li key={i}>{use}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <p className="text-sm mt-3 pt-3 border-t border-border">
                        <span className="font-medium">Examples:</span> <span className="text-muted-foreground">{item.examples}</span>
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Reference */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Quick Reference by Product Type</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="border border-border p-3 text-left">Product Type</th>
                      <th className="border border-border p-3 text-left">Recommended GSM</th>
                      <th className="border border-border p-3 text-left">Why</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quickReference.map((item, index) => (
                      <tr key={index} className="hover:bg-secondary/30">
                        <td className="border border-border p-3 font-medium">{item.product}</td>
                        <td className="border border-border p-3 text-primary font-medium">{item.gsm}</td>
                        <td className="border border-border p-3 text-muted-foreground">{item.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Pro Tips */}
            <div className="mb-12 p-6 bg-secondary/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-foreground">Pro Tips from EcoBagsFactory</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Always order samples first to feel the actual thickness before bulk ordering</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Factor in lamination - it adds strength, so you might need lower base GSM</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Consider handle type - thread handles work better with higher GSM for strength</span>
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>Premium finishes (foiling, spot UV) are better visible on 200+ GSM paper</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="p-8 bg-secondary/30 rounded-xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Need Help Choosing the Right GSM?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our team at EcoBagsFactory can recommend the perfect GSM based on your products, budget, and brand positioning. We offer free samples so you can feel the difference before ordering.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="eco-gradient text-white">
                    Request Free Samples
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline">
                    View Our Products
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

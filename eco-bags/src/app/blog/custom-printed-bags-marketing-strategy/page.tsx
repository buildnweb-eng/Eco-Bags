import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Megaphone, Eye, Users, TrendingUp, DollarSign, Repeat, Target, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Printed Paper Bags: Your Walking Advertisement",
  description: "Learn how custom printed paper bags can serve as powerful marketing tools and increase brand visibility in Hyderabad. ROI analysis and design tips included.",
  keywords: ["custom printed paper bags", "branded paper bags", "paper bag marketing", "brand visibility bags", "promotional paper bags hyderabad"],
  openGraph: {
    title: "Custom Printed Paper Bags: Your Walking Advertisement",
    description: "Learn how custom printed paper bags can serve as powerful marketing tools and increase brand visibility.",
    images: ["/varieties/2.png"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Custom Printed Paper Bags: Your Walking Advertisement",
    "description": "Learn how custom printed paper bags can serve as powerful marketing tools and increase brand visibility in Hyderabad.",
    "image": "https://ecobagsfactory.org/varieties/2.png",
    "datePublished": "2025-11-12",
    "dateModified": "2025-11-12",
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

  const benefits = [
    {
      icon: Eye,
      title: "Massive Brand Exposure",
      content: "Every customer carrying your branded bag becomes a walking billboard. A single bag can be seen by hundreds of people during its lifetime, from busy streets of Ameerpet to malls in Banjara Hills."
    },
    {
      icon: Repeat,
      title: "Extended Use & Reuse",
      content: "Quality paper bags are often reused multiple times by customers - for shopping, storage, or even gifting. Each reuse extends your brand exposure without any additional cost."
    },
    {
      icon: DollarSign,
      title: "Cost-Effective Marketing",
      content: "Compare the cost per impression: digital ads cost Rs. 50-200 per thousand impressions. A Rs. 15 custom bag can generate thousands of impressions over its lifetime, making it incredibly cost-effective."
    },
    {
      icon: Target,
      title: "Targeted Local Marketing",
      content: "Your bags naturally circulate in your customer&apos;s neighborhood. A boutique in Jubilee Hills will have bags visible in that premium area, reaching exactly your target demographic."
    },
    {
      icon: Award,
      title: "Premium Brand Perception",
      content: "A well-designed custom bag elevates your brand perception. Customers associate quality packaging with quality products, leading to increased trust and repeat purchases."
    },
    {
      icon: Users,
      title: "Social Proof & Word of Mouth",
      content: "Beautiful bags often get photographed and shared on social media. They become conversation starters, generating organic word-of-mouth marketing for your brand."
    },
  ];

  const designTips = [
    { tip: "Keep your logo prominent but elegant - it should be visible from 3 feet away" },
    { tip: "Use colors that align with your brand identity and stand out" },
    { tip: "Include your website or social media handles for easy follow-up" },
    { tip: "Consider seasonal designs for festivals like Diwali and Sankranti" },
    { tip: "Add a tagline that communicates your value proposition" },
    { tip: "Choose finishes (matte, gloss, foiling) that match your brand personality" },
  ];

  const roiExample = {
    investment: "Rs. 15,000 (1000 bags @ Rs. 15 each)",
    impressions: "50,000+ (assuming 50 views per bag)",
    costPerImpression: "Rs. 0.30",
    comparisonDigital: "Rs. 2,500-10,000 for same impressions",
    additionalValue: "Functional packaging (free), premium perception (priceless)"
  };

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
              Marketing
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
              Custom Printed Paper Bags: Your Walking Advertisement
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                November 12, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                4 min read
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
              In the competitive Hyderabad market, every brand touchpoint matters. Custom printed paper bags are often overlooked as a marketing channel, yet they offer unmatched ROI. Here&apos;s how to turn your packaging into a powerful marketing tool.
            </p>

            {/* Featured Image */}
            <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-12 bg-secondary/30">
              <Image
                src="/varieties/2.png"
                alt="Custom printed paper bags for brand marketing"
                fill
                className="object-contain p-8"
              />
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Why Custom Bags Are Marketing Gold</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-primary/10 flex-shrink-0">
                          <benefit.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {benefit.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* ROI Calculator */}
            <div className="mb-12 p-8 bg-primary/5 rounded-xl border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">ROI Breakdown</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Investment (1000 bags)</span>
                  <span className="text-primary font-bold">{roiExample.investment}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Estimated Impressions</span>
                  <span className="text-primary font-bold">{roiExample.impressions}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Cost Per Impression</span>
                  <span className="text-primary font-bold">{roiExample.costPerImpression}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Digital Ads Equivalent</span>
                  <span className="text-muted-foreground">{roiExample.comparisonDigital}</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Additional Value</span>
                  <span className="text-green-600 font-medium">{roiExample.additionalValue}</span>
                </div>
              </div>
            </div>

            {/* Design Tips */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Design Tips for Maximum Impact</h2>
              <Card className="border-border/50">
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {designTips.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-muted-foreground">{item.tip}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Success Story */}
            <div className="mb-12 p-6 bg-secondary/30 rounded-xl">
              <h3 className="text-xl font-bold text-foreground mb-4">Success in Hyderabad</h3>
              <p className="text-muted-foreground leading-relaxed">
                A boutique in Banjara Hills switched to custom printed paper bags with gold foiling and saw a 25% increase in Instagram mentions within 3 months. Customers loved the premium packaging and often posted their purchases, creating organic social media marketing for the brand.
              </p>
            </div>

            {/* CTA */}
            <div className="p-8 eco-gradient rounded-xl text-white">
              <h2 className="text-2xl font-bold mb-4">
                Start Your Marketing Bags Today
              </h2>
              <p className="opacity-90 leading-relaxed mb-6">
                EcoBagsFactory offers custom printing with options for single color to multi-color, matte/gloss finishes, spot UV, and foiling. Minimum order just 500 pieces. Free design consultation available.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/custom-printed-bags">
                  <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    Custom Printed Bags
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10">
                    Get a Quote
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

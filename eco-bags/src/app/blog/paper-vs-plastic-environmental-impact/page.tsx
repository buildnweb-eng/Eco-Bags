import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft, Leaf, Droplets, Wind, TreeDeciduous, Fish, Factory, CheckCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Paper vs Plastic Bags: The Real Environmental Impact",
  description: "An in-depth comparison of paper and plastic bags, their environmental footprint, and why paper is the sustainable choice for Hyderabad businesses.",
  keywords: ["paper vs plastic bags", "environmental impact bags", "sustainable packaging", "eco-friendly bags comparison", "paper bags environment"],
  openGraph: {
    title: "Paper vs Plastic Bags: The Real Environmental Impact",
    description: "An in-depth comparison of paper and plastic bags and why paper is the sustainable choice.",
    images: ["/varieties/5.png"],
    type: "article",
  },
};

export default function BlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Paper vs Plastic Bags: The Real Environmental Impact",
    "description": "An in-depth comparison of paper and plastic bags, their environmental footprint, and why paper is the sustainable choice.",
    "image": "https://ecobagsfactory.org/varieties/5.png",
    "datePublished": "2025-11-15",
    "dateModified": "2025-11-15",
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

  const comparison = [
    { aspect: "Decomposition Time", paper: "2-6 weeks", plastic: "500-1000 years", winner: "paper" },
    { aspect: "Recyclability", paper: "5-7 times recyclable", plastic: "1-2 times, degrades", winner: "paper" },
    { aspect: "Ocean Impact", paper: "Dissolves in water", plastic: "Microplastics, harms marine life", winner: "paper" },
    { aspect: "Biodegradable", paper: "Yes, 100%", plastic: "No", winner: "paper" },
    { aspect: "Made from", paper: "Renewable trees (managed forests)", plastic: "Petroleum (non-renewable)", winner: "paper" },
    { aspect: "Reusability", paper: "Multiple uses possible", plastic: "Often single-use", winner: "paper" },
    { aspect: "Composting", paper: "Fully compostable", plastic: "Not compostable", winner: "paper" },
    { aspect: "Carbon Neutral Potential", paper: "Yes, with sustainable forestry", plastic: "No", winner: "paper" },
  ];

  const impacts = [
    {
      icon: Fish,
      title: "Marine Life Protection",
      content: "Over 8 million tons of plastic enter oceans annually. Marine animals mistake plastic for food, leading to starvation and death. Paper bags dissolve in water, posing no threat to marine ecosystems."
    },
    {
      icon: Leaf,
      title: "Soil Health",
      content: "Plastic in landfills leaches toxic chemicals into soil, contaminating groundwater. Paper bags decompose naturally, adding organic matter back to the soil without harmful residues."
    },
    {
      icon: TreeDeciduous,
      title: "Sustainable Forestry",
      content: "Modern paper production uses trees from managed forests where more trees are planted than harvested. This creates a renewable cycle that actually helps absorb CO2."
    },
    {
      icon: Wind,
      title: "Air Quality",
      content: "Burning plastic releases toxic fumes including dioxins and furans. Paper production and disposal have significantly lower toxic emissions when properly managed."
    },
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
              Environment
            </span>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-4">
              Paper vs Plastic Bags: The Real Environmental Impact
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                November 15, 2025
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                6 min read
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
              The debate between paper and plastic bags has been ongoing for decades. While both have environmental impacts, the evidence overwhelmingly supports paper as the more sustainable choice, especially for businesses in Hyderabad looking to reduce their environmental footprint.
            </p>

            {/* Comparison Table */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Direct Comparison</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-secondary/50">
                      <th className="border border-border p-3 text-left">Aspect</th>
                      <th className="border border-border p-3 text-left text-green-600">Paper Bags</th>
                      <th className="border border-border p-3 text-left text-red-600">Plastic Bags</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((item, index) => (
                      <tr key={index} className="hover:bg-secondary/30">
                        <td className="border border-border p-3 font-medium">{item.aspect}</td>
                        <td className="border border-border p-3">
                          <div className="flex items-center gap-2">
                            {item.winner === "paper" && <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />}
                            <span className="text-muted-foreground">{item.paper}</span>
                          </div>
                        </td>
                        <td className="border border-border p-3">
                          <div className="flex items-center gap-2">
                            {item.winner === "plastic" ? (
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                            ) : (
                              <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                            )}
                            <span className="text-muted-foreground">{item.plastic}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Key Statistics */}
            <div className="mb-12 p-8 bg-primary/5 rounded-xl border border-primary/20">
              <h2 className="text-2xl font-bold text-foreground mb-6">Key Statistics</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground mt-2">Years for plastic to decompose</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary">2-6</div>
                  <div className="text-muted-foreground mt-2">Weeks for paper to decompose</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary">8M</div>
                  <div className="text-muted-foreground mt-2">Tons of plastic enter oceans yearly</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl font-bold text-primary">80%</div>
                  <div className="text-muted-foreground mt-2">Paper bag recycling rate possible</div>
                </div>
              </div>
            </div>

            {/* Environmental Impacts */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Environmental Impact Details</h2>
              <div className="space-y-6">
                {impacts.map((impact, index) => (
                  <Card key={index} className="border-border/50">
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                          <impact.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">
                            {impact.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {impact.content}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* India Context */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Indian Context</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                India has taken significant steps to reduce plastic usage. The Plastic Waste Management Rules and various state-level bans, including in Telangana, are pushing businesses toward sustainable alternatives. Hyderabad, as a growing metropolitan city, is particularly affected by plastic pollution, with the GHMC actively promoting eco-friendly practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By choosing paper bags from local manufacturers like EcoBagsFactory in Kukatpally, businesses not only comply with regulations but also contribute to a cleaner Hyderabad. The proximity reduces transportation emissions, making the choice even more environmentally sound.
              </p>
            </div>

            {/* CTA */}
            <div className="p-8 bg-secondary/30 rounded-xl">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Make the Sustainable Choice
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Join hundreds of Hyderabad businesses that have already made the switch to eco-friendly paper bags. Protect the environment while enhancing your brand image.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="eco-gradient text-white">
                    Switch to Paper Bags
                  </Button>
                </Link>
                <Link href="/eco-bags-hyderabad">
                  <Button variant="outline">
                    Eco Bags Hyderabad
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

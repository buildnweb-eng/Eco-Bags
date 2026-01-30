import { Card, CardContent } from "@/components/ui/card";
import AboutGallery from "@/components/AboutGallery";
import { Leaf, Users, Award, Target } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About EcoBagsFactory - Leading Paperbags Manufacturer India | Our Story",
  description: "About EcoBagsFactory - Premier paperbags manufacturer in India since 2010. 10M+ bags produced, 5000+ happy clients. Leading paper bags manufacturer in Hyderabad offering custom manufacturing, wholesale production. Trusted ecobags manufacturer with 100% recyclable bags.",
  keywords: [
    "about EcoBagsFactory",
    "paperbags manufacturer India",
    "paperbags manufacturer Hyderabad",
    "paper bags manufacturer",
    "ecobags manufacturer",
    "sustainable packaging company",
    "eco-friendly manufacturer",
    "paper bags company Hyderabad",
    "custom paperbags manufacturer",
    "wholesale paper bags manufacturer"
  ],
  openGraph: {
    title: "About EcoBagsFactory - Leading Paperbags Manufacturer India",
    description: "Premier paperbags manufacturer since 2010. 10M+ bags produced, 5000+ clients. Leading paper bags manufacturer in Hyderabad.",
    images: ["/factory/factory-enhanced-1.1.jpeg"],
  },
};

export default function About() {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Committed to protecting our planet for future generations",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction and success is our top priority",
    },
    {
      icon: Award,
      title: "Quality",
      description: "Premium materials and craftsmanship in every product",
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly improving our products and processes",
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="text-primary">EcoBagsFactory</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Leading the way in sustainable packaging solutions since our founding.
            We believe that businesses can thrive while protecting our planet.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              EcoBagsFactory was born from a simple yet powerful vision: to create packaging
              solutions that businesses can feel good about. We saw the environmental
              impact of plastic bags and knew there had to be a better way.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Starting with a small workshop and a commitment to sustainability,
              we&apos;ve grown into a trusted partner for businesses across the country.
              Every bag we produce is a step toward a greener tomorrow.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we&apos;re proud to offer a wide range of eco-friendly paper bags
              that combine style, durability, and environmental responsibility.
            </p>
          </div>
          <div className="relative h-[400px] w-full">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <Image
              src="/factory/factory-enhanced-1.1.jpeg"
              alt="EcoBagsFactory manufacturing process"
              fill
              className="object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-20">
          <AboutGallery />
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="pt-8 text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="earth-gradient rounded-3xl p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-primary mb-2">10M+</div>
              <div className="text-muted-foreground">Bags Produced</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">5000+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Recyclable</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, Palette, Printer, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Printed Paper Bags Hyderabad | Logo Bags | EcoBagsFactory",
  description: "Custom printed paper bags with your logo in Hyderabad. Full-color printing, gold foiling, spot UV. Brand your packaging with eco-friendly bags. Min order 3000 bags. Call +91 9949826222.",
  keywords: ["custom printed bags hyderabad", "logo paper bags", "branded paper bags", "custom packaging hyderabad", "printed eco bags"],
  openGraph: {
    title: "Custom Printed Paper Bags Hyderabad - EcoBagsFactory",
    description: "Your logo on eco-friendly paper bags. Full-color printing, premium finishes.",
    images: ["/product-3.jpg"],
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/custom-printed-bags",
  },
};

export default function CustomPrintedBags() {
  const printingOptions = [
    { icon: Printer, title: "Single Color", desc: "Cost-effective branding solution" },
    { icon: Printer, title: "Double Color", desc: "Two-tone designs for impact" },
    { icon: Palette, title: "Multi-Color", desc: "Full CMYK printing for vibrant designs" },
    { icon: Sparkles, title: "Gold/Silver Foiling", desc: "Luxury metallic accents" },
  ];

  const finishes = [
    "Gloss Lamination - Shiny, premium look",
    "Matt Lamination - Sophisticated, modern feel",
    "Spot UV Coating - Highlight specific areas",
    "Embossing - Raised texture for logos",
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Printed Paper Bags",
    "serviceType": "Custom Bag Printing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "EcoBagsFactory"
    },
    "areaServed": { "@type": "City", "name": "Hyderabad" },
    "description": "Custom logo printing on eco-friendly paper bags. Full-color, foiling, lamination options available."
  };

  return (
    <div className="pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Palette className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Your Brand, Our Bags</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Custom Printed <span className="text-primary">Bags</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Transform your packaging into a powerful branding tool. Our custom printed
              paper bags feature your logo, colors, and design on premium eco-friendly
              materials. Make every customer interaction count.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Start Designing
                </Button>
              </Link>
              <a href="tel:+919949826222">
                <Button size="lg" variant="outline">
                  <Phone className="mr-2 w-4 h-4" />
                  +91 9949826222
                </Button>
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <Image
              src="/product-3.jpg"
              alt="Custom printed paper bags Hyderabad - branded eco-friendly packaging"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Printing Options */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Printing <span className="text-primary">Options</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {printingOptions.map((option, index) => (
              <Card key={index} className="hover-lift border-border/50">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <option.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{option.title}</h3>
                  <p className="text-sm text-muted-foreground">{option.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Finishes */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Premium <span className="text-primary">Finishes</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {finishes.map((finish, index) => (
              <div key={index} className="flex items-center gap-3 bg-background rounded-lg p-4">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{finish}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-primary">Process</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Share Design", desc: "Send us your logo and design requirements" },
              { step: "2", title: "Get Mockup", desc: "We create digital mockups for approval" },
              { step: "3", title: "Production", desc: "Your bags are printed with precision" },
              { step: "4", title: "Delivery", desc: "Fast delivery to your location" },
            ].map((item, index) => (
              <Card key={index} className="border-border/50 text-center">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="eco-gradient border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Brand Your Packaging?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get custom printed eco-friendly bags that make your brand stand out.
            </p>
            <Link href="/custom-orders">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Custom Quote
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

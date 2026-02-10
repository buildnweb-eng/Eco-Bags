import { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Phone, CheckCircle, GraduationCap, Building } from "lucide-react";

export const metadata: Metadata = {
  title: "Paper Bags Gachibowli | Eco Bags Financial District | EcoBagsFactory",
  description: "Paper bags for Gachibowli and Financial District businesses. EcoBagsFactory delivers eco-friendly bags to universities, tech parks, and corporate offices. Call +91 9949826222.",
  keywords: ["paper bags gachibowli", "eco bags financial district", "paper bags nanakramguda", "eco-friendly bags gachibowli", "corporate paper bags hyderabad", "paper bag manufacturer gachibowli"],
  openGraph: {
    title: "Paper Bags Gachibowli & Financial District - EcoBagsFactory",
    description: "Eco-friendly paper bags for Gachibowli's business and education hub.",
    images: ["/hero-bags.jpg"],
  },
  alternates: {
    canonical: "https://ecobagsfactory.org/paper-bags-gachibowli",
  },
};

export default function PaperBagsGachibowli() {
  const nearbyAreas = [
    "Financial District", "Nanakramguda", "Kokapet", "Narsingi",
    "Manikonda", "Puppalaguda", "Tellapur", "ISB", "University of Hyderabad"
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Financial District Ready</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Paper Bags <span className="text-primary">Gachibowli</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Eco-friendly paper bags for Gachibowli&apos;s dynamic mix of businesses,
              universities, and the Financial District. Perfect for corporate offices,
              educational institutions, and retail establishments.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/custom-orders">
                <Button size="lg" className="eco-gradient text-white">
                  Order Now
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
              src="/hero-bags.jpg"
              alt="Paper bags Gachibowli Financial District - eco-friendly packaging"
              width={600}
              height={400}
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>
        </div>

        {/* Segments */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Serving <span className="text-primary">Gachibowli</span> Institutions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover-lift border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Educational Institutions</h3>
                    <p className="text-muted-foreground mb-3">
                      Custom bags for universities, colleges, and training centers in Gachibowli.
                      Perfect for convocations, events, and campus stores.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> ISB, University of Hyderabad</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> IIIT, NALSAR</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Training institutes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="hover-lift border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Building className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Corporate & Financial</h3>
                    <p className="text-muted-foreground mb-3">
                      Premium bags for Financial District offices, banks, and corporate events.
                      Professional branding with eco-friendly packaging.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Financial District offices</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Banks & financial services</li>
                      <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-primary" /> Corporate events</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Areas */}
        <div className="earth-gradient rounded-3xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Delivery Areas Around <span className="text-primary">Gachibowli</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-background text-foreground text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="eco-gradient border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Sustainable Packaging for Gachibowli
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join leading institutions and businesses choosing eco-friendly paper bags.
            </p>
            <Link href="/custom-orders">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Quote
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 earth-gradient opacity-50" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">100% Eco-Friendly</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Eco-friendly
              <span className="block text-primary">Paper Bags</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              For a Greener Tomorrow. Sustainable, stylish, and customizable paper bags for your business.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products">
                <Button size="lg" className="eco-gradient text-white group">
                  View Products
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/custom-orders">
                <Button size="lg" variant="outline">
                  Custom Orders
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <Image
              src="/hero-bags.jpg"
              alt="Eco-friendly paper bags"
              width={800}
              height={600}
              className="relative rounded-3xl shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;


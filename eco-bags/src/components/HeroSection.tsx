import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// Updated: Dec 22, 2025 - Hero text layout fix
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
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="block">Paper Bag</span>
              <span className="block whitespace-nowrap"><span className="text-primary">Manufacturer</span> Hyderabad</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg">
              Leading paper bag manufacturer in Hyderabad, India. EcoBagsFactory - trusted paperbags manufacturer and paper bag manufacturers offering sustainable, stylish, and customizable paper bags manufacturing for your business.
            </p>
            
            {/* Contact Info */}
            <div className="inline-flex flex-wrap items-center gap-4 md:gap-6 py-3 px-4 bg-card/50 border border-border/50 rounded-xl backdrop-blur-sm">
              <a 
                href="tel:+919949826222" 
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-base md:text-lg">+91 9949826222</span>
              </a>
              <div className="w-px h-6 bg-border/50 hidden sm:block" />
              <a 
                href="mailto:eco4bags@gmail.com" 
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors cursor-pointer group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <span className="font-semibold text-base md:text-lg">eco4bags@gmail.com</span>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/products" className="cursor-pointer">
                <Button size="lg" className="eco-gradient text-white group cursor-pointer">
                  View Products
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform cursor-pointer" />
                </Button>
              </Link>
              <Link href="/custom-orders" className="cursor-pointer">
                <Button size="lg" variant="outline" className="cursor-pointer">
                  Custom Orders
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-3xl" />
            <Image
              src="/hero-bags.jpg"
              alt="Paper Bag Manufacturer Hyderabad - EcoBagsFactory | Leading Paper Bag Manufacturers India | Paperbags Manufacturer | Premium Paper Bags Manufacturer | Custom Paperbags Manufacturing - Wholesale Ecobags Manufacturer - 100% Recyclable Biodegradable Sustainable Packaging"
              width={800}
              height={600}
              className="relative rounded-3xl shadow-2xl w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;


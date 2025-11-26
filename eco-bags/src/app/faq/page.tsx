import { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HelpCircle, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | Eco Bags Hyderabad",
  description: "Find answers to common questions about eco-friendly paper bags, custom orders, pricing, delivery, and more. EcoBagsFactory Hyderabad - your trusted paper bags manufacturer.",
  keywords: ["eco bags FAQ", "paper bags questions", "custom bags Hyderabad", "paper bags pricing", "eco-friendly bags info", "bulk paper bags FAQ"],
  openGraph: {
    title: "FAQ - EcoBagsFactory Hyderabad",
    description: "Frequently asked questions about our eco-friendly paper bags, custom orders, and services in Hyderabad.",
    images: ["/hero-bags.jpg"],
  },
};

const faqs = [
  {
    question: "What are eco-friendly paper bags?",
    answer: "Eco-friendly paper bags are made from sustainable, recyclable, and biodegradable materials. Unlike plastic bags, they decompose naturally without harming the environment. Our bags are made from kraft paper and other eco-conscious materials that can be recycled multiple times."
  },
  {
    question: "What is the minimum order quantity?",
    answer: "Our minimum order quantity is 3,000 bags for custom printed orders. This allows us to maintain cost-effectiveness while ensuring high-quality printing and production. For standard bags without customization, we can accommodate smaller orders."
  },
  {
    question: "How long does production take?",
    answer: "Production typically takes 2-3 weeks after design approval. Rush orders may be accommodated based on availability. Once approved, we begin production immediately and keep you updated throughout the process."
  },
  {
    question: "What customization options are available?",
    answer: "We offer extensive customization including: custom sizes (any dimensions), multiple paper types (white, brown, kraft), various GSM options (140-300), printing options (single, double, multi-color), handle types (thread, paper, satin ribbon, special handles), lamination (gloss, matt), and special treatments (gold foiling, spot UV coating)."
  },
  {
    question: "What paper GSM should I choose?",
    answer: "GSM (grams per square meter) determines the thickness and durability. For light items, 140-160 GSM works well. For medium-weight products, choose 180-220 GSM. For heavy items or premium feel, opt for 250-300 GSM. Our team can recommend the best option for your specific needs."
  },
  {
    question: "Do you offer wholesale pricing?",
    answer: "Yes! We offer competitive wholesale pricing for bulk orders. The more you order, the better the per-unit price. Contact us for a custom quote based on your quantity requirements. We work with businesses of all sizes across Hyderabad and India."
  },
  {
    question: "Can you print my logo on bags?",
    answer: "Absolutely! We specialize in custom printed paper bags with your brand logo, design, and colors. We support full-color printing with high-quality results. Simply share your artwork (AI, PDF, or high-resolution image), and our design team will create mockups for your approval."
  },
  {
    question: "What areas in Hyderabad do you deliver to?",
    answer: "We deliver to all areas in Hyderabad including Kukatpally, Secunderabad, Banjara Hills, Madhapur, Gachibowli, HITEC City, Jubilee Hills, Kondapur, Miyapur, and surrounding areas. We also ship across Telangana and pan-India."
  },
  {
    question: "Are your bags 100% biodegradable?",
    answer: "Yes, all our paper bags are 100% biodegradable and recyclable. They are made from eco-friendly materials that naturally decompose, making them an excellent alternative to plastic bags. Our bags meet environmental standards and help reduce your carbon footprint."
  },
  {
    question: "How do I place a bulk order?",
    answer: "Placing a bulk order is simple: 1) Fill out our custom order form with your specifications, 2) Our team will contact you within 24 hours with a quote, 3) Approve the design mockups we create, 4) Make payment and production begins, 5) Receive your bags within 2-3 weeks. You can also call us directly at +91 9949826222."
  },
  {
    question: "What types of bags do you manufacture?",
    answer: "We manufacture a wide range of eco-friendly paper bags including: Shopping bags, Gift bags, Grocery bags, Kraft paper bags, White premium bags, Custom printed bags, Boutique bags, and Food-grade bags. All available in various sizes and customization options."
  },
  {
    question: "Do you provide samples before bulk orders?",
    answer: "Yes, we can provide samples for you to evaluate quality and specifications before placing a bulk order. Sample charges may apply but are typically adjusted against your final order. This ensures you're completely satisfied with the product before production."
  }
];

export default function FAQPage() {
  // FAQ Schema for rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className="pt-32 pb-20">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Got Questions?</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our eco-friendly paper bags,
            custom orders, and services in Hyderabad
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto mb-16">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border/50 rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Section */}
        <Card className="max-w-4xl mx-auto eco-gradient border-0">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Our team is here to help. Contact us directly for personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                  <Mail className="mr-2 w-4 h-4" />
                  Contact Us
                </Button>
              </Link>
              <a href="tel:+919949826222">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Phone className="mr-2 w-4 h-4" />
                  +91 9949826222
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

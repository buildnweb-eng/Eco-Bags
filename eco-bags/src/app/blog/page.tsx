import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog - Eco-Friendly Paper Bags Tips & Insights",
  description: "Learn about eco-friendly paper bags, sustainable packaging trends, and tips for choosing the right paper bags for your business in Hyderabad.",
  keywords: ["eco bags blog", "paper bags tips", "sustainable packaging hyderabad", "eco-friendly business tips", "paper bags guide"],
  openGraph: {
    title: "EcoBagsFactory Blog - Sustainable Packaging Insights",
    description: "Expert tips and insights on eco-friendly paper bags and sustainable packaging for businesses.",
    images: ["/hero-bags.jpg"],
  },
};

const blogPosts = [
  {
    slug: "benefits-eco-friendly-paper-bags-hyderabad-businesses",
    title: "10 Benefits of Eco-Friendly Paper Bags for Hyderabad Businesses",
    excerpt: "Discover how switching to eco-friendly paper bags can boost your brand image, reduce costs, and help the environment in Hyderabad.",
    image: "/varieties/1.png",
    date: "2025-11-20",
    readTime: "5 min read",
    category: "Business Tips",
  },
  {
    slug: "choose-right-paper-bag-brand",
    title: "How to Choose the Right Paper Bag for Your Brand",
    excerpt: "A comprehensive guide to selecting the perfect paper bag size, GSM, finish, and handle type for your business needs.",
    image: "/varieties/3.png",
    date: "2025-11-18",
    readTime: "7 min read",
    category: "Guide",
  },
  {
    slug: "paper-vs-plastic-environmental-impact",
    title: "Paper vs Plastic Bags: The Real Environmental Impact",
    excerpt: "An in-depth comparison of paper and plastic bags, their environmental footprint, and why paper is the sustainable choice.",
    image: "/varieties/5.png",
    date: "2025-11-15",
    readTime: "6 min read",
    category: "Environment",
  },
  {
    slug: "custom-printed-bags-marketing-strategy",
    title: "Custom Printed Paper Bags: Your Walking Advertisement",
    excerpt: "Learn how custom printed paper bags can serve as powerful marketing tools and increase brand visibility in Hyderabad.",
    image: "/varieties/2.png",
    date: "2025-11-12",
    readTime: "4 min read",
    category: "Marketing",
  },
  {
    slug: "gsm-guide-paper-bags",
    title: "Understanding GSM: Complete Guide to Paper Bag Thickness",
    excerpt: "Everything you need to know about GSM (grams per square meter) and how to choose the right thickness for your products.",
    image: "/varieties/6.png",
    date: "2025-11-10",
    readTime: "5 min read",
    category: "Guide",
  },
];

export default function BlogPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "EcoBagsFactory Blog",
    "description": "Expert insights on eco-friendly paper bags and sustainable packaging",
    "url": "https://ecobagsfactory.org/blog",
    "publisher": {
      "@type": "Organization",
      "name": "EcoBagsFactory",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ecobagsfactory.org/hero-bags.jpg"
      }
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "url": `https://ecobagsfactory.org/blog/${post.slug}`,
      "author": {
        "@type": "Organization",
        "name": "EcoBagsFactory"
      }
    }))
  };

  return (
    <div className="pt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero Section */}
      <section className="py-16 earth-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Eco Bags <span className="text-primary">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tips, insights, and guides on eco-friendly paper bags and sustainable packaging for businesses in Hyderabad
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={post.slug} className="hover-lift overflow-hidden border-border/50 group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden bg-secondary/30">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-white text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-IN', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="text-primary font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Stay Updated on Sustainable Packaging
          </h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Get the latest tips, industry news, and exclusive offers on eco-friendly paper bags delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Contact Us for Updates
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

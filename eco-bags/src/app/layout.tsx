import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ecobagsfactory.org'),
  title: {
    default: "EcoBagsFactory | Eco Bag Factory - Paper Bags Manufacturer Hyderabad",
    template: "%s | EcoBagsFactory"
  },
  description: "EcoBagsFactory (Eco Bag Factory) - Leading manufacturer of eco-friendly paper bags in Hyderabad. 100% recyclable, biodegradable, and customizable paper bags for businesses. Sustainable packaging solutions with custom printing options.",
  keywords: ["EcoBagsFactory", "Eco Bag Factory", "eco-friendly paper bags", "paper bags manufacturer", "sustainable packaging", "recyclable bags", "biodegradable bags", "custom paper bags", "paper bags Hyderabad", "eco bags factory", "kraft paper bags", "printed paper bags", "shopping bags", "gift bags", "grocery bags"],
  authors: [{ name: "EcoBagsFactory" }],
  creator: "EcoBagsFactory",
  publisher: "EcoBagsFactory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "EcoBagsFactory - Eco-friendly Paper Bags Manufacturer",
    description: "Leading manufacturer of sustainable, recyclable paper bags in Hyderabad. Custom designs, premium quality, eco-friendly solutions.",
    url: "https://ecobagsfactory.org",
    siteName: "EcoBagsFactory",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-bags.jpg",
        width: 1200,
        height: 630,
        alt: "EcoBagsFactory - Eco-friendly Paper Bags",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoBagsFactory - Eco-friendly Paper Bags Manufacturer",
    description: "Leading manufacturer of sustainable, recyclable paper bags in Hyderabad. Custom designs, premium quality, eco-friendly solutions.",
    images: ["/hero-bags.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "b9InmFFgYVC51TXjkzL2xY8ZOCB2H6mVvPuRnSaEz9s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://ecobagsfactory.org/#organization",
    "name": "EcoBagsFactory",
    "alternateName": ["Eco Bag Factory", "EcoBags Factory", "Eco Bags Factory", "Eco Bags Hyderabad", "Eco Bags Hyd"],
    "url": "https://ecobagsfactory.org",
    "logo": "https://ecobagsfactory.org/hero-bags.jpg",
    "description": "Leading manufacturer of eco-friendly, recyclable paper bags in Hyderabad. Sustainable packaging solutions for businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 91, Rajiv Gandhi Nagar, Prashanthi Nagar, Kukatpally",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500072",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9949826222",
      "contactType": "customer service",
      "email": "eco4bags@gmail.com",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "sameAs": [
      "https://ecobagsfactory.org"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://ecobagsfactory.org/#localbusiness",
    "name": "EcoBagsFactory - Eco Bags Hyderabad",
    "image": "https://ecobagsfactory.org/hero-bags.jpg",
    "description": "Premier eco-friendly paper bags manufacturer in Hyderabad. Custom printed bags, kraft bags, shopping bags, and gift bags. 100% recyclable and biodegradable.",
    "url": "https://ecobagsfactory.org",
    "telephone": "+91-9949826222",
    "email": "eco4bags@gmail.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 91, Rajiv Gandhi Nagar, Prashanthi Nagar, Kukatpally",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500072",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4947",
      "longitude": "78.3996"
    },
    "areaServed": [
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "Place", "name": "Kukatpally" },
      { "@type": "Place", "name": "Secunderabad" },
      { "@type": "Place", "name": "Banjara Hills" },
      { "@type": "Place", "name": "Madhapur" },
      { "@type": "Place", "name": "Gachibowli" },
      { "@type": "Place", "name": "HITEC City" },
      { "@type": "State", "name": "Telangana" }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Eco-Friendly Paper Bags",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Kraft Paper Bags" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Custom Printed Bags" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "White Premium Bags" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Shopping Bags" } },
        { "@type": "Offer", "itemOffered": { "@type": "Product", "name": "Gift Bags" } }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // AggregateRating Schema for Reviews
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "EcoBagsFactory Paper Bags",
    "description": "Premium eco-friendly paper bags manufactured in Hyderabad",
    "brand": {
      "@type": "Brand",
      "name": "EcoBagsFactory"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Retail Store Owner"
        },
        "reviewBody": "Excellent quality paper bags. Perfect for our boutique. Fast delivery to Banjara Hills."
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Restaurant Owner"
        },
        "reviewBody": "Best eco-friendly bags in Hyderabad. Great for food packaging. Highly recommend!"
      }
    ]
  };

  // Website Schema for Sitelinks Search Box
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "EcoBagsFactory",
    "alternateName": ["Eco Bag Factory", "Eco Bags Hyderabad"],
    "url": "https://ecobagsfactory.org",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://ecobagsfactory.org/products?search={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />

        {/* Preload critical assets */}
        <link rel="preload" href="/hero-bags.jpg" as="image" type="image/jpeg" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ecobagsfactory.org" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <Breadcrumbs />
          <main className="flex-1" role="main" aria-label="Main content">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
        <Sonner />
      </body>
    </html>
  );
}

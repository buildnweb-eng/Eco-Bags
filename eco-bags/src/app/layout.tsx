import type { Metadata } from "next";
import Script from "next/script";
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
    default: "EcoBagsFactory | Paperbags Manufacturer India | ecobags paperbags - Premium Paper Bags Manufacturer",
    template: "%s | EcoBagsFactory - Paperbags Manufacturer"
  },
  description: "EcoBagsFactory - Leading paperbags manufacturer in India. Premium quality paperbags manufacturer, ecobags manufacturer, paper bags manufacturer. EcoBagsFactory is the trusted paperbags manufacturer in Hyderabad, India, and UK. Custom paperbags manufacturer offering wholesale ecobags, bulk paper bags manufacturing. Best paperbags manufacturer with 100% recyclable and biodegradable bags. Top paper bag manufacturer and paper bag manufacturers in Hyderabad.",
  keywords: ["paperbags manufacturer", "paperbags manufacturer India", "paperbags manufacturer Hyderabad", "paperbags manufacturer hyd", "paperbags manufacturer UK", "paper bags manufacturer", "paper bags manufacturer India", "ecobags manufacturer", "ecobags manufacturer India", "EcoBagsFactory", "EcoBags Factory", "EcoBagsFactory hyd", "Eco Bags Factory", "eco bags", "paper bags", "kraft paperbags manufacturer", "custom paperbags manufacturer", "printed paperbags manufacturer", "wholesale paperbags manufacturer", "bulk paperbags manufacturer", "shopping bags manufacturer", "gift bags manufacturer", "grocery bags manufacturer", "recyclable bags manufacturer", "biodegradable bags manufacturer", "sustainable packaging manufacturer", "eco friendly bags manufacturer", "retail bags manufacturer", "carry bags manufacturer", "eco packaging manufacturer", "green packaging manufacturer", "paper bag manufacturer", "paper bag manufacturers", "paper bag manufacturer hyderabad", "paper bag manufacturers hyderabad", "paper bag manufacturer in hyderabad", "paper bag manufacturers in hyderabad", "paper bag manufacturer india", "paper bag manufacturers india", "paper bag manufacturers near me"],
  authors: [{ name: "EcoBagsFactory" }],
  creator: "EcoBagsFactory",
  publisher: "EcoBagsFactory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "EcoBagsFactory - Paperbags Manufacturer India | Paper Bags Manufacturer",
    description: "EcoBagsFactory - Leading paperbags manufacturer in India. Premium paper bags manufacturer offering custom paperbags manufacturing, wholesale ecobags, bulk manufacturing. Trusted paperbags manufacturer in Hyderabad, India, and UK. 100% recyclable paperbags manufacturer.",
    url: "https://ecobagsfactory.org",
    siteName: "EcoBagsFactory - Paperbags Manufacturer",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/hero-bags.jpg",
        width: 1200,
        height: 630,
        alt: "EcoBagsFactory - ecobags paperbags manufacturer India - Premium eco-friendly paper bags",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EcoBagsFactory - Paperbags Manufacturer India | Paper Bags Manufacturer",
    description: "EcoBagsFactory - Leading paperbags manufacturer in India. Premium paper bags manufacturer. Custom paperbags manufacturing, wholesale, bulk orders. Trusted paperbags manufacturer.",
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
    "@type": ["Organization", "Manufacturer"],
    "@id": "https://ecobagsfactory.org/#organization",
    "name": "EcoBagsFactory - Paperbags Manufacturer",
    "alternateName": ["EcoBagsFactory", "paperbags manufacturer", "paperbags manufacturer India", "paperbags manufacturer Hyderabad", "paper bags manufacturer", "EcoBags Factory", "Eco Bags Factory", "EcoBagsFactory hyd", "ecobags manufacturer", "ecobags manufacturer India", "paperbags manufacturer hyd", "paperbags manufacturer UK", "paper bag manufacturer", "paper bag manufacturers", "paper bag manufacturer hyderabad", "paper bag manufacturers hyderabad", "paper bag manufacturer in hyderabad", "paper bag manufacturers in hyderabad", "paper bag manufacturer india", "paper bag manufacturers india"],
    "url": "https://ecobagsfactory.org",
    "logo": "https://ecobagsfactory.org/hero-bags.jpg",
    "description": "EcoBagsFactory - Leading paperbags manufacturer in India. Premier paper bags manufacturer offering custom paperbags manufacturing, wholesale ecobags manufacturing, bulk paper bags production. Trusted paperbags manufacturer in Hyderabad, India, and UK. 100% recyclable paperbags manufacturer delivering nationwide. Expert ecobags and paperbags manufacturer since 2010.",
    "foundingDate": "2010",
    "productionLocation": ["India", "Hyderabad"],
    "naics": "322220",
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Custom Paperbags Manufacturing",
          "description": "Professional paperbags manufacturer offering custom printed paper bags"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Wholesale Paperbags Manufacturing",
          "description": "Bulk paperbags manufacturer for wholesale orders"
        }
      }
    ],
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
    "@type": ["LocalBusiness", "Manufacturer"],
    "@id": "https://ecobagsfactory.org/#localbusiness",
    "name": "EcoBagsFactory - Paper Bag Manufacturer & Manufacturers in Hyderabad | Paperbags Manufacturer India",
    "alternateName": ["Paperbags Manufacturer Hyderabad", "Paper Bag Manufacturer Hyderabad", "Paper Bag Manufacturers Hyderabad", "Paper Bag Manufacturers in Hyderabad"],
    "image": "https://ecobagsfactory.org/hero-bags.jpg",
    "description": "EcoBagsFactory - Leading paperbags manufacturer in India. Premier paper bags manufacturer offering custom paperbags manufacturing, wholesale manufacturing, bulk production. Trusted paperbags manufacturer in Hyderabad, India, and UK. Expert ecobags manufacturer and paperbags manufacturer delivering 100% recyclable bags nationwide. Professional paper bags manufacturer since 2010.",
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
    "alternateName": ["EcoBagsFactory", "ecobags", "paperbags", "EcoBags Factory", "ecobags India", "paperbags India", "ecobags manufacturer", "paperbags manufacturer", "ecobags online", "paperbags online", "buy ecobags", "buy paperbags", "paper bag manufacturer", "paper bag manufacturers", "paper bag manufacturer hyderabad", "paper bag manufacturers hyderabad"],
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

        {/* Google tag (gtag.js) — GA4 + Google Ads: G-MVER1PGB7G */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MVER1PGB7G"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MVER1PGB7G');
          `}
        </Script>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://ecobagsfactory.org'),
  title: {
    default: "EcoBagsFactory - Eco-friendly Paper Bags Manufacturer in Hyderabad",
    template: "%s | EcoBagsFactory"
  },
  description: "Leading manufacturer of eco-friendly paper bags in Hyderabad. 100% recyclable, biodegradable, and customizable paper bags for businesses. Sustainable packaging solutions with custom printing options.",
  keywords: ["eco-friendly paper bags", "paper bags manufacturer", "sustainable packaging", "recyclable bags", "biodegradable bags", "custom paper bags", "paper bags Hyderabad", "eco bags factory", "kraft paper bags", "printed paper bags", "shopping bags", "gift bags", "grocery bags"],
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
    google: "b9InmFFgYVC51TXjkzL2xY8ZOCB2H6mVvPuf",
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
    "name": "EcoBagsFactory",
    "alternateName": "EcoBags Factory",
    "url": "https://ecobagsfactory.org",
    "logo": "https://ecobagsfactory.org/hero-bags.jpg",
    "description": "Leading manufacturer of eco-friendly, recyclable paper bags in Hyderabad. Sustainable packaging solutions for businesses.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 91, Rajiv Gandhi Nagar, Prashanthi Nagar, Kukatpally",
      "addressLocality": "Hyderabad",
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

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
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

import Link from "next/link";
import { ShoppingBag, Mail, Phone, MapPin, Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <ShoppingBag className="w-6 h-6 text-primary" />
              </div>
              <span className="text-2xl font-bold text-primary">EcoBagsFactory</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Eco-friendly Paper Bags for a Greener Tomorrow
            </p>
            <div className="flex items-center gap-2 text-primary">
              <Leaf className="w-5 h-5" />
              <span className="text-sm font-medium">100% Recyclable</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/custom-orders"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/kraft-paper-bags"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Kraft Paper Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/white-paper-bags"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  White Paper Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/custom-printed-bags"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Printed Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-bags-hyderabad"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Gift Bags
                </Link>
              </li>
              <li>
                <Link
                  href="/shopping-bags-wholesale"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Wholesale Bags
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Service Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/eco-bags-hyderabad"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Hyderabad
                </Link>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  All over India
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  USA
                </span>
              </li>
              <li>
                <span className="text-sm text-muted-foreground">
                  UK
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                <span>Plot No. 91, Rajiv Gandhi Nagar, Kukatpally, Hyderabad - 500072</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+91 9949826222</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>eco4bags@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EcoBags. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


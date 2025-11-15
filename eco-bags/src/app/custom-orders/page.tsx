"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Palette, Ruler, Package, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function CustomOrders() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    quantity: "",
    paperType: "",
    paperGSM: "",
    printing: "",
    handles: "",
    lamination: "",
    specialTreatment: "",
    variety: "",
    customSize: "",
    additionalRequirements: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send order email via API
      const response = await fetch('/api/send-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        toast({
          title: "Order Request Submitted!",
          description: "Your custom order details have been sent via email. We'll contact you shortly.",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          quantity: "",
          paperType: "",
          paperGSM: "",
          printing: "",
          handles: "",
          lamination: "",
          specialTreatment: "",
          variety: "",
          customSize: "",
          additionalRequirements: "",
        });
      } else {
        throw new Error(data.message || 'Failed to send order');
      }
    } catch (error) {
      console.error('Error submitting order:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit order. Please contact us at balamsanjay2003@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const customizationOptions = [
    {
      icon: Palette,
      title: "Custom Colors",
      description: "Choose from our range of eco-friendly dyes and colors",
    },
    {
      icon: Ruler,
      title: "Any Size",
      description: "We can create bags in any dimensions you need",
    },
    {
      icon: Package,
      title: "Handle Options",
      description: "Twisted, flat, or rope handles in various colors",
    },
    {
      icon: Sparkles,
      title: "Brand Printing",
      description: "High-quality logo and design printing",
    },
  ];

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Custom <span className="text-primary">Orders</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Create unique paper bags that perfectly represent your brand
          </p>
        </div>

        {/* Customization Options */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {customizationOptions.map((option, index) => (
            <Card
              key={index}
              className="hover-lift border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <option.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-foreground">
                  {option.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {option.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl">Request a Custom Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name *</Label>
                      <Input
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="9949826222"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity (Minimum 3000) *</Label>
                      <Input
                        id="quantity"
                        required
                        type="number"
                        min="3000"
                        value={formData.quantity}
                        onChange={(e) =>
                          setFormData({ ...formData, quantity: e.target.value })
                        }
                        placeholder="e.g., 3000"
                      />
                    </div>
                  </div>
                </div>

                {/* Bag Specifications */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-lg font-semibold text-foreground">Bag Specifications</h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="paperType">Paper Type *</Label>
                      <Select
                        value={formData.paperType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, paperType: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select paper type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="white">White</SelectItem>
                          <SelectItem value="brown">Brown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="paperGSM">Paper GSM *</Label>
                      <Select
                        value={formData.paperGSM}
                        onValueChange={(value) =>
                          setFormData({ ...formData, paperGSM: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select GSM" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="140gsm">140 GSM</SelectItem>
                          <SelectItem value="160gsm">160 GSM</SelectItem>
                          <SelectItem value="180gsm">180 GSM</SelectItem>
                          <SelectItem value="200gsm">200 GSM</SelectItem>
                          <SelectItem value="220gsm">220 GSM</SelectItem>
                          <SelectItem value="250gsm">250 GSM</SelectItem>
                          <SelectItem value="270gsm">270 GSM</SelectItem>
                          <SelectItem value="300gsm">300 GSM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="printing">Printing *</Label>
                      <Select
                        value={formData.printing}
                        onValueChange={(value) =>
                          setFormData({ ...formData, printing: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select printing type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="multi-color">Multi Color</SelectItem>
                          <SelectItem value="double-color">Double Color</SelectItem>
                          <SelectItem value="single-color">Single Color</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="handles">Handles *</Label>
                      <Select
                        value={formData.handles}
                        onValueChange={(value) =>
                          setFormData({ ...formData, handles: value })
                        }
                        required
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select handle type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="special">Special</SelectItem>
                          <SelectItem value="thread">Thread Handles</SelectItem>
                          <SelectItem value="paper">Paper Handles</SelectItem>
                          <SelectItem value="satin-ribbon">Satin Ribbon</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="lamination">Lamination</Label>
                      <Select
                        value={formData.lamination}
                        onValueChange={(value) =>
                          setFormData({ ...formData, lamination: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select lamination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gloss">Gloss Lamination</SelectItem>
                          <SelectItem value="matt">Matt Lamination</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="specialTreatment">Special Treatment</Label>
                      <Select
                        value={formData.specialTreatment}
                        onValueChange={(value) =>
                          setFormData({ ...formData, specialTreatment: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select special treatment" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gold-foiling">Gold Foiling</SelectItem>
                          <SelectItem value="spot-uv">Spot UV Coating</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Size & Dimensions */}
                <div className="space-y-4 pt-4 border-t">
                  <h3 className="text-lg font-semibold text-foreground">Size & Dimensions</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="variety">Pre-defined Varieties</Label>
                    <Select
                      value={formData.variety}
                      onValueChange={(value) =>
                        setFormData({ ...formData, variety: value })
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a variety or specify custom size below" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12x16x4-brown-140">12x16x4 inch - Brown - 140 GSM</SelectItem>
                        <SelectItem value="8x10x4-multicolor-200">8x10x4 inch - Multi Color Thread - 200 GSM</SelectItem>
                        <SelectItem value="9x8x8-twocolour-140">9x8x8 inch - Two Colour Thread - 140 GSM</SelectItem>
                        <SelectItem value="12x8x3.5-multicolor-spotuv">12x8x3.5 inch - Multi Color Thread - Spot UV</SelectItem>
                        <SelectItem value="6x6x4-multicolor-gloss-220">6x6x4 inch - Multi Color Thread - 220 GSR Gloss</SelectItem>
                        <SelectItem value="14x10x4-multicolor-matt-250">14x10x4 - Multi Color Special Handle - 250 GSR Matt</SelectItem>
                        <SelectItem value="15x12x4-multicolor-satin-270">15x12x4 - Multi Color Satin Ribbon - 270 GSM</SelectItem>
                        <SelectItem value="17x12x5-goldfoil-300">17x12x5 - Thread Handles Gold Foil - 300 GSM</SelectItem>
                        <SelectItem value="15.25x18.65x4-paperhandles-160">15.25x18.65x4 - Multi Color Paper Handles - 160 GSM</SelectItem>
                        <SelectItem value="11x11.5x7.5-paperhandles-180">11x11.5x7.5 - Multi Color Paper Handles - 180 GSM</SelectItem>
                        <SelectItem value="12x16x4-white-160">12x16x4 - Two Color Paper Handles White - 160 GSM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="customSize">Custom Size (Width x Height x Gusset)</Label>
                    <Input
                      id="customSize"
                      value={formData.customSize}
                      onChange={(e) =>
                        setFormData({ ...formData, customSize: e.target.value })
                      }
                      placeholder="e.g., 12 x 16 x 4 inches"
                    />
                    <p className="text-xs text-muted-foreground">
                      Leave blank if you selected a pre-defined variety above
                    </p>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div className="space-y-4 pt-4 border-t">
                  <div className="space-y-2">
                    <Label htmlFor="additionalRequirements">Additional Requirements</Label>
                    <Textarea
                      id="additionalRequirements"
                      value={formData.additionalRequirements}
                      onChange={(e) =>
                        setFormData({ ...formData, additionalRequirements: e.target.value })
                      }
                      placeholder="Describe any additional requirements, logo placement, brand colors, special designs, etc."
                      rows={6}
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full eco-gradient text-white cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Custom Order Request"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Info Section */}
          <Card className="mt-8 earth-gradient border-0">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                What Happens Next?
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">1.</span>
                  <span>We&apos;ll review your requirements within 24 hours</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">2.</span>
                  <span>Our design team will create mockups for your approval</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">3.</span>
                  <span>Once approved, production begins (typically 2-3 weeks)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">4.</span>
                  <span>Fast and secure delivery to your location</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


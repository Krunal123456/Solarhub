"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold tracking-tighter md:text-5xl"
          >
            Get Your Free Quote
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground text-lg"
          >
            Leave your details below and our experts will get back to you with a customized solar solution.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            <Card className="glass-card border-none bg-primary/5">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office Address</h3>
                  <p className="text-muted-foreground text-sm">123 Solar Hub, Green Avenue, Pune, Maharashtra 411001</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-none bg-primary/5">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone Number</h3>
                  <p className="text-muted-foreground text-sm">+91 83291 77124</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-none bg-primary/5">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Us</h3>
                  <p className="text-muted-foreground text-sm">info@nextgensolar.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-none bg-primary/5">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0 text-primary">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Working Hours</h3>
                  <p className="text-muted-foreground text-sm">Mon - Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="glass shadow-2xl">
              <CardContent className="p-8">
                {success ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">Thank you for reaching out. Our team will contact you shortly.</p>
                    <Button className="mt-8" onClick={() => setSuccess(false)}>Send Another Message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required placeholder="John Doe" className="bg-background/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" required placeholder="+91 98765 43210" className="bg-background/50" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" name="email" type="email" placeholder="john@example.com" className="bg-background/50" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="city">City / District *</Label>
                        <Input id="city" name="city" required placeholder="Pune" className="bg-background/50" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="monthlyBill">Average Monthly Electricity Bill (₹) *</Label>
                      <Input id="monthlyBill" name="monthlyBill" type="number" required placeholder="e.g. 3000" className="bg-background/50" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" name="message" placeholder="How can we help you?" className="min-h-[120px] bg-background/50" />
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg bg-primary hover:bg-primary/90 text-white rounded-xl">
                      {isSubmitting ? "Sending..." : "Submit Inquiry"} <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

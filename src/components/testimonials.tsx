"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "संजय पाटील",
    location: "कोल्हापूर",
    quote: "आमच्या घराचे वीज बिल ४५०० रुपयांवरून ५०० रुपयांवर आले. सेवा अतिशय उत्कृष्ट होती.",
    rating: 5,
  },
  {
    name: "मीनल देशमुख",
    location: "पुणे",
    quote: "संपूर्ण इंस्टॉलेशन वेळेत पूर्ण झाले. टीम खूप प्रोफेशनल होती.",
    rating: 5,
  },
  {
    name: "अमित शिंदे",
    location: "सातारा",
    quote: "सबसिडी प्रक्रिया देखील त्यांनी पूर्ण मदत करून दिली. अतिशय समाधानकारक काम.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-muted-foreground md:text-xl"
          >
            Join thousands of happy families saving on electricity.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            >
              <Card className="h-full border-none shadow-lg bg-card/80 backdrop-blur-sm relative">
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                <CardContent className="pt-8 px-6 pb-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-6">&quot;{test.quote}&quot;</p>
                  <div>
                    <p className="font-bold">{test.name}</p>
                    <p className="text-sm text-muted-foreground">{test.location}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

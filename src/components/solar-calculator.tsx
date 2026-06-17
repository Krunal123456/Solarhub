"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, Download, Share2, ArrowRight, Info, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Simplified Calculation Logic
function calculateSolar(bill: number, propertyType: string) {
  const unitRate = propertyType === "commercial" ? 10 : 8; // approx ₹/unit
  const monthlyUnits = bill / unitRate;
  const systemSizeKw = Math.max(1, Math.ceil(monthlyUnits / 120)); // 1kW = ~120 units/month
  
  const estimatedCost = systemSizeKw * 60000; // ₹60,000 per kW approx
  
  let subsidy = 0;
  if (propertyType === "residential") {
    // PM Surya Ghar Yojana logic approx
    if (systemSizeKw <= 2) subsidy = systemSizeKw * 30000;
    else if (systemSizeKw === 3) subsidy = 78000;
    else subsidy = 78000; // max subsidy
  }

  const netCost = estimatedCost - subsidy;
  const annualSavings = bill * 12 * 0.9; // 90% savings
  const paybackPeriod = netCost / annualSavings;
  const roi = (annualSavings / netCost) * 100;

  return {
    systemSizeKw,
    estimatedCost,
    subsidy,
    netCost,
    annualSavings,
    paybackPeriod: paybackPeriod.toFixed(1),
    roi: roi.toFixed(1)
  };
}

export function SolarCalculator() {
  const [bill, setBill] = useState("");
  const [state, setState] = useState("");
  const [propertyType, setPropertyType] = useState("residential");
  const [result, setResult] = useState<ReturnType<typeof calculateSolar> | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bill || isNaN(Number(bill))) return;
    const res = calculateSolar(Number(bill), propertyType);
    setResult(res);
  };

  const handleShareWhatsApp = () => {
    if (!result) return;
    const text = `Hey, I just calculated my solar savings with NextGen Solar!\n\n💡 System Size: ${result.systemSizeKw}kW\n💰 Annual Savings: ₹${result.annualSavings.toLocaleString()}\n🎁 Estimated Subsidy: ₹${result.subsidy.toLocaleString()}\n\nGet your free quote today!`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden" id="calculator">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-muted/30 dark:bg-muted/10 z-0" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container relative z-10 px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-4"
          >
            <Calculator className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide">AI-Powered Savings Calculator</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          >
            Calculate Your Solar ROI
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-muted-foreground md:text-xl"
          >
            Find out how much you can save, your recommended system size, and eligible government subsidies in seconds.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Form Column */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card border-border/50 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Your Details</CardTitle>
                <CardDescription>Enter your electricity usage to get an instant estimate.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCalculate} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="bill">Average Monthly Bill (₹)</Label>
                    <Input 
                      id="bill" 
                      placeholder="e.g., 3000" 
                      value={bill}
                      onChange={(e) => setBill(e.target.value)}
                      className="text-lg py-6 bg-background/50"
                      required
                      type="number"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select value={state} onValueChange={(v) => setState(v || "")}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select your state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MH">Maharashtra</SelectItem>
                        <SelectItem value="GJ">Gujarat</SelectItem>
                        <SelectItem value="KA">Karnataka</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="property">Property Type</Label>
                    <Select value={propertyType} onValueChange={(v) => setPropertyType(v || "")}>
                      <SelectTrigger className="bg-background/50">
                        <SelectValue placeholder="Select property type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residential">Residential</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                        <SelectItem value="industrial">Industrial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl">
                    Calculate Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Column */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <AnimatePresence mode="wait">
              {result ? (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="h-full"
                >
                  <Card className="glass border-primary/20 shadow-2xl h-full flex flex-col overflow-hidden relative">
                    <div className="absolute top-0 right-0 p-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
                    
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-2">
                        <Zap className="text-accent w-6 h-6" /> Your Solar Potential
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="grid grid-cols-2 gap-4 md:gap-6">
                        <div className="bg-background/40 p-4 rounded-xl border border-border/50">
                          <p className="text-sm text-muted-foreground mb-1">Recommended Size</p>
                          <p className="text-3xl font-bold text-foreground">{result.systemSizeKw} <span className="text-lg text-primary">kW</span></p>
                        </div>
                        <div className="bg-background/40 p-4 rounded-xl border border-border/50">
                          <p className="text-sm text-muted-foreground mb-1">Annual Savings</p>
                          <p className="text-3xl font-bold text-green-500">₹{result.annualSavings.toLocaleString()}</p>
                        </div>
                        <div className="bg-background/40 p-4 rounded-xl border border-border/50 col-span-2 flex items-center justify-between">
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Estimated Subsidy</p>
                            <p className="text-2xl font-bold text-accent">₹{result.subsidy.toLocaleString()}</p>
                          </div>
                          {propertyType === 'residential' && (
                            <div className="flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                              <Info className="w-3 h-3" /> PM Surya Ghar
                            </div>
                          )}
                        </div>
                        <div className="bg-background/40 p-4 rounded-xl border border-border/50">
                          <p className="text-sm text-muted-foreground mb-1">Payback Period</p>
                          <p className="text-2xl font-bold text-foreground">{result.paybackPeriod} <span className="text-sm font-normal">Years</span></p>
                        </div>
                        <div className="bg-background/40 p-4 rounded-xl border border-border/50">
                          <p className="text-sm text-muted-foreground mb-1">Estimated ROI</p>
                          <p className="text-2xl font-bold text-foreground">{result.roi}%</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="grid grid-cols-2 gap-4 pt-6 border-t border-border/30">
                      <Button variant="outline" className="w-full glass hover:bg-muted/50" onClick={handleShareWhatsApp}>
                        <Share2 className="mr-2 w-4 h-4" /> Share
                      </Button>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                        <Download className="mr-2 w-4 h-4" /> Get PDF
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full"
                >
                  <Card className="h-full flex items-center justify-center bg-transparent border-dashed border-2 border-border/50 min-h-[400px]">
                    <div className="text-center p-8 max-w-sm">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calculator className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">Ready to calculate?</h3>
                      <p className="text-muted-foreground text-sm">
                        Enter your monthly electricity bill and property details on the left to instantly see your potential savings and subsidy.
                      </p>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

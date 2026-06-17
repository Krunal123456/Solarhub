"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Solar Calculator", href: "/calculator" },
  { title: "Projects", href: "/projects" },
  { title: "Government Subsidy", href: "/subsidy" },
  { title: "Blog", href: "/blog" },
  { title: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const isTransparent = pathname === "/" && !isScrolled;

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent ? "bg-black/20 backdrop-blur-sm py-5" : "bg-background/95 backdrop-blur-lg shadow-md py-3 border-b border-border"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <motion.div
            whileHover={{ rotate: 90 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Sun className="h-8 w-8 text-primary" />
          </motion.div>
          <span className={`font-bold text-xl md:text-2xl tracking-tight transition-colors ${isTransparent ? 'text-white' : 'text-foreground'} group-hover:text-primary`}>
            NextGen Solar
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className={`text-base font-bold transition-colors hover:text-primary ${
                pathname === link.href ? "text-primary" : isTransparent ? "text-gray-200" : "text-foreground"
              }`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link href="/contact">
            <Button variant="default" className="bg-primary hover:bg-primary/90 rounded-full px-6 font-bold">
              Get Free Quote
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 ${isTransparent ? 'text-white' : 'text-foreground'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          className="lg:hidden absolute top-full left-0 w-full bg-background border-t border-border shadow-xl"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <nav className="flex flex-col p-4">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="py-3 px-4 text-base font-medium border-b border-border/50 hover:text-primary hover:bg-muted/50 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
            <div className="pt-4 px-4 pb-2">
              <Link href="/contact" className="block w-full">
                <Button className="w-full bg-primary hover:bg-primary/90 rounded-full font-bold">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}

import Link from "next/link";
import { Sun, Mail, Phone, MapPin, Globe, Share2, Camera, Briefcase } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-8 border-t border-zinc-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-6 text-white">
              <Sun className="h-8 w-8 text-primary" />
              <span className="font-bold text-2xl tracking-tight">NextGen Solar</span>
            </Link>
            <p className="text-sm text-zinc-400 mb-6 leading-relaxed">
              MNRE Approved Solar Installation Partner in Maharashtra. Transforming the way you consume energy with premium solar solutions.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors"><Globe className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Share2 className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Camera className="w-5 h-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Briefcase className="w-5 h-5" /></Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/calculator" className="hover:text-primary transition-colors">Solar Calculator</Link></li>
              <li><Link href="/subsidy" className="hover:text-primary transition-colors">Government Subsidy</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Solar Blog</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Services</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/services" className="hover:text-primary transition-colors">Residential Solar</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Commercial Solar</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Industrial Solar</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">Agriculture Pumps</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">AMC & Maintenance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>123 Solar Hub, Green Avenue, Pune, Maharashtra 411001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+918329177124" className="hover:text-white transition-colors">+91 83291 77124</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@nextgensolar.com" className="hover:text-white transition-colors">info@nextgensolar.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} NextGen Solar. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

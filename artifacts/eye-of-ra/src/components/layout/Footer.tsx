import { Link } from "wouter";
import logoImg from "@assets/logo_on_light@4x_1774442050463.png";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="block mb-6">
              <img src={logoImg} alt="Eye of Ra" className="h-10 w-auto" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Your strategic bridge to Egyptian textile excellence. End-to-end garment production support, consulting, and sourcing.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/founder" className="text-sm text-muted-foreground hover:text-primary transition-colors">Founder Story</Link></li>
              <li><Link href="/clients-partners" className="text-sm text-muted-foreground hover:text-primary transition-colors">Clients & Partners</Link></li>
              <li><Link href="/egypt-advantage" className="text-sm text-muted-foreground hover:text-primary transition-colors">The Egypt Advantage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link href="/services/consulting" className="text-sm text-muted-foreground hover:text-primary transition-colors">Brand Consulting</Link></li>
              <li><Link href="/services/sourcing" className="text-sm text-muted-foreground hover:text-primary transition-colors">Material Sourcing</Link></li>
              <li><Link href="/process" className="text-sm text-muted-foreground hover:text-primary transition-colors">Our Process</Link></li>
              <li><Link href="/industries" className="text-sm text-muted-foreground hover:text-primary transition-colors">Industries We Serve</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg text-foreground mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>Cairo, Egypt</li>
              <li><a href="mailto:info@eyeofra-textiles.com" className="hover:text-primary transition-colors">info@eyeofra-textiles.com</a></li>
              <li><Link href="/start-project" className="text-primary font-medium hover:underline mt-2 block">Start a Project →</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Eye of Ra Textile Sourcing. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

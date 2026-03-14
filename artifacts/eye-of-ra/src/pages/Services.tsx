import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import servicesImg from "@assets/apparel-artistry-garment-manufacturer-seamstress-intricate-pro_1773518895807.jpg";

export default function Services() {
  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive solutions for apparel production and sourcing."
        imageSrc={servicesImg}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Consulting Service Card */}
          <div className="bg-[#0f0f0f] border border-white/10 p-10 hover:border-primary/40 transition-colors group">
            <h2 className="text-4xl font-display text-white mb-6">Brand Consulting</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              We provide technical expertise and rigorous oversight from the initial sketch to the final shipment. Our consulting services ensure your designs are translated perfectly into reality while optimizing costs.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Technical Design & Tech Packs', 'Production Monitoring (WIP)', 'Costing & C&M Optimization', 'End-to-End Quality Assurance'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/services/consulting" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors uppercase tracking-wider text-sm">
              Explore Consulting Services <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Sourcing Service Card */}
          <div className="bg-[#0f0f0f] border border-white/10 p-10 hover:border-primary/40 transition-colors group">
            <h2 className="text-4xl font-display text-white mb-6">Material Sourcing</h2>
            <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
              Leverage our extensive network to find the perfect materials and manufacturing partners. From world-renowned Egyptian cotton to specialized trims, we source to your exact specifications.
            </p>
            
            <ul className="space-y-4 mb-10">
              {['Premium Natural Fibers', 'Zippers, Labels & Trims', 'Sustainable Textile Solutions', 'Audited Factory Matching'].map((item, i) => (
                <li key={i} className="flex items-center text-sm text-gray-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/services/sourcing" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors uppercase tracking-wider text-sm">
              Explore Sourcing Services <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}

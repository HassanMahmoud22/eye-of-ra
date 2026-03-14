import { Link } from "wouter";
import { motion } from "framer-motion";
import { useGetStats } from "@workspace/api-client-react";
import { ArrowRight, CheckCircle2, Globe2, ShieldCheck, Leaf } from "lucide-react";
import heroImg from "@assets/expert-suitmaker-tailoring-studio_1773518895805.jpg";
import designImg from "@assets/female-fashion-designer-looking-drawings-sketches-that-are-pin_1773518895807.jpg";
import fabricImg from "@assets/close-up-texture-linen-fabric_1773518895807.jpg";
import productionImg from "@assets/garment-production-process-armir-textile-factory-modern-indust_1773518895807.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  const { data: stats } = useGetStats();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={heroImg} 
            alt="Craftsman tailoring a suit"
            className="w-full h-full object-cover object-center scale-105 transform animate-[slow-zoom_20s_ease-in-out_infinite alternate]"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.span 
              variants={fadeInUp}
              className="block text-primary tracking-[0.2em] text-sm md:text-base font-medium mb-6 uppercase"
            >
              EST. 2021 • CAIRO, EGYPT
            </motion.span>
            
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl font-display text-white mb-8 leading-tight"
            >
              Your Strategic Bridge to <br className="hidden md:block"/>
              <span className="text-gradient-gold italic">Egyptian Textile</span> Excellence
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light leading-relaxed"
            >
              End-to-end garment production support, technical consulting, and material sourcing for premium global apparel brands.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="/start-project"
                className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-all duration-300"
              >
                START A PROJECT
              </Link>
              <Link 
                href="/services"
                className="px-8 py-4 border border-white/20 text-white font-medium tracking-wide hover:border-primary hover:text-primary transition-all duration-300"
              >
                EXPLORE SERVICES
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-y border-white/5 relative z-20 -mt-10 mx-4 md:mx-12 rounded-xl glass-panel">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-display text-primary">{stats?.yearsExperience || "25"}+</h3>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Years Industry Exp.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-display text-primary">{stats?.countriesServed || "15"}+</h3>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Countries Served</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-display text-primary">{stats?.factoryPartners || "50"}+</h3>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Factory Partners</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-4xl md:text-5xl font-display text-primary">{stats?.projectsCompleted || "200"}+</h3>
              <p className="text-sm text-muted-foreground tracking-wider uppercase">Projects Completed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Pillars */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display text-white mb-6">Our Core Pillars</h2>
            <div className="w-24 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Consulting Pillar */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-none border border-white/10 hover:border-primary/50 transition-colors duration-500"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={designImg} 
                  alt="Brand Consulting" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
              </div>
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">From Sketch to Shelf</span>
                <h3 className="text-3xl font-display text-white mb-4">Brand Consulting</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3">
                  Technical design, tech packs, production monitoring (WIP), costing optimization, and rigorous quality assurance at every stage.
                </p>
                <Link href="/services/consulting" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors">
                  Explore Consulting <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Sourcing Pillar */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-none border border-white/10 hover:border-primary/50 transition-colors duration-500"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={fabricImg} 
                  alt="Material Sourcing" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />
              </div>
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">Materials That Make a Statement</span>
                <h3 className="text-3xl font-display text-white mb-4">Material Sourcing</h3>
                <p className="text-muted-foreground mb-8 line-clamp-3">
                  Premium natural fibers, organic Egyptian cotton, trims, sustainable textile solutions, and strategic factory matching.
                </p>
                <Link href="/services/sourcing" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors">
                  Explore Sourcing <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Egypt Advantage */}
      <section className="py-32 bg-[#0d0d0d] relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-display text-white mb-6">
                The Egypt Advantage
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Unlock global competitiveness with Egypt's strategic position in the textile industry. We guide you through duty-free export programs and vertically integrated manufacturing.
              </motion.p>
              
              <div className="space-y-6">
                {[
                  { icon: <Globe2 className="w-6 h-6 text-primary"/>, title: "Duty-Free Export Access", desc: "QIZ, EURO1, EUROMED, Agadir, and COMESA agreements." },
                  { icon: <ShieldCheck className="w-6 h-6 text-primary"/>, title: "Vertical Integration", desc: "From raw Egyptian cotton to spinning, weaving, and final garment assembly." },
                  { icon: <Leaf className="w-6 h-6 text-primary"/>, title: "Sustainability", desc: "Eco-friendly facilities and organic material sourcing." },
                ].map((item, i) => (
                  <motion.div key={i} variants={fadeInUp} className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-white text-lg font-medium mb-2">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div variants={fadeInUp} className="mt-10">
                <Link href="/egypt-advantage" className="inline-flex items-center px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
                  Read More About Egypt
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[600px] w-full"
            >
              <img 
                src={productionImg} 
                alt="Egypt Textile Factory"
                className="w-full h-full object-cover border border-white/10"
              />
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary/20 blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-display text-primary-foreground mb-6">Ready to elevate your production?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Partner with Eye of Ra to streamline your sourcing, ensure quality, and access premium Egyptian manufacturing.
          </p>
          <Link href="/start-project" className="inline-block px-10 py-4 bg-background text-foreground font-medium tracking-wide hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            START YOUR PROJECT
          </Link>
        </div>
      </section>
    </div>
  );
}

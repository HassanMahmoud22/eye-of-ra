import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { ArrowRight } from "lucide-react";
import heroImg from "@assets/middle-eastern-worker-checks-stock-tablet-clothing-store_1773518895806.jpg";
import factoryImg from "@assets/garment-production-process-armir-textile-factory-modern-indust_1773518895807.jpg";
import craftImg from "@assets/man-brown-shirt-is-seen-working-piece-clothing-this-image-can-_1773519582128.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const brandLogos = [
  { name: "Calvin Klein", parent: "PVH Corporation" },
  { name: "Tommy Hilfiger", parent: "PVH Corporation" },
  { name: "Hugo Boss", parent: "" },
  { name: "Macy's", parent: "" },
  { name: "Banana Republic", parent: "" },
];

const clientTypes = [
  {
    title: "Startup Brands",
    desc: "Launching their first collection with confidence. We provide the guidance and infrastructure to bring ideas to life without the steep learning curve.",
    highlight: "First collection support"
  },
  {
    title: "Growing Brands",
    desc: "Scaling production and expanding product lines. We streamline operations and optimize costs as your brand grows.",
    highlight: "Production scaling"
  },
  {
    title: "International Brands",
    desc: "Seeking trusted manufacturing partners in Egypt. We serve as your local strategic partner, ensuring quality and compliance.",
    highlight: "Egypt market entry"
  },
];

export default function ClientsPartners() {
  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero
        title="Clients & Partners"
        subtitle="Supporting emerging and established brands through consulting, sourcing, and production management."
        imageSrc={heroImg}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6 tracking-wide">Trusted by Leading Brands</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our founder and team have built deep relationships with some of the world's most recognized fashion houses, bringing that caliber of expertise to every project we undertake.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-24"
        >
          {brandLogos.map((brand) => (
            <motion.div
              key={brand.name}
              variants={fadeInUp}
              className="bg-[#0f0f0f] border border-white/10 hover:border-primary/40 transition-colors p-8 flex flex-col items-center justify-center text-center min-h-[140px]"
            >
              <span className="text-xl font-display text-white tracking-wide">{brand.name}</span>
              {brand.parent && (
                <span className="text-xs text-primary mt-2 tracking-wider uppercase">{brand.parent}</span>
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={factoryImg} alt="Manufacturing partnership" className="w-full h-[450px] object-cover border border-white/10" />
          </motion.div>
          <div>
            <h2 className="text-3xl md:text-4xl font-display text-white mb-6 tracking-wide">A Diverse Portfolio of Partnerships</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Eye of Ra has worked with a diverse range of brands, supporting both emerging and established companies through consulting, sourcing, and production management.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our experience spans local and international projects, helping brands successfully bring their collections to market. From first-time founders to global fashion houses, we adapt our approach to meet each client's unique needs and growth stage.
            </p>
            <div className="flex items-center gap-4 text-sm text-primary tracking-wider">
              <div className="w-12 h-[1px] bg-primary" />
              <span>25+ YEARS OF INDUSTRY RELATIONSHIPS</span>
            </div>
          </div>
        </div>

        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-6 tracking-wide">Built for Brands at Every Stage</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you're launching your first line or expanding globally, we provide the right level of support.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {clientTypes.map((type) => (
              <motion.div
                key={type.title}
                variants={fadeInUp}
                className="bg-[#0f0f0f] border border-white/10 p-10 hover:border-primary/40 transition-colors group"
              >
                <span className="text-xs text-primary tracking-[0.2em] uppercase mb-4 block">{type.highlight}</span>
                <h3 className="text-2xl font-display text-white mb-4 tracking-wide">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-display text-white mb-6 tracking-wide">Our Network & Manufacturing Partners</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              We maintain a vetted network of manufacturing partners across Egypt, each selected for their specialization, capacity, and commitment to quality.
            </p>
            <div className="space-y-4">
              {[
                "50+ audited factory partners across Egypt",
                "Spanning USA, Europe, China, Turkey, and Italy",
                "Specialized in fashion, sportswear, uniforms, and accessories",
                "WRAP, SEDEX, BSCI, and ISO certified partners",
                "Flexible MOQs for startups through enterprise scale",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={craftImg} alt="Artisan crafting garment" className="w-full h-[400px] object-cover border border-white/10" />
          </motion.div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-12 md:p-16 text-center">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6 tracking-wide">Partner With Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Join a growing portfolio of brands who trust Eye of Ra as their strategic manufacturing partner in Egypt.
          </p>
          <Link href="/start-project" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wider hover:bg-primary/90 transition-colors text-sm">
            START A PROJECT <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

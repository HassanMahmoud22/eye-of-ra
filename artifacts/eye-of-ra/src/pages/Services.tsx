import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import servicesImg from "@assets/apparel-artistry-garment-manufacturer-seamstress-intricate-pro_1773518895807.jpg";
import leatherImg from "@assets/closeup-brown-leather-bag-clothes-hanged-white-hangers_1773518895806.jpg";
import thimblesImg from "@assets/high-angle-thimbles-with-scissors-textile_1773519582129.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const services = [
  {
    number: "01",
    title: "Consulting & Product Development",
    items: [
      "Technical garment design and tech pack preparation",
      "Production planning, costing strategies, and brand guidance",
    ],
  },
  {
    number: "02",
    title: "Textile Sourcing & Factory Matching",
    items: [
      "Sourcing premium fabrics including Egyptian cotton and high-performance materials",
      "Matching brands with trusted manufacturers and negotiating competitive pricing",
    ],
  },
  {
    number: "03",
    title: "Production Monitoring",
    items: [
      "Work-in-progress monitoring (WIP) throughout manufacturing",
      "Factory visits, progress tracking, and issue resolution",
    ],
  },
  {
    number: "04",
    title: "Quality Control",
    items: [
      "Multi-stage quality inspections",
      "Ensuring production meets international quality standards",
    ],
  },
  {
    number: "05",
    title: "Flexible Production Support",
    items: [
      "Flexible minimum order quantities for startups",
      "Scalable production solutions for growing brands",
    ],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero 
        title="Our Services" 
        subtitle="End-to-end garment consulting, sourcing, and production management."
        imageSrc={servicesImg}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Eye of Ra provides end-to-end garment consulting, sourcing, and production management, guiding brands from initial concept to finished product delivery.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={fadeInUp}
              className="bg-[#0f0f0f] border border-white/10 p-8 hover:border-primary/40 transition-colors group"
            >
              <span className="text-4xl font-display text-primary/20 block mb-4">{service.number}</span>
              <h3 className="text-xl font-display text-white mb-6 tracking-wide">{service.title}</h3>
              <ul className="space-y-4">
                {service.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#0f0f0f] border border-white/10 hover:border-primary/40 transition-colors group overflow-hidden"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img src={leatherImg} alt="Premium products" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10">
              <h2 className="text-3xl font-display text-white mb-6 tracking-wide">Brand Consulting</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                We provide technical expertise and rigorous oversight from the initial sketch to the final shipment. Our consulting services ensure your designs are translated perfectly into reality while optimizing costs.
              </p>
              <Link href="/services/consulting" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors uppercase tracking-wider text-sm">
                Explore Consulting Services <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#0f0f0f] border border-white/10 hover:border-primary/40 transition-colors group overflow-hidden"
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img src={thimblesImg} alt="Craftsmanship tools" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-10">
              <h2 className="text-3xl font-display text-white mb-6 tracking-wide">Material Sourcing</h2>
              <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Leverage our extensive network to find the perfect materials and manufacturing partners. From world-renowned Egyptian cotton to specialized trims, we source to your exact specifications.
              </p>
              <Link href="/services/sourcing" className="inline-flex items-center text-primary font-medium hover:text-white transition-colors uppercase tracking-wider text-sm">
                Explore Sourcing Services <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

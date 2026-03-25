import { motion, type Variants } from "framer-motion";
import { Link } from "wouter";
import { PageHero } from "@/components/ui/PageHero";
import { ArrowRight } from "lucide-react";
import heroImg from "@assets/apparel-artistry-garment-manufacturer-seamstress-intricate-pro_1773518895807.jpg";
import sketchesImg from "@assets/close-up-suitmaker-comparing-sketches_1773929636472.jpg";
import factoryImg from "@assets/garment-factory-interior-with-sewing-machines-tailoring-worksh_1773929636474.jpg";
import dressFormImg from "@assets/front-view-dress-form-with-measuring-tape_1773929636473.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const phases = [
  {
    number: "01",
    title: "Concept",
    subtitle: "Every successful collection starts with clarity.",
    description: "At the concept stage, we work closely with brands to understand their vision, target customer, and product direction while evaluating the technical feasibility of production. By aligning creative ideas with manufacturing realities from the beginning, we ensure the project starts on strong and realistic foundations.",
    items: ["Brand vision alignment", "Target customer analysis", "Technical feasibility evaluation", "Product direction strategy"],
  },
  {
    number: "02",
    title: "Planning",
    subtitle: "Before production begins, preparation is key.",
    description: "During the development stage, we transform ideas into precise production guidelines through fabric sourcing, trim selection, and detailed technical documentation. This structured preparation creates confidence for both the brand and the factory, ensuring the product can be executed accurately and efficiently.",
    items: ["Fabric sourcing & trim selection", "Technical documentation", "Factory matching & selection", "Cost optimization & timeline"],
  },
  {
    number: "03",
    title: "Execution",
    subtitle: "Once production begins, execution becomes the priority.",
    description: "Eye of Ra coordinates closely with manufacturing partners to ensure the collection is produced according to the agreed standards. Through active production monitoring, quality inspections, and timeline management, we keep the process moving smoothly and prevent issues before they escalate.",
    items: ["Production monitoring (WIP)", "Multi-stage quality control", "Timeline management", "Issue prevention & resolution"],
  },
  {
    number: "04",
    title: "Delivery",
    subtitle: "Production is only complete when the product is ready to reach the market.",
    description: "At the final stage, we oversee finishing, packaging, and shipment coordination to ensure every item is delivered in its best form. Our goal is to provide brands with sell-ready products, prepared for distribution and customer satisfaction.",
    items: ["Finishing oversight", "Packaging coordination", "Shipment management", "Sell-ready product delivery"],
  },
];

export default function Process() {
  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero
        title="Our Process"
        subtitle="From concept to delivery — a structured approach to garment manufacturing."
        imageSrc={heroImg}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6 tracking-wide">From Production Complexity to Clarity</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Many brands assume manufacturing is simple: Design, Factory, Product. In reality, fashion production involves many decisions — from fabric selection and factory capabilities to quality control, production monitoring, and shipping. Each step directly impacts cost, quality, and delivery time.
          </p>
        </div>

        <div className="bg-[#0f0f0f] border border-white/10 p-10 md:p-12 text-center mb-24">
          <p className="text-primary text-lg font-display tracking-wide mb-4">That's why brands don't just need a factory</p>
          <p className="text-white text-2xl md:text-3xl font-display tracking-wide">They need a partner who understands the entire production journey.</p>
        </div>

        <div className="space-y-24 mb-24">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.number}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={fadeInUp}
              className="grid lg:grid-cols-[120px_1fr] gap-8"
            >
              <div className="flex lg:flex-col items-center lg:items-start gap-4">
                <span className="text-6xl md:text-7xl font-display text-primary/20">{phase.number}</span>
              </div>
              <div className="bg-[#0f0f0f] border border-white/5 p-8 md:p-10 hover:border-primary/20 transition-colors">
                <h3 className="text-3xl font-display text-white mb-2 tracking-wide">{phase.title}</h3>
                <p className="text-primary text-sm tracking-wider mb-6">{phase.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-8">{phase.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative overflow-hidden border border-white/10"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img src={sketchesImg} alt="Design concept and sketches" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-sm font-display text-primary tracking-wide">Concept & Planning</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative overflow-hidden border border-white/10"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img src={factoryImg} alt="Garment factory production line" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-sm font-display text-primary tracking-wide">Execution</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative overflow-hidden border border-white/10"
          >
            <div className="aspect-[3/2] overflow-hidden">
              <img src={dressFormImg} alt="Quality control and delivery" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="text-sm font-display text-primary tracking-wide">Delivery</span>
            </div>
          </motion.div>
        </div>

        <div className="border border-white/10 p-10 md:p-12 mb-24">
          <h2 className="text-3xl font-display text-white mb-6 tracking-wide">Where Production Risk Becomes Our Responsibility</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Unlike traditional sourcing agents, we remain actively involved throughout production through continuous follow-up and multi-stage quality control, ensuring issues are resolved before they become costly failures. At Eye of Ra, production is not a handoff — it is a shared responsibility.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Fewer Production Surprises", desc: "Early detection through regular monitoring prevents costly last-minute issues." },
              { title: "Faster Decision-Making", desc: "Clear communication channels and proactive updates keep your project on track." },
              { title: "Better Cost Control", desc: "Competitive pricing negotiation and cost optimization at every stage." },
              { title: "Smoother Product Launches", desc: "Sell-ready products delivered on time and to specification." },
            ].map((item, i) => (
              <div key={i} className="bg-[#0f0f0f] p-6 border border-white/5">
                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary/5 border border-primary/20 p-12 text-center">
          <h2 className="text-3xl font-display text-white mb-6 tracking-wide">Ready to Begin?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Let us guide your brand from concept to delivery with a structured, transparent process.
          </p>
          <Link href="/start-project" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wider hover:bg-primary/90 transition-colors text-sm">
            START A PROJECT <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

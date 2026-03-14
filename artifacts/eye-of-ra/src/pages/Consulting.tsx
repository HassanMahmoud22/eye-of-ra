import { motion, type Variants } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import consultingImg from "@assets/man-woman-looking-tablet-that-is-display_1773518895806.jpg";
import designImg from "@assets/female-fashion-designer-looking-drawings-sketches-that-are-pin_1773518895807.jpg";
import tailorImg from "@assets/top-view-tailor-items-silk_1773519582129.jpg";
import sewingImg from "@assets/woman-working-sewing-machine-with-blue-fabric_1773518895806.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Consulting() {
  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero 
        title="Brand Consulting" 
        subtitle="From Sketch to Shelf: Precision oversight of your production lifecycle."
        imageSrc={consultingImg}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-display text-white mb-6 tracking-wide">Technical Design & Construction</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A great garment begins with a flawless blueprint. Our technical design team translates your creative vision into comprehensive tech packs that factories understand implicitly.
            </p>
            <ul className="space-y-3">
              <li className="text-gray-300 border-b border-white/5 pb-3">Detailed measurement charts and grading</li>
              <li className="text-gray-300 border-b border-white/5 pb-3">Construction callouts and stitch specifications</li>
              <li className="text-gray-300 border-b border-white/5 pb-3">Fit sample reviews and pattern corrections</li>
            </ul>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={designImg} alt="Technical Design" className="w-full h-[400px] object-cover border border-white/10" />
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <img src={tailorImg} alt="Tailoring tools and materials" className="w-full h-[400px] object-cover border border-white/10" />
          </motion.div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-display text-white mb-6 tracking-wide">Precision Tools & Expertise</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every detail matters in garment construction. Our team leverages decades of hands-on experience with cutting-edge tools and techniques to ensure your product meets exacting international standards.
            </p>
            <ul className="space-y-3">
              <li className="text-gray-300 border-b border-white/5 pb-3">Material selection guidance and testing</li>
              <li className="text-gray-300 border-b border-white/5 pb-3">Trim and accessory specification</li>
              <li className="text-gray-300 border-b border-white/5 pb-3">Wash and finish protocol development</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#0f0f0f] p-10 border border-white/5 hover:border-primary/30 transition-colors"
          >
            <h3 className="text-2xl font-display text-primary mb-4 tracking-wide">Production Monitoring (WIP)</h3>
            <p className="text-muted-foreground leading-relaxed">
              We act as your eyes and ears on the factory floor. Our Work-In-Progress tracking ensures that timelines are adhered to, bottlenecks are identified early, and errors are prevented before they compound. We conduct regular factory visits and provide transparent reporting.
            </p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#0f0f0f] p-10 border border-white/5 hover:border-primary/30 transition-colors"
          >
            <h3 className="text-2xl font-display text-primary mb-4 tracking-wide">Costing Optimization</h3>
            <p className="text-muted-foreground leading-relaxed">
              Manufacturing should be profitable without compromising quality. We provide detailed Costing & Manufacturing (C&M) analysis, recommending alternative construction methods or trim substitutions that reduce costs while maintaining the garment's integrity.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden mb-16"
        >
          <img src={sewingImg} alt="Production line sewing" className="w-full h-[300px] object-cover" />
          <div className="absolute inset-0 bg-[#0a0a0a]/60" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-2xl md:text-3xl font-display text-white text-center max-w-3xl px-8 tracking-wide">
              Your vision, our precision &mdash; every garment tells a story.
            </p>
          </div>
        </motion.div>

        <div className="bg-primary/5 p-10 md:p-16 border border-primary/20 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-display text-white mb-6 tracking-wide">Stringent Quality Assurance</h2>
          <p className="text-muted-foreground mb-8">We implement a multi-stage QA process adhering to international AQL standards:</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-full mx-auto mb-4 text-primary font-bold">1</div>
              <h4 className="text-white font-medium">Raw Material</h4>
              <p className="text-sm text-muted-foreground mt-2">Fabric inspection before cutting</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-full mx-auto mb-4 text-primary font-bold">2</div>
              <h4 className="text-white font-medium">In-line Sewing</h4>
              <p className="text-sm text-muted-foreground mt-2">Monitoring during assembly</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-primary/20 flex items-center justify-center rounded-full mx-auto mb-4 text-primary font-bold">3</div>
              <h4 className="text-white font-medium">Final Finishing</h4>
              <p className="text-sm text-muted-foreground mt-2">Pre-shipment inspection</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

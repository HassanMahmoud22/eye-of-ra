import { motion, type Variants } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import aboutImg from "@assets/old-craftsman-trainee-working_1773518895806.jpg";
import workerImg from "@assets/middle-eastern-worker-checks-stock-tablet-clothing-store_1773518895806.jpg";
import craftImg from "@assets/man-brown-shirt-is-seen-working-piece-clothing-this-image-can-_1773519582128.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function About() {
  return (
    <div className="min-h-screen pb-24">
      <PageHero 
        title="Our Story" 
        subtitle="Bridging global fashion brands with Egypt's heritage of textile excellence since 2021."
        imageSrc={aboutImg}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="prose prose-invert prose-lg mx-auto">
          <p className="lead text-xl text-primary font-display text-center mb-16 tracking-wide">
            "Eye of Ra was founded on a simple premise: international apparel brands need a reliable, strategic partner on the ground in Egypt to truly unlock the country's manufacturing potential."
          </p>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-display mb-6 tracking-wide">The Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2021 by Eissa Mohamed, an industry veteran with over 25 years of experience spanning global giants like PVH (Calvin Klein, Tommy Hilfiger) and Macy's, Eye of Ra serves as your dedicated sourcing and consulting agency. We don't just connect you to factories; we immerse ourselves in your brand's DNA to ensure that every stitch, every fabric choice, and every production run meets international standards.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={workerImg} alt="Quality inspection" className="w-full h-[350px] object-cover border border-white/10" />
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <img src={craftImg} alt="Artisan crafting garment" className="w-full h-[350px] object-cover border border-white/10" />
            </motion.div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-display mb-6 tracking-wide">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To provide end-to-end garment production support, technical consulting, and material sourcing that empowers global brands to manufacture with confidence. We demystify the supply chain, enforce stringent quality control, and open doors to duty-free export programs, transforming Egypt from a sourcing destination into your competitive advantage.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/10">
            {[
              { title: "Integrity", desc: "Complete transparency in costing, factory capabilities, and production timelines." },
              { title: "Precision", desc: "Meticulous attention to tech packs, measurements, and quality assurance processes." },
              { title: "Excellence", desc: "Uncompromising standards in raw material selection and final garment finishing." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="text-xl font-display text-white mb-4 tracking-wide">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

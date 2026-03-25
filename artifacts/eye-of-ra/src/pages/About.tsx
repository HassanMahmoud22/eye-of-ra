import { motion, type Variants } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import aboutImg from "@assets/old-craftsman-trainee-working_1773518895806.jpg";
import sewingMachineImg from "@assets/old-sewing-machine_1773929145435.jpg";
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
        subtitle="Your brand partner for apparel manufacturing in Egypt."
        imageSrc={aboutImg}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="prose prose-invert prose-lg mx-auto">
          <p className="lead text-xl text-primary font-display text-center mb-16 tracking-wide">
            "We're brands' partners, not just a sourcing office."
          </p>

          <div className="text-center mb-20 max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Eye of Ra is an Egyptian Textile Sourcing and Brand Consulting agency founded in 2021. We act as a strategic bridge between brands and manufacturing partners, providing end-to-end garment production support from concept to final delivery.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Eye of Ra is not just a sourcing office. We are brand partners. We combine brand consulting, textile sourcing, production management, and quality control to guide brands from idea to finished product.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-display mb-6 tracking-wide">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To position Egypt as a global hub for garment manufacturing and become the trusted gateway connecting fashion brands to Egypt's textile ecosystem and global markets.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img src={sewingMachineImg} alt="Textile craftsmanship" className="w-full h-[350px] object-cover border border-white/10" />
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
                To simplify the manufacturing journey for fashion brands by providing reliable sourcing, expert consulting, and transparent production management — while ensuring quality, efficiency, and competitive pricing.
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

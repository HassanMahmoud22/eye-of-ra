import { motion, type Variants } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import sourcingImg from "@assets/thread-rough-wrinkled-design-element-studio-shot_1773518895806.jpg";
import detailsImg from "@assets/high-angle-thimble-silk_1773518895807.jpg";
import tagsImg from "@assets/fabric-clothing-tag-labels-mockup_1773519582128.jpg";
import feltTagsImg from "@assets/closeup-square-felt-tags-with-jute-twine_1773519582128.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Sourcing() {
  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero 
        title="Material Sourcing" 
        subtitle="Materials That Make a Statement. Connect with Egypt's finest suppliers."
        imageSrc={sourcingImg}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <img src={detailsImg} alt="Textile details" className="w-full h-[500px] object-cover border border-white/10" />
          </motion.div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-display text-white mb-6 tracking-wide">Curated Materials & Trims</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Egypt is historically renowned for its textiles. We leverage deep-rooted supplier relationships to source materials that align with your brand's aesthetic, functional requirements, and target price points.
            </p>
            
            <div className="space-y-6">
              <div className="border-l-2 border-primary pl-6 py-2">
                <h4 className="text-xl text-white font-display mb-2 tracking-wide">Premium Natural Fibers</h4>
                <p className="text-muted-foreground text-sm">Access to authentic, extra-long staple Egyptian cotton, premium linens, and advanced knits.</p>
              </div>
              <div className="border-l-2 border-primary pl-6 py-2">
                <h4 className="text-xl text-white font-display mb-2 tracking-wide">Complete Trims Package</h4>
                <p className="text-muted-foreground text-sm">We source high-quality zippers, custom labels, threads, buttons, and polybags to complete your garment locally.</p>
              </div>
              <div className="border-l-2 border-primary pl-6 py-2">
                <h4 className="text-xl text-white font-display mb-2 tracking-wide">Sustainable Solutions</h4>
                <p className="text-muted-foreground text-sm">Connecting you with GOTS-certified organic materials and recycled fibers for eco-conscious collections.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="group relative overflow-hidden border border-white/10 hover:border-primary/30 transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={tagsImg} alt="Custom fabric labels and tags" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-xl font-display text-white tracking-wide">Custom Labels & Branding</h3>
              <p className="text-muted-foreground text-sm mt-2">Bespoke hang tags, woven labels, and packaging solutions</p>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="group relative overflow-hidden border border-white/10 hover:border-primary/30 transition-colors"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img src={feltTagsImg} alt="Colorful felt tags with jute twine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h3 className="text-xl font-display text-white tracking-wide">Trims & Accessories</h3>
              <p className="text-muted-foreground text-sm mt-2">Threads, tags, and finishing touches sourced locally</p>
            </div>
          </motion.div>
        </div>

        <div className="bg-[#0f0f0f] border border-white/5 p-12 text-center">
          <h2 className="text-3xl font-display text-primary mb-6 tracking-wide">Strategic Factory Matching</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg mb-10 leading-relaxed">
            Not every factory is right for every brand. We hold a proprietary database of over 50 audited factory partners across Egypt.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-[#151515] p-6 border border-white/5 hover:border-primary/20 transition-colors">
              <h4 className="text-white font-medium mb-2">Capacity Alignment</h4>
              <p className="text-sm text-gray-400">Matching your Minimum Order Quantities (MOQs) with factories that can scale with you.</p>
            </div>
            <div className="bg-[#151515] p-6 border border-white/5 hover:border-primary/20 transition-colors">
              <h4 className="text-white font-medium mb-2">Specialization</h4>
              <p className="text-sm text-gray-400">Pairing denim brands with denim specialists, and activewear brands with seamless knit experts.</p>
            </div>
            <div className="bg-[#151515] p-6 border border-white/5 hover:border-primary/20 transition-colors">
              <h4 className="text-white font-medium mb-2">Compliance & Ethics</h4>
              <p className="text-sm text-gray-400">Ensuring partners hold WRAP, SEDEX, BSCI, or ISO certifications for ethical manufacturing.</p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}

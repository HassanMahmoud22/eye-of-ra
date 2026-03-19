import { Link } from "wouter";
import { motion, type Variants } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { ArrowRight } from "lucide-react";
import heroImg from "@assets/clothing-rack-fashion-shop_1773518895806.jpg";
import leatherImg from "@assets/closeup-brown-leather-bag-clothes-hanged-white-hangers_1773518895806.jpg";
import soccerJerseysImg from "@assets/variety-colorful-soccer-jerseys-hanging-team-locker-room-conce_1773929261294.jpg";
import feltTagsImg from "@assets/closeup-square-felt-tags-with-jute-twine_1773519582128.jpg";
import suitsImg from "@assets/row-mens-suits-jackets-hanging-rack-display_1773518895806.jpg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const industries = [
  {
    title: "Fashion & Ready-to-Wear",
    image: leatherImg,
    items: ["Shirts", "T-shirts", "Casualwear", "Contemporary fashion"],
    desc: "From everyday essentials to contemporary collections, we support brands creating high-quality ready-to-wear garments that meet market demands."
  },
  {
    title: "Sportswear & Activewear",
    image: soccerJerseysImg,
    items: ["Performance apparel", "Training wear", "Lifestyle sportswear"],
    desc: "Technical fabrics, performance construction, and lifestyle aesthetics — we source and manage production for the activewear segment."
  },
  {
    title: "Uniforms & Corporate Apparel",
    image: suitsImg,
    items: ["Hospitality uniforms", "Retail uniforms", "Corporate garments"],
    desc: "Consistent quality and branding across large-scale uniform programs, from hospitality to corporate environments."
  },
  {
    title: "Accessories & Textile Products",
    image: feltTagsImg,
    items: ["Fabric sourcing", "Trims and accessories", "Packaging materials"],
    desc: "Beyond garments — we source fabrics, trims, labels, packaging, and accessories to complete your product ecosystem."
  },
];

export default function Industries() {
  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero
        title="Industries We Serve"
        subtitle="Supporting brands across multiple apparel segments with specialized expertise."
        imageSrc={heroImg}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-6 tracking-wide">Product Categories</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Eye of Ra supports brands across multiple apparel segments, bringing specialized manufacturing knowledge and trusted factory relationships to each category.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16 mb-24"
        >
          {industries.map((industry, i) => (
            <motion.div
              key={industry.title}
              variants={fadeInUp}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="group overflow-hidden border border-white/10 hover:border-primary/30 transition-colors">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={industry.image} alt={industry.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
              <div className={i % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <h3 className="text-3xl font-display text-white mb-4 tracking-wide">{industry.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{industry.desc}</p>
                <div className="space-y-3">
                  {industry.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="bg-primary/5 border border-primary/20 p-12 md:p-16 text-center">
          <h2 className="text-3xl font-display text-white mb-6 tracking-wide">Don't See Your Category?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Our expertise extends beyond these core segments. Contact us to discuss your specific product requirements and manufacturing needs.
          </p>
          <Link href="/start-project" className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wider hover:bg-primary/90 transition-colors text-sm">
            DISCUSS YOUR PROJECT <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

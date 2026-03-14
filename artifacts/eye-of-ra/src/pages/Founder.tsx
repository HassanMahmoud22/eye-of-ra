import { motion, type Variants } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import founderImg from "@assets/row-mens-suits-jackets-hanging-rack-display_1773518895806.jpg";
import eissaConference from "@assets/WhatsApp_Image_2026-03-14_at_23.23.57_(1)_1773524805215.jpeg";
import eissaCasual from "@assets/WhatsApp_Image_2026-03-14_at_23.23.57_1773524805216.jpeg";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Founder() {
  const timeline = [
    {
      year: "1999 - 2006",
      role: "Operations & QA",
      company: "Egyptian Clothing Company",
      desc: "Built manufacturing expertise producing dress shirts for PVH Corporation (Calvin Klein & Tommy Hilfiger)."
    },
    {
      year: "2006 - 2015",
      role: "Production Director",
      company: "Swiss Garments",
      desc: "Developed global sourcing expertise and industry relationships across USA, China, Turkey, and Italy, collaborating with brands such as Macy's, Banana Republic, and Hugo Boss."
    },
    {
      year: "2015 - 2019",
      role: "Brand Manager",
      company: "Calvin Klein (Egypt Operations)",
      desc: "Held a leadership role gaining experience in brand management and global fashion operations, directing brand compliance, sourcing strategies, and factory auditing."
    },
    {
      year: "2019 - 2020",
      role: "Founder",
      company: "ATUM Sportswear",
      desc: "Launched his own sportswear brand in Egypt, building a brand from concept to market and gaining deep empathy for the brand-side challenges of launching, sourcing, and scaling."
    },
    {
      year: "2021 - Present",
      role: "Founder & Chairman",
      company: "Eye of Ra",
      desc: "Founded Eye of Ra to support fashion brands with sourcing, consulting, and production management — bridging the gap between global brands and Egyptian manufacturing excellence."
    }
  ];

  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero
        title="Meet the Founder"
        subtitle="25+ years of global textile industry experience."
        imageSrc={founderImg}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img src={eissaCasual} alt="Eissa Mohamed" className="w-full h-[500px] object-cover object-top border border-white/10" />
          </motion.div>
          <div>
            <span className="text-primary text-xs tracking-[0.2em] uppercase mb-4 block">Founder & Chairman</span>
            <h2 className="text-4xl md:text-5xl font-display text-white mb-6 tracking-wide">Eissa Mohamed</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              With 25+ years of experience in the global textile industry, Eissa Mohamed has built an extensive network spanning factories, brands, and buyers across USA, Europe, China, Turkey, and Italy.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              His career combines manufacturing expertise, international sourcing, brand management, and entrepreneurship, giving him a unique ability to guide fashion brands from concept to production.
            </p>
            <p className="text-xl text-primary font-display tracking-wide">
              "I've sat on both sides of the table &mdash; as a factory director ensuring output, and as a brand founder worrying about margins. Eye of Ra is the partner I wish I had."
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-24 relative overflow-hidden border border-white/10"
        >
          <img src={eissaConference} alt="Eissa Mohamed at Global Textile Dialogue" className="w-full h-[400px] object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <p className="text-sm text-primary tracking-wider uppercase">Global Textile Dialogue</p>
            <p className="text-white font-display text-lg tracking-wide mt-1">Representing Egypt on the international stage</p>
          </div>
        </motion.div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-display text-white tracking-wide mb-4">Career Journey</h2>
          <div className="w-16 h-[2px] bg-primary mx-auto" />
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-16 py-8">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative pl-8 md:pl-16"
            >
              <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-[#0a0a0a]" />

              <div className="bg-[#0f0f0f] border border-white/5 p-6 md:p-8 hover:border-primary/30 transition-colors">
                <span className="text-primary font-bold tracking-wider text-sm mb-2 block">{item.year}</span>
                <h3 className="text-2xl font-display text-white mb-1 tracking-wide">{item.role}</h3>
                <h4 className="text-lg text-gray-400 mb-4">{item.company}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}

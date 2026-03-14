import { PageHero } from "@/components/ui/PageHero";
import aboutImg from "@assets/old-craftsman-trainee-working_1773518895806.jpg";

export default function About() {
  return (
    <div className="min-h-screen pb-24">
      <PageHero 
        title="Our Story" 
        subtitle="Bridging global fashion brands with Egypt's heritage of textile excellence since 2021."
        imageSrc={aboutImg}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="prose prose-invert prose-lg mx-auto">
          <p className="lead text-xl text-primary font-display italic mb-10 text-center">
            "Eye of Ra was founded on a simple premise: international apparel brands need a reliable, strategic partner on the ground in Egypt to truly unlock the country's manufacturing potential."
          </p>

          <h2 className="text-3xl font-display mt-16 mb-6">The Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            Founded in 2021 by Eissa Mohamed, an industry veteran with over 25 years of experience spanning global giants like PVH (Calvin Klein, Tommy Hilfiger) and Macy's, Eye of Ra serves as your dedicated sourcing and consulting agency. We don't just connect you to factories; we immerse ourselves in your brand's DNA to ensure that every stitch, every fabric choice, and every production run meets international standards.
          </p>

          <h2 className="text-3xl font-display mt-16 mb-6">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To provide end-to-end garment production support, technical consulting, and material sourcing that empowers global brands to manufacture with confidence. We demystify the supply chain, enforce stringent quality control, and open doors to duty-free export programs, transforming Egypt from a sourcing destination into your competitive advantage.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/10">
            <div>
              <h3 className="text-xl font-display text-white mb-4">Integrity</h3>
              <p className="text-sm text-muted-foreground">Complete transparency in costing, factory capabilities, and production timelines.</p>
            </div>
            <div>
              <h3 className="text-xl font-display text-white mb-4">Precision</h3>
              <p className="text-sm text-muted-foreground">Meticulous attention to tech packs, measurements, and quality assurance processes.</p>
            </div>
            <div>
              <h3 className="text-xl font-display text-white mb-4">Excellence</h3>
              <p className="text-sm text-muted-foreground">Uncompromising standards in raw material selection and final garment finishing.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

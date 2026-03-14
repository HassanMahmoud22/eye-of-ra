import { PageHero } from "@/components/ui/PageHero";
import consultingImg from "@assets/man-woman-looking-tablet-that-is-display_1773518895806.jpg";
import designImg from "@assets/female-fashion-designer-looking-drawings-sketches-that-are-pin_1773518895807.jpg";

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
            <h2 className="text-3xl font-display text-white mb-6">Technical Design & Construction</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A great garment begins with a flawless blueprint. Our technical design team translates your creative vision into comprehensive tech packs that factories understand implicitly.
            </p>
            <ul className="space-y-3">
              <li className="text-gray-300 border-b border-white/5 pb-3">Detailed measurement charts and grading</li>
              <li className="text-gray-300 border-b border-white/5 pb-3">Construction callouts and stitch specifications</li>
              <li className="text-gray-300 border-b border-white/5 pb-3">Fit sample reviews and pattern corrections</li>
            </ul>
          </div>
          <div>
            <img src={designImg} alt="Technical Design" className="w-full h-[400px] object-cover border border-white/10" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#0f0f0f] p-10 border border-white/5">
            <h3 className="text-2xl font-display text-primary mb-4">Production Monitoring (WIP)</h3>
            <p className="text-muted-foreground leading-relaxed">
              We act as your eyes and ears on the factory floor. Our Work-In-Progress tracking ensures that timelines are adhered to, bottlenecks are identified early, and errors are prevented before they compound. We conduct regular factory visits and provide transparent reporting.
            </p>
          </div>
          <div className="bg-[#0f0f0f] p-10 border border-white/5">
            <h3 className="text-2xl font-display text-primary mb-4">Costing Optimization</h3>
            <p className="text-muted-foreground leading-relaxed">
              Manufacturing should be profitable without compromising quality. We provide detailed Costing & Manufacturing (C&M) analysis, recommending alternative construction methods or trim substitutions that reduce costs while maintaining the garment's integrity.
            </p>
          </div>
        </div>

        <div className="bg-primary/5 p-10 md:p-16 border border-primary/20 rounded-sm text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-display text-white mb-6">Stringent Quality Assurance</h2>
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

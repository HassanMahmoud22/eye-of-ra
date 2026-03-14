import { PageHero } from "@/components/ui/PageHero";
import founderImg from "@assets/row-mens-suits-jackets-hanging-rack-display_1773518895806.jpg";

export default function Founder() {
  const timeline = [
    {
      year: "1999 - 2006",
      role: "Operations & QA",
      company: "Egyptian Clothing Company",
      desc: "Managed production floors and quality standards for major international labels including PVH (Calvin Klein, Tommy Hilfiger)."
    },
    {
      year: "2006 - 2015",
      role: "Production Director",
      company: "Swiss Garments",
      desc: "Oversaw massive production scales catering directly to premium retailers like Macy's, Banana Republic, and Hugo Boss."
    },
    {
      year: "2015 - 2019",
      role: "Brand Manager",
      company: "Calvin Klein (Egypt Operations)",
      desc: "Directed brand compliance, sourcing strategies, and factory auditing to ensure strict adherence to CK's global standards."
    },
    {
      year: "2019 - 2020",
      role: "Founder",
      company: "ATUM Sportswear",
      desc: "Launched a local private label, gaining deep empathy for the brand-side challenges of launching, sourcing, and scaling."
    },
    {
      year: "2021 - Present",
      role: "Founder & Managing Director",
      company: "Eye of Ra",
      desc: "Established the agency to bridge the gap between global brands and Egyptian manufacturing excellence."
    }
  ];

  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero 
        title="Meet the Founder" 
        subtitle="Decades of global brand experience applied to your production."
        imageSrc={founderImg}
      />

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-display text-white mb-6">Eissa Mohamed</h2>
          <p className="text-xl text-primary font-light max-w-3xl mx-auto">
            "I've sat on both sides of the table—as a factory director ensuring output, and as a brand founder worrying about margins. Eye of Ra is the partner I wish I had."
          </p>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-8 space-y-16 py-8">
          {timeline.map((item, i) => (
            <div key={i} className="relative pl-8 md:pl-16">
              <div className="absolute -left-2 top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-[#0a0a0a]" />
              
              <div className="bg-[#0f0f0f] border border-white/5 p-6 md:p-8 hover:border-primary/30 transition-colors">
                <span className="text-primary font-bold tracking-wider text-sm mb-2 block">{item.year}</span>
                <h3 className="text-2xl font-display text-white mb-1">{item.role}</h3>
                <h4 className="text-lg text-gray-400 mb-4">{item.company}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </section>
    </div>
  );
}

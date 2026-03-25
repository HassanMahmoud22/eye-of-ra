import { PageHero } from "@/components/ui/PageHero";
import factoryImg from "@assets/garment-production-process-armir-textile-factory-modern-indust_1773518895807.jpg";
import portImg from "@assets/industrial-port-container-yard_1773518895806.jpg";

export default function EgyptAdvantage() {
  return (
    <div className="min-h-screen pb-24 bg-background">
      <PageHero 
        title="The Egypt Advantage" 
        subtitle="Strategic location. Duty-free access. Vertical integration."
        imageSrc={factoryImg}
      />

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="prose prose-invert prose-lg max-w-4xl mx-auto mb-20 text-center">
          <p className="lead text-xl text-muted-foreground">
            Egypt has long been recognized as a global textile center, known for its high-quality cotton and garment manufacturing heritage. Its strategic geographic location at the crossroads of Africa, Europe, and Asia enables faster shipping times and more efficient logistics for international brands, making Egypt an attractive sourcing destination for companies seeking both quality manufacturing and reliable market access.
          </p>
        </div>

        <div className="bg-[#0f0f0f] border border-white/10 p-10 md:p-12 text-center mb-24">
          <p className="text-primary text-lg font-display tracking-wide mb-4">Fully Integrated Textile Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-300">
            {["Fabrics", "Trims", "Accessories", "Garment Manufacturing", "Packaging"].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground mt-6">This vertical integration significantly reduces production lead times.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="bg-[#0f0f0f] p-10 border border-white/10 h-full">
            <h2 className="text-3xl font-display text-primary mb-6">Duty-Free Export Programs</h2>
            <p className="text-muted-foreground mb-6">
              Maximize your margins by avoiding steep import tariffs. Egypt has signed several strategic trade agreements that allow for duty-free or preferential access to major global markets:
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-4"><span className="text-primary font-bold w-20">QIZ</span> <span className="text-gray-300">Duty-free entry to the USA for specific qualifying garments.</span></li>
              <li className="flex gap-4"><span className="text-primary font-bold w-20">EURO1</span> <span className="text-gray-300">Preferential trade access to European Union countries.</span></li>
              <li className="flex gap-4"><span className="text-primary font-bold w-20">EUROMED</span> <span className="text-gray-300">Pan-Euro-Mediterranean cumulation system.</span></li>
              <li className="flex gap-4"><span className="text-primary font-bold w-20">Agadir</span> <span className="text-gray-300">Free trade among Egypt, Jordan, Morocco, and Tunisia.</span></li>
              <li className="flex gap-4"><span className="text-primary font-bold w-20">COMESA</span> <span className="text-gray-300">Access to Eastern and Southern African markets.</span></li>
            </ul>
          </div>
          <div className="h-full">
            <img src={portImg} alt="Logistics and Export" className="w-full h-full min-h-[400px] object-cover border border-white/10" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="border border-white/5 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-9xl font-display text-primary">V</span>
            </div>
            <h3 className="text-2xl font-display text-white mb-4 relative z-10">Vertical Integration</h3>
            <p className="text-muted-foreground relative z-10">
              Unlike regions that rely heavily on imported materials, Egypt offers full vertical integration. From cultivating the raw cotton to spinning, weaving, dyeing, cutting, sewing, and packaging—the entire supply chain exists within the country, reducing lead times and logistics costs.
            </p>
          </div>
          
          <div className="border border-white/5 p-8 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <span className="text-9xl font-display text-primary">S</span>
            </div>
            <h3 className="text-2xl font-display text-white mb-4 relative z-10">Strategic Location</h3>
            <p className="text-muted-foreground relative z-10">
              Situated at the crossroads of Africa, Asia, and Europe, Egypt offers unparalleled shipping advantages. Short transit times to Europe (often 4-7 days) and rapid ocean freight to the US East Coast allow brands to operate with greater agility and lower inventory risks.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

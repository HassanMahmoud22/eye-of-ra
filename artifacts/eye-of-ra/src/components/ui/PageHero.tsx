import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  overlayOpacity?: number;
}

export function PageHero({ title, subtitle, imageSrc, overlayOpacity = 0.6 }: PageHeroProps) {
  return (
    <section className="relative h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={imageSrc} 
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        <div 
          className="absolute inset-0 bg-[#0a0a0a]"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-display text-white mb-6"
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-lg md:text-xl text-primary font-light max-w-2xl mx-auto tracking-wide"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage(); // Get the translation function from the context

  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative mb-8 lg:mb-0"
          >
            <img 
              src="attached_assets/aboutus.webp" 
              alt="About Ratana"
              className="rounded-lg shadow-2xl w-full h-[500px] object-cover"
            />
          </motion.div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              {t('about.title')}
            </h2>
            <div className="space-y-6 text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: t('about.content') }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
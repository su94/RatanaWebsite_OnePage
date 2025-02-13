
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

const OurStory = () => {
  const { t } = useLanguage();

  return (
    <section id="our-story" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-50" />
          <div className="relative">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative w-full max-w-2xl"
              >
                <div className="relative block w-full rounded-lg overflow-hidden">
                  <img
                    src="attached_assets/ourstoryimage.webp"
                    alt="Our Story"
                    className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                  />
                </div>
              </motion.div>

              <div className="mt-8 text-center max-w-2xl">
                <h3 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
                  {t('ourStory.title')}
                </h3>
                <div className="mt-3 text-lg text-gray-500">
                  <p>{t('ourStory.content')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;

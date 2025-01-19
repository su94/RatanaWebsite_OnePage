
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const customers = [
  { id: 1, name: "BenchMark", logo: "attached_assets/benchmark.webp" },
  { id: 2, name: "GIZ", logo: "attached_assets/giz.webp" },
  { id: 3, name: "Iseet", logo: "attached_assets/iseet.webp" },
  { id: 4, name: "Ithad Bank", logo: "attached_assets/ithadbank.webp" },
  { id: 5, name: "Sada Bodcast", logo: "attached_assets/sada.webp" },
  { id: 6, name: "Sage Films", logo: "attached_assets/sagefilms.webp" },
  { id: 7, name: "Wish Box", logo: "attached_assets/wishbox.webp" },
  { id: 8, name: "Musajjel", logo: "attached_assets/musajjel.webp" },
  { id: 9, name: "Columbia Global Center Amman", logo: "attached_assets/columbiaglobal.webp" },
  { id: 10, name: "Service and Public Administration Commission", logo: "attached_assets/spac.webp" },
  { id: 11, name: "IUCN", logo: "attached_assets/iucn.webp" },
];

const Customers = () => {
  const controls = useAnimation();
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(customers.length / 4);

  useEffect(() => {
    const startAnimation = async () => {
      if (isPlaying) {
        await controls.start({
          x: [0, -264 * (customers.length - 4)],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 20,
              ease: "linear",
            },
          },
        });
      }
    };

    startAnimation();
  }, [controls, isPlaying]);

  const handleDotClick = (index: number) => {
    setIsPlaying(false);
    setCurrentIndex(index);
    controls.start({
      x: -264 * index * 4,
      transition: { duration: 0.5 }
    });
  };

  return (
    <section id="customers" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('customers.title')}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('customers.subtitle')}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-center gap-2 mb-6">
            {Array.from({ length: totalSlides }, (_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === i ? 'bg-gray-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-8">
            <motion.div 
              className="flex gap-8" 
              animate={controls}
              drag="x"
              dragConstraints={{ right: 0, left: -100 * (customers.length - 4) }}
            >
              {customers.map((customer) => (
                <div key={customer.id} className="flex-none w-64">
                  <div className="bg-white rounded-lg shadow-sm p-6 h-32 flex items-center justify-center">
                    <img
                      src={customer.logo}
                      alt={customer.name}
                      className="max-h-16 max-w-full opacity-60 hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;

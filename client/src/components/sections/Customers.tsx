import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext"; // Import useLanguage for translation

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
  const { t } = useLanguage(); // Use the translation function

  useEffect(() => {
    const startAnimation = async () => {
      await controls.start({
        x: [0, -100 * (customers.length - 4)],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 20,
            ease: "linear",
          },
        },
      });
    };

    startAnimation();
  }, [controls]);

  return (
    <section id="customers" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('customers.title')} {/* Translated title */}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t('customers.subtitle')} {/* Translated subtitle */}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex gap-8">
            <motion.div className="flex gap-8" animate={controls}>
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
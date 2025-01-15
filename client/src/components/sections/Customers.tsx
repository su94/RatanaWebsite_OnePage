import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext"; // Import useLanguage for translation

const customers = [
  { id: 1, name: "Customer 1", logo: "/logos/customer1.svg" },
  { id: 2, name: "Customer 2", logo: "/logos/customer2.svg" },
  { id: 3, name: "Customer 3", logo: "/logos/customer3.svg" },
  { id: 4, name: "Customer 4", logo: "/logos/customer4.svg" },
  { id: 5, name: "Customer 5", logo: "/logos/customer5.svg" },
  { id: 6, name: "Customer 6", logo: "/logos/customer6.svg" },
  { id: 7, name: "Customer 7", logo: "/logos/customer7.svg" },
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
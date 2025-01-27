import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const getCustomers = (language: string) => [
  { id: 1, name: language === 'ar' ? "بنشمارك" : "BenchMark", logo: "attached_assets/benchmark.webp" },
  { id: 2, name: "GIZ", logo: "attached_assets/giz.webp" },
  { id: 3, name: language === 'ar' ? "المعهد العالي للدراسات التكنولوجية" : "Iseet", logo: "attached_assets/iseet.webp" },
  { id: 4, name: language === 'ar' ? "بنك الاتحاد" : "Ithad Bank", logo: "attached_assets/ithadbank.webp" },
  { id: 5, name: language === 'ar' ? "صدى بودكاست" : "Sada Bodcast", logo: "attached_assets/sada.webp" },
  { id: 6, name: language === 'ar' ? "سيج للأفلام" : "Sage Films", logo: "attached_assets/sagefilms.webp" },
  { id: 7, name: language === 'ar' ? "ويش بوكس" : "Wish Box", logo: "attached_assets/wishbox.webp" },
  { id: 8, name: language === 'ar' ? "مسجل" : "Musajjel", logo: "attached_assets/Musajjel.jpg" },
  { id: 9, name: language === 'ar' ? "مركز كولومبيا العالمي عمان" : "Columbia Global Center Amman", logo: "attached_assets/ammancolumbiaglobal.jpg" },
  { id: 10, name: language === 'ar' ? "لجنة الخدمة والادارة العامة" : "Service and Public Administration Commission", logo: "attached_assets/service and public administration commission.png" },
  { id: 11, name: language === 'ar' ? "الاتحاد الدولي لحفظ الطبيعة" : "IUCN", logo: "attached_assets/iucn-international-union-for-conservation-of-nature.webp" },
];

const Customers = () => {
  const { t, language } = useLanguage();
  const customers = getCustomers(language);
  const controls = useAnimation();
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
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          },
        });
      }
    };

    startAnimation();
  }, [controls, isPlaying, customers.length]);

  return (
    <section id="customers" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("customers.title")}
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            {t("customers.subtitle")}
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="overflow-x-auto thin-scrollbar">
            <motion.div
              className="flex gap-8 min-w-max"
              animate={controls}
              drag="x"
              dragConstraints={{
                right: 0,
                left: -264 * (customers.length - 4),
              }}
              onDragStart={() => setIsPlaying(false)}
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
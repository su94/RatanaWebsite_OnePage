
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const services = {
  en: [
    {
      title: 'Press Releases and Media Kits',
    },
    {
      title: 'Media Outreach and Relationship Building',
    },
    {
      title: 'Monitoring and Reporting',
    },
    {
      title: 'Media Production',
    },
    {
      title: 'Event Management and Press Conferences',
    },
    {
      title: 'Media Training and Preparation',
    },
    {
      title: 'Consultation Services',
    }
  ],
  ar: [
    {
      title: 'البيانات الصحفية والحقائب الإعلامية',
    },
    {
      title: 'التواصل الإعلامي وبناء العلاقات',
    },
    {
      title: 'المراقبة وإعداد التقارير',
    },
    {
      title: 'الإنتاج الإعلامي',
    },
    {
      title: 'إدارة الفعاليات والمؤتمرات الصحفية',
    },
    {
      title: 'التدريب الإعلامي والتحضير',
    },
    {
      title: 'الخدمات الاستشارية',
    }
  ]
};

const Services = () => {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('services.title')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services[language].map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <h3 className={`text-xl font-bold text-gray-900 leading-tight ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {service.title}
                </h3>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

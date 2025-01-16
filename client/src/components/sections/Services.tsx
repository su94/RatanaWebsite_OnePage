import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    key: 'services.strategicPlanning',
    description: 'services.strategicPlanning.description',
  },
  {
    key: 'services.contentCreation',
    description: 'services.contentCreation.description',
  },
  {
    key: 'services.crisisCommunication',
    description: 'services.crisisCommunication.description',
  },
  {
    key: 'services.marketing',
    description: 'services.marketing.description',
  },
  {
    key: 'services.consultation',
    description: 'services.consultation.description',
  },
  {
    key: 'services.mediaTraining',
    description: 'services.mediaTraining.description',
  },
  {
    key: 'services.eventManagement',
    description: 'services.eventManagement.description',
  },
  {
    key: 'services.mediaProduction',
    description: 'services.mediaProduction.description',
  },
  {
    key: 'services.monitoring',
    description: 'services.monitoring.description',
  },
  {
    key: 'services.pressReleases',
    description: 'services.pressReleases.description',
  },
  {
    key: 'services.mediaOutreach',
    description: 'services.mediaOutreach.description',
  },
];

const Services = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('services.title')}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <Card key={service.key} className="hover:shadow-lg transition-shadow h-full">
              <CardHeader>
                <h3 className="text-xl font-bold leading-tight mb-4">{t(service.key)}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500 text-sm font-light leading-relaxed">{t(service.description)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('contact.title')}</h2>
          <p className="mt-4 text-lg text-gray-600">{t('contact.subtitle')}</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{t('contact.address')}</p>
                  <p className="text-gray-600">Amman, Amman Governorate,</p>
                  <p className="text-gray-600">Hashemite Kingdom of Jordan</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{t('contact.emailAddress')}</p>
                  <p className="text-gray-600">info@ratanaconsulting.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-gray-900 font-medium">{t('contact.businessHours')}</p>
                  <p className="text-gray-600">Sat-Thu - 08:00-19:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
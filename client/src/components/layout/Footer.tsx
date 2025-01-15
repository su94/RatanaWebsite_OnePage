import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext"; // Import the hook for translations

const Footer = () => {
  const { t } = useLanguage(); // Get the translation function

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">{t('footer.title')}</h2> {/* Translated title */}
            <p className="text-gray-400 max-w-md">
              {t('footer.description')} {/* Translated description */}
            </p>
            <div className="flex space-x-4 mt-6">
  <a href="#" className="hover:text-white transition-colors mr-2">
    <FaFacebook className="h-6 w-6" />
  </a>
  <a href="#" className="hover:text-white transition-colors mr-2">
    <FaTwitter className="h-6 w-6" />
  </a>
  <a href="#" className="hover:text-white transition-colors mr-2">
    <FaLinkedin className="h-6 w-6" />
  </a>
  <a href="#" className="hover:text-white transition-colors mr-2">
    <FaInstagram className="h-6 w-6" />
  </a>
</div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.quickLinks')}</h3> {/* Translated section */}
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-white transition-colors">{t('footer.linkHome')}</a> {/* Translated link */}
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">{t('footer.linkServices')}</a> {/* Translated link */}
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">{t('footer.linkAbout')}</a> {/* Translated link */}
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">{t('footer.linkTeam')}</a> {/* Translated link */}
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">{t('footer.linkContact')}</a> {/* Translated link */}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">{t('footer.contactUs')}</h3> {/* Translated contact section */}
            <ul className="space-y-2">
              <li>{t('footer.address')}</li> {/* Translated address */}
              <li>{t('footer.location')}</li> {/* Translated location */}
              <li>{t('footer.phone')}</li> {/* Translated phone */}
              <li>{t('footer.email')}</li> {/* Translated email */}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>{t('footer.copyright')} {new Date().getFullYear()} {t('footer.rightsReserved')}</p> {/* Translated copyright */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
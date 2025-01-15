import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            {t('hero.subtitle')}
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-white border-white hover:bg-white hover:text-black"
          >
            {t('hero.contact')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useState } from "react";
import { Link } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { SiLinkedin, SiInstagram, SiFacebook } from "react-icons/si";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { label: t('nav.ourStory'), href: "#our-story" },
    { label: t('nav.about'), href: "#about" },
    { label: t('nav.services'), href: "#services" },
    { label: t('nav.customers'), href: "#customers" },
    { label: t('nav.contact'), href: "#contact" },
  ];

  const socialLinks = [
    { icon: SiLinkedin, href: "http://www.linkedin.com/in/ratana-consulting-3691a3260" },
    { icon: SiInstagram, href: "https://www.instagram.com/ratanaconsulting/" },
    { icon: SiFacebook, href: "https://www.facebook.com/people/Ratana-Consulting/100088684045921/" },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <img 
                src="/attached_assets/ratanalogo.png" 
                alt="Ratana" 
                className="h-12 w-40"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center">
            <div className="flex items-center space-x-6 md:space-x-8 ml-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors whitespace-nowrap"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="mx-6">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                {language === 'en' ? 'العربية' : 'English'}
              </Button>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        } overflow-hidden bg-white border-t`}
      >
        <div className="px-4 pt-2 pb-3 space-y-1">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}

          {/* Mobile Language Switcher */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setLanguage(language === 'en' ? 'ar' : 'en');
              setIsOpen(false);
            }}
            className="w-full justify-start px-3 py-2 text-left hover:bg-gray-50"
          >
            <Globe className="h-4 w-4 mr-2" />
            {language === 'en' ? 'العربية' : 'English'}
          </Button>

          {/* Mobile Social Links */}
          <div className="flex items-center space-x-4 px-3 py-2">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
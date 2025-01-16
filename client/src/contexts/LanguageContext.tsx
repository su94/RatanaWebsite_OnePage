import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

type TranslationKey = 
  | 'nav.ourStory'
  | 'nav.about'
  | 'nav.services'
  | 'nav.customers'
  | 'nav.contact'
  | 'hero.title'
  | 'hero.subtitle'
  | 'hero.contact'
  | 'services.title'
  | 'about.title'
  | 'ourStory.title'
  | 'ourStory.content'
  | 'about.content'
  | 'customers.title'
  | 'customers.subtitle';

interface Translations {
  [key: string]: {
    [K in TranslationKey]: string;
  };
}

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey) => string;
}

const translations: Translations = {
  en: {
    'nav.ourStory': 'Our Story',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.customers': 'Customers',
    'nav.contact': 'Contact',
    'hero.title': 'Content Creation & Media Services',
    'hero.subtitle': 'Content Is The Elitist Product You Can Sell',
    'hero.contact': 'Contact Us',
    'services.title': 'SERVICES',
    'services.strategicPlanning': "Developing and implementing strategic media plans that are aligned with your business objectives. We provide expert advice on media engagement strategies to optimize coverage and visibility, ensuring your brand gets the attention it deserves.",
    'services.contentCreation': "Crafting compelling narratives for web, print, and digital platforms. We produce high-quality videos from concept to final cut, design visually striking graphics for various media, and capture images that tell a story. Additionally, we create engaging animations tailored for diverse audiences.",
    'services.crisisCommunication': "Developing and implementing crisis communication strategies to manage and mitigate negative publicity. We provide real-time support and messaging during crises to protect and restore your brand's reputation.",
    'services.marketing': "Implementing effective digital strategies, such as SEO, PPC, and social media management. We also create impactful print, outdoor, and broadcast advertisements to enhance your brand's visibility and reach.",
    'services.consultation': "Producing tailored media strategies to meet client objectives and advising on brand positioning and identity. We also conduct comprehensive market analysis to inform content strategies, ensuring your brand stands out in the market.",
    'services.mediaTraining': "Conducting media training sessions to prepare your spokespeople for interviews and public appearances. We provide detailed briefings and practice sessions to ensure clear, confident, and effective communication.",
    'services.eventManagement': "Planning and executing media events, such as press conferences, product launches, and corporate announcements. We coordinate all logistics and manage media attendance to ensure successful and well-covered events.",
    'services.mediaProduction': "End-to-end film production, including pre-production, filming, and post-production. We produce captivating television and radio content, as well as develop content for online platforms and digital campaigns.",
    'services.monitoring': "Continuously monitoring media coverage and public sentiment related to your organization. We provide detailed reports and analysis to track the effectiveness of media strategies and identify opportunities for improvement.",
    'services.pressReleases': "Crafting and distributing press releases to announce news and events. We also create comprehensive media kits to provide journalists with all the information they need.",
    'services.mediaOutreach': "Developing and maintaining relationships with key media contacts to secure positive coverage and build brand awareness. We proactively pitch stories and build strong relationships with journalists and influencers.",
    'about.title': 'About Ratana',
    'ourStory.title': 'Our Story',
    'ourStory.content': '"Ratana" is an ancient Jordanian Arabic name that was used by the Nabateansand it is originally "Ratana Al-Nabata". The Nabateans, with time, developed their own dialect that distinguished them from others.',
    'about.content': `
      <p>
        Welcome to Ratana, a leading Jordanian company specializing in content preparation,
        media, risk management, and crisis management services. Our team consists of former
        media professionals, politicians, and content creators with extensive experience in
        civil society organizations, official institutions, and the private sector.
      </p>
      <p>
        At Ratana, we understand the crucial role that content plays in helping organizations
        and institutions effectively communicate their message and achieve their goals. We also
        believe in the power of content to bring target groups closer to institutions and companies.
      </p>
      <p>
        Our team closely monitors potential crises that may arise from incorrect or ill-considered
        content, whether in face-to-face interactions, media, community media, or digital channels.
        That's why the content we create is subject to rigorous linguistic, creative, legal, and
        political scrutiny, and is always sensitive to the concepts of social inclusion and human rights.
      </p>
    `,
    'customers.title': 'Our Customers',
    'customers.subtitle': 'Trusted by',
    'contact.title': 'Contact Us',  
    'contact.subtitle': 'Get in touch with our team', 
    'contact.name': 'Name', 
    'contact.email': 'Email', 
    'contact.subject': 'Subject', 
    'contact.message': 'Message', 
    'contact.send': 'Send Message', 
    'contact.info': 'Contact Information', 
    'contact.address': 'Office Address', 
    'contact.phone': 'Phone Number', 
    'contact.emailAddress': 'Email Address', 
    'contact.businessHours': 'Business Hours', 
    'contact.workingDays': 'Monday - Friday: 9:00 AM - 6:00 PM', 
    'contact.weekends': 'Saturday - Sunday: Closed',
    'footer.title': 'Ratana Consulting',
    'footer.description': 'Professional consulting services helping businesses achieve their full potential through strategic planning and operational excellence.',
    'footer.quickLinks': 'Quick Links',
    'footer.linkHome': 'Home',
    'footer.linkServices': 'Services',
    'footer.linkAbout': 'About',
    'footer.linkTeam': 'Team',
    'footer.linkContact': 'Contact',
    'footer.contactUs': 'Contact Us',
    'footer.address': '123 Business Street',
    'footer.location': 'New York, NY 10001',
    'footer.phone': '+1 (555) 123-4567',
    'footer.email': 'contact@ratanaconsulting.com',
    'footer.copyright': 'Ratana\nCopyright © 2025 All rights reserved',
  },
  ar: {
    'nav.ourStory': 'قصتنا',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.customers': 'عملاؤنا',
    'nav.contact': 'اتصل بنا',
    'hero.title': 'خدمات إنتاج المحتوى والإعلام',
    'hero.subtitle': 'المحتوى هو المنتج النخبوي الذي يمكنك بيعه',
    'hero.contact': 'اتصل بنا',
    'services.title': 'خدماتنا',
    'services.strategicPlanning': "تطوير وتنفيذ خطط إعلامية استراتيجية تتماشى مع أهداف عملك. نحن نقدم النصيحة المتخصصة حول استراتيجيات التعامل مع وسائل الإعلام لتعزيز التغطية والظهور، مما يضمن أن يحصل علامتك التجارية على الانتباه الذي تستحقه.",
    'services.contentCreation': "ابتكار روايات جذابة للويب والطباعة والوسائط الرقمية. نحن ننتج مقاطع فيديو عالية الجودة من الفكرة إلى القطع النهائي، نصمم رسومات بصرية مثيرة للوسائط المختلفة، ونلتقط صورًا تحكي قصة. بالإضافة إلى ذلك، نخلق رسوم متحركة جذابة مصممة لجمهور متنوع.",
    'services.crisisCommunication': "تطوير وتنفيذ استراتيجيات اتصال الأزمة لإدارة وتخفيف الانتقادات السلبية. نحن نقدم الدعم الفوري والرسائل خلال الأزمات لحماية واستعادة سمعة علامتك التجارية.",
    'services.marketing': "تنفيذ استراتيجيات رقمية فعالة، مثل SEO وPPC وإدارة وسائل التواصل الاجتماعي. نحن أيضًا نقوم بإنشاء إعلانات مطبوعة ومؤثرة في الهواء الطلق والبث لتعزيز رؤية وعائد علامتك التجارية.",
    'services.consultation': "إنتاج استراتيجيات إعلامية مصممة لتلبية أهداف العميل وتقديم المشورة حول تموقع العلامة التجارية والهوية. نحن أيضًا نقوم بإجراء تحليل شامل للسوق لإبلاغ استراتيجيات المحتوى، مما يضمن أن تتألق علامتك التجارية في السوق.",
    'services.mediaTraining': "إجراء جلسات تدريب إعلامي لإعداد المتحدثين أمام وسائل الإعلام لمقابلاتهم وظهورهم العلني. نحن نقدم إحاطات مفصلة وجلسات تمرينية لضمان الاتصال الواضح والواثق والفعال.",
    'services.eventManagement': "تخطيط وتنفيذ الأحداث الإعلامية، مثل المؤتمرات الصحفية وإطلاق المنتجات والإعلانات الشركاتية. نحن ننسق جميع اللوجستيات ونُدير حضور وسائل الإعلام لضمان نجاح الأحداث والتغطية الجيدة.",
    'services.mediaProduction': "إنتاج أفلام شامل، بما في ذلك ما قبل الإنتاج والتصوير وما بعد الإنتاج. نحن ننتج محتوى تلفزيوني وإذاعي مثير، بالإضافة إلى تطوير محتوى للمنصات عبر الإنترنت والحملات الرقمية.",
    'services.monitoring': "مراقبة التغطية الإعلامية والمشاعر العامة المتعلقة بمنظمتك بشكل مستمر. نحن نقدم تقارير وتحليلات مفصلة لمتابعة فعالية الاستراتيجيات الإعلامية وتحديد الفرص للتحسين.",
    'services.pressReleases': "صياغة وتوزيع البيانات الصحفية لإعلان الأخبار والأحداث. نحن أيضًا نبدأ في إنشاء حزم إعلامية شاملة لتزويد الصحفيين بجميع المعلومات التي يحتاجونها.",
    'services.mediaOutreach': "تطوير وصيانة العلاقات مع جهات الاتصال الإعلامية الرئيسية لضمان التغطية الإيجابية وبناء الوعي بالعلامة التجارية. نحن نقدم قصصًا بالاقتراح وبناء علاقات قوية مع الصحفيين والمؤثرين.",
    'about.title': 'عن رتانا',
    'ourStory.title': 'قصتنا',
    'ourStory.content': '"رتانا" هو اسم أردني عربي قديم استخدمه الأنباط في الأردن القديم وهو في الأصل "رتانة النبطة"، ومع الوقت طور الأنباط لهجتهم الخاصة التي ميزتهم عن غيرهم. نحن نفخر بهذا الاسم الذي يعكس تراثنا وهويتنا الأردنية العريقة',
    'about.content': 'مرحباً بكم في رتانا، الشركة الأردنية الرائدة في مجال إنتاج المحتوى والخدمات الإعلامية. نحن نؤمن بقوة المحتوى في التواصل الفعال وتحقيق الأهداف. فريقنا المتخصص يعمل بشغف لتقديم محتوى إبداعي يراعي المعايير اللغوية والقانونية والاجتماعية',
    'about.title': 'عن رتانا',
    'ourStory.title': 'قصتنا',
    'ourStory.content': '"رتانا" هو اسم أردني عربي قديم استخدمه الأنباط في الأردن القديم. نحن نفخر بهذا الاسم الذي يعكس تراثنا وهويتنا الأردنية العريقة',
    'about.content': 
    `<p> مرحباً بكم في رتانا، الشركة الأردنية الرائدة في مجال إنتاج المحتوى والخدمات الإعلامية. 
                      نحن نفخر بفريقنا المكون من محترفي الإعلام السابقين، والسياسيين، وصناع المحتوى الذين 
                      يتمتعون بخبرة واسعة في المنظمات الأهلية، والمؤسسات الرسمية، والقطاع الخاص. </p>
                      <p> في رتانا، نفهم الدور الحيوي الذي تلعبه المحتويات في مساعدة المنظمات والمؤسسات على 
                      التواصل بفعالية وتحقيق أهدافهم. نحن نؤمن أيضاً بقوة المحتوى في تقريب الجماهير المستهدفة 
                      من المؤسسات والشركات. </p>
                      <p> يراقب فريقنا عن كثب الأزمات المحتملة التي قد تنشأ عن محتوى خاطئ أو غير مدروس بشكل جيد، 
                      سواء كانت في التفاعلات المباشرة، أو وسائل الإعلام، أو وسائل الإعلام المجتمعية، أو القنوات 
                      الرقمية. لهذا السبب، فإن المحتوى الذي ننتجه يخضع لتدقيق لغوي وإبداعي وقانوني وسياسي صارم، 
                      ويكون دائماً حساساً لمفاهيم الإدماج الاجتماعي وحقوق الإنسان.`,
    'customers.title': 'عملاؤنا',
    'customers.subtitle': 'نفخر بثقة كبرى المؤسسات والشركات',
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'تواصل مع فريق خبرائنا',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.info': 'معلومات الاتصال',
    'contact.address': 'عنوان المكتب',
    'contact.phone': 'رقم الهاتف',
    'contact.emailAddress': 'البريد الإلكتروني',
    'contact.businessHours': 'ساعات العمل',
    'contact.workingDays': 'الإثنين - الجمعة: 9:00 صباحاً - 6:00 مساءً',
    'contact.weekends': 'السبت - الأحد: مغلق',
    'footer.title': 'رتانا للاستشارات',
    'footer.description': 'خدمات استشارية محترفة تساعد الشركات على تحقيق إمكاناتها الكاملة من خلال التخطيط الاستراتيجي والتميز التشغيلي.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.linkHome': 'الرئيسية',
    'footer.linkServices': 'الخدمات',
    'footer.linkAbout': 'حول',
    'footer.linkTeam': 'الفريق',
    'footer.linkContact': 'اتصل',
    'footer.contactUs': 'اتصل بنا',
    'footer.address': '123 شارع الأعمال',
    'footer.location': 'نيويورك، NY 10001',
    'footer.phone': '+1 (555) 123-4567',
    'footer.email': 'contact@ratanaconsulting.com',
    'footer.copyright': 'رتانا\nحقوق النشر © 2025 جميع الحقوق محفوظة',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
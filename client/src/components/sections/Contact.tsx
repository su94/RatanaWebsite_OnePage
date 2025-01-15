import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLanguage } from "@/contexts/LanguageContext"; // Import useLanguage to access translation function

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof formSchema>;

const Contact = () => {
  const { toast } = useToast();
  const { t } = useLanguage(); // Use translation function

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log(data);
    toast({
      title: t('contact.send'), // Translate the 'send' message
      description: t('contact.info'), // Translate the information message
    });
    form.reset();
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">{t('contact.title')}</h2> {/* Translated title */}
          <p className="mt-4 text-lg text-gray-600">{t('contact.subtitle')}</p> {/* Translated subtitle */}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.name')}</FormLabel> {/* Translated label */}
                      <FormControl>
                        <Input placeholder={t('contact.name')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.email')}</FormLabel> {/* Translated label */}
                      <FormControl>
                        <Input type="email" placeholder={t('contact.email')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.subject')}</FormLabel> {/* Translated label */}
                      <FormControl>
                        <Input placeholder={t('contact.subject')} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('contact.message')}</FormLabel> {/* Translated label */}
                      <FormControl>
                        <Textarea
                          placeholder={t('contact.message')}
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  {t('contact.send')} {/* Translated button text */}
                </Button>
              </form>
            </Form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">{t('contact.info')}</h3> {/* Translated contact information heading */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">{t('contact.address')}</p> {/* Translated address label */}
                    <p className="text-gray-600">123 Business Street</p>
                    <p className="text-gray-600">New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">{t('contact.phone')}</p> {/* Translated phone label */}
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">{t('contact.emailAddress')}</p> {/* Translated email label */}
                    <p className="text-gray-600">contact@ratanaconsulting.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{t('contact.businessHours')}</h3> {/* Translated business hours header */}
              <div className="space-y-2">
                <p className="text-gray-600">{t('contact.workingDays')}</p> {/* Translated working days */}
                <p className="text-gray-600">{t('contact.weekends')}</p> {/* Translated weekends */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
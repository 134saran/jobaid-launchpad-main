import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ServicesSection from '@/components/home/ServicesSection';
import WhyChooseUsSection from '@/components/home/WhyChooseUsSection';
import IndustriesSection from '@/components/home/IndustriesSection';
import ClientsSection from '@/components/home/ClientsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <IndustriesSection />
      <ClientsSection />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;

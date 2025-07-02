import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import CashFlow from '@/components/CashFlow';
import GoalsSection from '@/components/GoalsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      {/* <GoalsSection /> */}
      <CashFlow />
      <PricingSection />
      <Footer />
    </>
  );
}

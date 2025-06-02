import CallToAction from "@/components/call-to-action";
import ContentSection from "@/components/content-1";
import FAQsTwo from "@/components/faqs-2";
import Features from "@/components/features-1";
import FooterSection from "@/components/footer";
import HeroSection from "@/components/hero-section";
import Pricing from "@/components/pricing";



export default function Home() {
  return (
    <>
    <HeroSection/>
    <Features/>
    <ContentSection/>
    <CallToAction/>
    <Pricing/>
    <FAQsTwo/>
    <FooterSection/>
    </>
  );
}

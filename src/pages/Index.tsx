
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import DataLabeling from "@/components/DataLabeling";
import DataCuration from "@/components/DataCuration";
import GenerativeAI from "@/components/GenerativeAI";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <DataLabeling />
        <DataCuration />
        <GenerativeAI />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Partners />
      <Portfolio />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default Index;

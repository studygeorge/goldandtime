import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Maisons } from "@/components/Maisons";
import { Watches, Jewelry } from "@/components/Showcase";
import { HowItWorks } from "@/components/HowItWorks";
import { TradeIn } from "@/components/TradeIn";
import { About } from "@/components/About";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Maisons />
        <Watches />
        <Jewelry />
        <HowItWorks />
        <TradeIn />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

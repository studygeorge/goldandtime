import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Maisons } from "@/components/Maisons";
import { Showcase } from "@/components/Showcase";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Maisons />
        <Showcase />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

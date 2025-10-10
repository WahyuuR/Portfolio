import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <SkillsSection />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

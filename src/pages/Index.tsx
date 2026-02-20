import { motion, useScroll, useTransform } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  const { scrollY } = useScroll();
  const gridY = useTransform(scrollY, (v) => -v * 0.25);
  const gridX = useTransform(scrollY, (v) => v * 0.03);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background chatai (grid) – parallax */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.12]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          y: gridY,
          x: gridX,
        }}
        aria-hidden
      />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;

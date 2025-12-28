import Navbar from "@/components/layout/Navbar";
import LeftSidebar from "@/components/layout/LeftSidebar";
import RightSidebar from "@/components/layout/RightSidebar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Leadership from "@/components/sections/Leadership";
import Contact from "@/components/sections/Contact";
import ParticleNetwork from "@/components/ParticleNetwork";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <ParticleNetwork />
      <div className="relative z-10">
        <Navbar />
      <LeftSidebar />
      <RightSidebar />

      <main id="content" className="lg:px-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Leadership />
        <Contact />
      </main>

      <Footer />
      </div>
    </div>
  );
};

export default Index;

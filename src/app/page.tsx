import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import WhatIDo from "@/components/sections/WhatIDo";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Technologies from "@/components/sections/Technologies";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhatIDo />
      <Experience />
      <Skills />
      <FeaturedProjects />
      <Technologies />
      <Contact />
      <Footer />
    </>
  );
}

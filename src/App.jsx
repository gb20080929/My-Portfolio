import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedStack from "./components/FeaturedStack";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import IntroBlast from "./components/IntroBlast";
import PhotonCursor from "./components/PhotonCursor";
import HeroBackground from "./components/HeroBackground";

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

export default function App() {
  return (
    <>
      <IntroBlast />
      <PhotonCursor />
      <HeroBackground />
      <Navbar />
      <main className="relative z-10">
        <StarsBackground />
        <Hero />
        <FeaturedStack />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
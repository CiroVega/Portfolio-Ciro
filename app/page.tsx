import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import About from "@/src/components/About";
import Technologies from "@/src/components/Technologies";
import Projects from "@/src/components/Projects";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </main>
  );
}

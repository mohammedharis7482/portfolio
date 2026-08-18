import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import About from "@/components/sections/About";
import FeaturedCaseStudy from "@/components/sections/FeaturedCaseStudy";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <FeaturedCaseStudy />
      </main>
      <Footer />
    </>
  );
}

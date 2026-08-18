import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import SelectedWork from "@/components/sections/SelectedWork";
import About from "@/components/sections/About";
import FeaturedCaseStudy from "@/components/sections/FeaturedCaseStudy";
import MoreWork from "@/components/sections/MoreWork";
import Journey from "@/components/sections/Journey";
import HowWeWork from "@/components/sections/HowWeWork";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <About />
        <FeaturedCaseStudy />
        <MoreWork />
        <Journey />
        <HowWeWork />
      </main>
      <Footer />
    </>
  );
}

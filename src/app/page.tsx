
import Navebar from "../components/navebar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/Skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div>
      <Navebar/>
      <Hero/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

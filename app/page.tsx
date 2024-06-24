import Hero from "@/app/components/hero/Hero";
import Skills from "@/app/components/skills/Skills";
import Projects from "@/app/components/projects/Projects";
import Contact from "./components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;

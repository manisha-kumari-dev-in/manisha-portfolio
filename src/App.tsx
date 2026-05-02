import { useState } from "react";
import Loader from "./components/common/loader";
import { Navbar } from "./components/common/navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experience/Experience";
import Contact from "./sections/contact/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <Navbar />

      {!isLoading && (
        <main className="bg-black text-white">
          <Hero />

          <About />

          <Skills />

          <Projects />

          <Experience />

          <Contact />
        </main>
      )}
    </>
  );
}

export default App;

import { useState } from "react";
import Loader from "./components/common/loader";
import { Navbar } from "./components/common/navbar";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";

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

          <section
            id="projects"
            className="flex min-h-screen items-center justify-center"
          >
            Projects
          </section>

          <section
            id="experience"
            className="flex min-h-screen items-center justify-center"
          >
            Experience
          </section>

          <section
            id="contact"
            className="flex min-h-screen items-center justify-center"
          >
            Contact
          </section>
        </main>
      )}
    </>
  );
}

export default App;

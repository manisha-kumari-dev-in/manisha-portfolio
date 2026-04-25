import { useState } from "react";
import Loader from "./components/common/loader";
import { Navbar } from "./components/common/navbar";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <Navbar />

      <main className="bg-black text-white">
        <section id="hero" className="flex min-h-screen items-center justify-center">
          Hero
        </section>

        <section id="about" className="flex min-h-screen items-center justify-center">
          About
        </section>

        <section id="skills" className="flex min-h-screen items-center justify-center">
          Skills
        </section>

        <section id="projects" className="flex min-h-screen items-center justify-center">
          Projects
        </section>

        <section id="experience" className="flex min-h-screen items-center justify-center">
          Experience
        </section>

        <section id="contact" className="flex min-h-screen items-center justify-center">
          Contact
        </section>
      </main>
    </>
  );
}

export default App;
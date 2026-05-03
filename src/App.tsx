import { useEffect, useState } from "react";
import Loader from "./components/common/loader";
import { Navbar } from "./components/common/navbar";
import Footer from "./components/common/footer";
import Hero from "./sections/hero/Hero";
import About from "./sections/about/About";
import Skills from "./sections/skills/Skills";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experience/Experience";
import Contact from "./sections/contact/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    history.replaceState(null, "", window.location.pathname);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      <Navbar />

      {!isLoading && (
        <main className="min-h-screen flex flex-col bg-black text-white">
          <Hero />

          <About />

          <Skills />

          <Projects />

          <Experience />

          <Contact />

          <Footer />

        </main>
      )}
    </>
  );
}

export default App;

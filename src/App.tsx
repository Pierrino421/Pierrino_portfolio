import Header from "./components/header";
import Home from "./pages/home";
import Projet from "./pages/projet";
import Contact from "./pages/contact";
import Footer from "./components/footer";
import About from "./pages/about";
import Competence from "./pages/competence";
import Experience from "./pages/experience";
import { Analytics } from '@vercel/analytics/react';
import "./styles/App.css";
function App() {
  return (
    <>
      <Header />
      <main className="p-0">
        <section id="home">
          <Home />
        </section>
        <section id="experience">
          <Experience />
        </section>
         <section id="projet">
          <Projet />
        </section>
        <section id="competence">
          <Competence />
        </section>
         <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact/>
        </section>
      </main>
      <Footer/>
      <Analytics />
    </>
  );
}

export default App;

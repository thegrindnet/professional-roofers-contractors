import "./App.css";
import Header from "../Header/Header.jsx";
import Hero from "../Hero/Hero.jsx";
import Services from "../Services/Services.jsx";
import About from "../About/About.jsx";
import Gallery from "../Gallery/Gallery.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import Faq from "../Faq/Faq.jsx";
import Contact from "../Contact/Contact.jsx";
import ServiceMap from "../ServiceMap/ServiceMap.jsx";
import Footer from "../Footer/Footer.jsx";

export default function App() {
  return (
    <div className="site">
      <a className="site__skip" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex="-1">
        <Hero />
        <Services />
        <Gallery />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
        <ServiceMap />
      </main>
      <Footer />
    </div>
  );
}

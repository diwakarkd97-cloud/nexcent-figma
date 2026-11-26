import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Clients from "./components/sections/Clients";
import Features from "./components/sections/Features";
import Spotlight from "./components/sections/Spotlight";
import Achievements from "./components/sections/Achievements";
import Testimonial from "./components/sections/Testimonial";
import Blog from "./components/sections/Blog";
import CallToAction from "./components/sections/CallToAction";
import Footer from "./components/sections/Footer";
import { spotlights } from "./data/content";

export default function App() {
  const [unlock, calendar] = spotlights;
  return (
    <>
      <Header />
      <main className="page">
        <Hero />
        <Clients />
        <Features />
        <div className="stack">
          <Spotlight {...unlock} />
          <Achievements />
          <Spotlight {...calendar} />
          <Testimonial />
          <Blog />
        </div>
        <div className="page-end"><CallToAction /></div>
      </main>
      <Footer />
    </>
  );
}

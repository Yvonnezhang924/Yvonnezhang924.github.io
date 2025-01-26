import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
//import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
//import Links from './components/sidebar/links/Links';

const App = () => {
  return <div>
        <Cursor />
        <section id="Intro">
          <Navbar/>
          <Hero/>
        </section>
        
        <section id="Projects">
          <Portfolio />
        </section>

        <section id ="Contact">
          <Contact />
        </section>
        </div>;
}; 


export default App;
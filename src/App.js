import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/Aboutus';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import WhyHireMe from './components/whyhireme/Whyhireme';
import Experience from './components/experiences/Experience';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Experience/>
      <WhyHireMe/>
      <Contact />
      <Footer />
    </>
  );
}

export default App;

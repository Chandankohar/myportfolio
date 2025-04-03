import Hero from '../../components/hero/Hero';
import About from '../../components/about/Aboutus';
import Project from '../../components/project/Project';
import WhyHireMe from '../../components/whyhireme/Whyhireme';
import Experience from '../../components/experiences/Experience';

function HomePage() {
  return (
    <>
    
      <Hero />
      <About />
      <Project />
      <Experience/>
      <WhyHireMe/>
      
    </>
  );
}
export default HomePage;
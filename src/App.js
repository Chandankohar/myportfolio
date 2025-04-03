import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './page/homepage/HomePage';
import ProjectDetail from './page/projectdetail/ProjectDetail';
import Navbar from './components/navbar/Navbar';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
function App() {
  return (
    <>
    <Navbar/>
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  </Router>
  <Contact/>
  <Footer/>
  </>
  );
}

export default App;

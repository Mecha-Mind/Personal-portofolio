import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer';
import './App.css';
import ElevatorPatch from './components/elevator-patch/ElevatorPatch';

function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Testimonials/>
      <ElevatorPatch/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

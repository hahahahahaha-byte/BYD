import logo from './logo.svg';
import './App.css';
import Navbar from './components/Nav/Navbar';
import HeroVideo from './components/HeroVideo/HeroVideo';
import HeroImage from './components/HeroImage/HeroImage';
import CarImages from './components/CarImages/CarImages';
import InteriorImages from './components/InteroirImages/Interiorimages'
import Carousel from "./components/Carousel/Carousel"
import Capability from './components/Capability/Capability';
import Assembly from './components/Assembly/Assembly';
import Experience from './components/Experience/Experience';
import Footer from "./components/Footer/Footer"
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroVideo />
      <HeroImage />
      <CarImages />
      <InteriorImages/>
      <Carousel/>
      <Capability />
      <Assembly />
      <Experience />
      <Footer/>
    </div>
  );
}

export default App;

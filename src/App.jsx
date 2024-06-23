import './App.css';
import Category from './components/Category';
import Footer from './components/Footer';
import HeroPage from './components/HeroPage';
import Navbar from './components/Navbar';
import Newarr from './components/Newarr';
// import Testimonials from './components/Testimonials';
import TopSelling from './components/TopSelling';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroPage/>
      <Newarr />
      <TopSelling/>
      <Category/>
      {/* <Testimonials/> */}
      <Footer/>
    </div>
  );
}

export default App;

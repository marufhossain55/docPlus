import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import Info from './components/Info';
import WhoWeAre from './components/WhoWeAre';
import Service from './components/Service';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import CallOut from './components/CallOut';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-inter">
      <div className="w-[1160px] mx-auto">
        <NavBar />
      </div>
      <div className="flex justify-center">
        <Banner />
      </div>
      <div className="w-[1160px] mx-auto">
        <Info />
        <WhoWeAre />
        <Service />
        <Testimonial />
        <Faq />
        <CallOut />
      </div>
      <div className="h-[442px] bg-[#020043]">
        <Footer />
      </div>
    </div>
  );
}

export default App;

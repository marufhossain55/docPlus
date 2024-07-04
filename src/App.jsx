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
import bg1 from './assets/bg1.png';

function App() {
  return (
    <div className="font-inter bg-[#02004307]">
      <div>
        <div
          style={{
            backgroundImage: ` url(${bg1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <div className="w-[1160px] mx-auto">
            <NavBar />
            <div className="flex justify-center">
              <Banner />
            </div>
          </div>
        </div>

        <div>
          <div className="w-[1160px] mx-auto">
            <Info />
            <WhoWeAre />
            <Service />
            <Testimonial />
            <Faq />
          </div>
          <div
            className="flex justify-center pb-40"
            style={{
              backgroundImage: ` url(${bg1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <CallOut />
          </div>
        </div>
        <div className="h-[442px] bg-[#020043]">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

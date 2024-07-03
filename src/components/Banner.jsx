import banner from '../assets/banner.png';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};
export default Banner;

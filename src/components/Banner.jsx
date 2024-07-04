import banner from '../assets/banner.png';
import './Banner.css';

const Banner = () => {
  return (
    <div>
      <div className="banner-container mt-10">
        <img src={banner} alt="banner" />
      </div>
    </div>
  );
};
export default Banner;

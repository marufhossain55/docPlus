import banner from '../assets/banner.png';
const Banner = () => {
  return (
    <div className="relative mt-10">
      <img src={banner} alt="banner" className="w-full h-auto rounded-lg" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-purple-900 to-transparent opacity-50 "
        style={{
          background:
            'linear-gradient(90deg, rgba(2, 0, 67, 1), rgba(2, 0, 67, 0.3) 100%)',
          borderRadius: '50px',
        }}
      ></div>
    </div>
  );
};

export default Banner;

import { GoArrowUpRight } from 'react-icons/go';
import Rectangle24 from '../assets/Rectangle24.png';

const WhoWeAre = () => {
  return (
    <div className="flex justify-between mt-40">
      <div>
        <h2 className="w-[139px] h-[44px] border rounded-3xl flex justify-center items-center bg-[#FFFFF5] font mb-4">
          Who we are
        </h2>
        <h1 className="text-4xl text-[#020043] font-semibold mb-4">
          We Help To Get <br /> Soultions
        </h1>
        <p className="w-[470px] mb-16">
          We are proud to be a trusted healthcare provider in our community, and
          we look forward to serving you and your family with excellence,
          integrity, and compassion. Your health is our priority, and we are
          here for you every step of the way. We believe in treating each
          patient with dignity, respect, and empathy, ensuring that they receive
          the attention and care they deserve.
        </p>
        <div>
          <div className="flex items-center justify-center border w-[159px] h-[52px] bg-[#FFC637] rounded-xl">
            <button>Learn more</button>
            <GoArrowUpRight />
          </div>
        </div>
      </div>
      <div>
        <img src={Rectangle24} alt="Rectangle24" />
        <div className="w-[395px] h-[210px] bg-[#343268] rounded-3xl flex flex-col justify-center items-center -translate-y-44 -translate-x-24">
          <h2 className="text-white text-2xl font-medium mb-5  w-[325px]">
            Our mission is simple
          </h2>
          <p className="text-[#FFFFFFCC] ">
            To provide high-quality healthcare services <br /> that are
            accessible, personalized, and <br /> patient-centered.
          </p>
        </div>
      </div>
    </div>
  );
};
export default WhoWeAre;

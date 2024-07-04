import { GoStarFill } from 'react-icons/go';
import chart from '../assets/chart.png';
import certificate from '../assets/certificate.png';
import coin from '../assets/coin.png';
import videoIcon from '../assets/videoIco.png';
import people from '../assets/people.png';

const info = () => {
  return (
    <div className="mt-10">
      <div>
        <h2 className="text-center  text-5xl font-semibold translate-y-[85px]">
          Comprehensive Care <br />
          for Every Patient
        </h2>
      </div>
      <div>
        <div className="flex gap-5 items-end">
          <div className="h-[312px] w-[216px]  border rounded-3xl bg-[#FBFBFB] p-5">
            <h2 className="text-4xl font-semibold mb-2">90%</h2>
            <p className="text-sm mb-7  text-[#020043]">
              Patient satisfaction <br /> rate, reflecting our <br />
              commitment.
            </p>
            <div className="flex justify-center">
              <img className="h-[131px] w-[131px]" src={chart} alt="chart" />
            </div>
          </div>

          <div className=" w-[216px] h-[190px] border rounded-3xl bg-[#FFFFF5] p-5">
            <h2 className="text-4xl font-semibold mb-1">500+</h2>
            <p className="text-sm   text-[#020043]">
              Board-certified <br /> doctors
            </p>
            <div className="flex justify-end">
              <img src={certificate} alt="certificate" />
            </div>
          </div>
          <div className="w-[216px] h-[162px] border rounded-3xl bg-[#FBFBFB] p-5">
            <div className="flex gap-1  items-center">
              <h2 className="text-4xl font-semibold mb-1">4.8</h2>
              <GoStarFill style={{ color: '#FFE03D', fontSize: '32px' }} />
            </div>
            <p className="text-sm mb-7  text-[#020043]">Over 20,000 Patient</p>
            <img src={people} alt="people" />
          </div>
          <div className="w-[216px] h-[190px] border rounded-3xl bg-[#FFFFF5] p-5">
            <h2 className="text-4xl font-semibold mb-1">$5000</h2>
            <p className="text-sm mb-1 text-[#020043]">
              Money spend <br />
              for poor patient
            </p>
            <div className="flex justify-end">
              <img src={coin} alt="coin" />
            </div>
          </div>
          <div className="w-[216px] h-[312px] border rounded-3xl bg-[#FBFBFB] p-5">
            <h2 className="text-4xl font-semibold mb-1">50+</h2>
            <p className="text-sm mb-16  text-[#020043]">
              Free lession video <br />
              for patient
            </p>
            <div className="flex justify-center">
              <img src={videoIcon} alt="videoIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default info;

<div></div>;

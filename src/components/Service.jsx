import { GoArrowUpRight } from 'react-icons/go';
import Rectangle272 from '../assets/Rectangle272.png';
import Rectangle271 from '../assets/Rectangle271.png';
import Rectangle27 from '../assets/Rectangle27.png';

const Service = () => {
  return (
    <div className="bg-[#FFFFF5] p-10 rounded-2xl grid grid-cols-2 gap-7 gap-y-16">
      <div>
        <div>
          <h2 className="w-[139px] h-[44px] border rounded-3xl flex justify-center items-center bg-[#fbfbfb] font mb-4">
            Service
          </h2>
          <h1 className="text-4xl text-[#020043] font-semibold mb-4">
            Online Doctor Meet
          </h1>
          <p className="w-[470px] mb-16">
            We are committed to providing high-quality, compassionate care to
            every patient we serve. Whatever your healthcare needs may be, you
            can trust us to be your partner in health and wellness.
          </p>
          <div>
            <div className="flex items-center justify-center border w-[159px] h-[52px] bg-[#FFC637] rounded-xl">
              <button>Appointment</button>
              <GoArrowUpRight style={{ fontSize: '20px' }} />
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div>
          <div className="">
            <img
              className="rounded-3xl w-[524px] h-[394px]"
              src={Rectangle272}
              alt="Rectangle24"
            />
          </div>
          <div className=" bottom-4 left-6 absolute w-[321px] h-[140px] bg-[#020043b6] rounded-3xl flex flex-col justify-center items-center  pl-4">
            <div className="flex justify-end gap-4">
              <div>
                <h2 className="text-white text-xl font-bold mb-2  ">
                  Advanced Technology
                </h2>
                <p className="text-[#FFFFFFCC] text-xs  ">
                  Our surgeons are trained in the latest <br /> robotic surgical
                  techniques, which <br /> allow for greater precision
                </p>
              </div>
              <div className="flex flex-col justify-end mt-16">
                <button className="rounded-full text-white p-2 bg-yellow-400">
                  <GoArrowUpRight style={{ fontSize: '28px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div>
          <div className="">
            <img
              className="rounded-3xl w-[524px] h-[394px]"
              src={Rectangle271}
              alt="Rectangle271"
            />
          </div>
          <div className=" bottom-4 left-6 absolute w-[321px] h-[140px] bg-[#020043b6] rounded-3xl flex flex-col justify-center items-center  pl-4">
            <div className="flex justify-end gap-4">
              <div>
                <h2 className="text-white text-xl font-bold mb-2  ">
                  Online Doctor Meet
                </h2>
                <p className="text-[#FFFFFFCC] text-xs  ">
                  Our surgeons are trained in the latest <br /> robotic surgical
                  techniques, which <br /> allow for greater precision
                </p>
              </div>
              <div className="flex flex-col justify-end mt-16">
                <button className="rounded-full text-white p-2 bg-yellow-400">
                  <GoArrowUpRight style={{ fontSize: '28px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div>
          <div className="">
            <img
              className="rounded-3xl w-[524px] h-[394px]"
              src={Rectangle27}
              alt="Rectangle27"
            />
          </div>
          <div className=" bottom-4 left-6 absolute w-[321px] h-[140px] bg-[#020043b6] rounded-3xl flex flex-col justify-center items-center  pl-4">
            <div className="flex justify-end gap-4">
              <div>
                <h2 className="text-white text-xl font-bold mb-2  ">
                  Consultancy your health
                </h2>
                <p className="text-[#FFFFFFCC] text-xs  ">
                  Our surgeons are trained in the latest <br /> robotic surgical
                  techniques, which <br /> allow for greater precision
                </p>
              </div>
              <div className="flex flex-col justify-end mt-16">
                <button className="rounded-full text-white p-2 bg-yellow-400">
                  <GoArrowUpRight style={{ fontSize: '28px' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;

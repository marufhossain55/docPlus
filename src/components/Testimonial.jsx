import { TiStarFullOutline } from 'react-icons/ti';
import person1 from '../assets/person1.png';
import person2 from '../assets/person2.png';
import person3 from '../assets/person3.png';

const Testimonial = () => {
  return (
    <div>
      <div>
        <h2 className="w-[139px] h-[44px] border rounded-3xl flex justify-center items-center bg-[#FBFBFB] font mb-4">
          Testimonial
        </h2>
      </div>
      <div>
        <h1 className="text-4xl text-[#020043] font-semibold mb-4">
          What they say about us
        </h1>
      </div>
      <div className="flex gap-6">
        <div className=" w-[371px] h-[241px]  bg-[#FFFFF5] p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">
            Expertise and Compassion <br /> Combined
          </h2>
          <p className="text-xs mb-5">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-2">
            <img src={person1} alt="person1" />
            <div>
              <p>
                <span className="text-xs font-bold">Sarah D</span>,
                <span className="text-xs">IT Professional</span>
              </p>
              <div className="flex">
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[371px] h-[241px]  bg-[#FFFFF5] p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">
            Life-Saving Care, Life-Changing <br /> Experience
          </h2>
          <p className="text-xs mb-5">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-2">
            <img src={person2} alt="person2" />
            <div>
              <p>
                <span className="text-xs font-bold">Michael R</span>,
                <span className="text-xs">, Business Executive</span>
              </p>
              <div className="flex">
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[371px] h-[241px]  bg-[#FFFFF5] p-5 rounded-lg">
          <h2 className="text-lg font-semibold mb-3">
            A Partner in Health and <br />
            Wellness
          </h2>
          <p className="text-xs mb-5">
            I can't thank enough for their exceptional care. The doctors and
            staff showed incredible expertise and compassion throughout my
            treatment journey. I felt truly cared for every step of the way.
          </p>
          <div className="flex gap-2">
            <img src={person3} alt="person3" />
            <div>
              <p>
                <span className="text-xs font-bold">David S, </span>,
                <span className="text-xs">Lawyer</span>
              </p>
              <div className="flex">
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
                <TiStarFullOutline
                  style={{ color: '#FFE03D', fontSize: '15px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;

import { GoArrowUpRight } from 'react-icons/go';
import logo from '../assets/logo_dark.png';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center ">
      <div>
        <img src={logo} alt="docPlus" />
      </div>
      <div>
        <ul className="flex gap-6">
          <li>Home</li>
          <li>Services</li>
          <li>Blog</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-1 border border-black p-3 rounded-xl">
        <button>Appointment</button>
        <GoArrowUpRight />
      </div>
    </div>
  );
};
export default NavBar;

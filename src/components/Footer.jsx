import logo_light from '../assets/logo_light.png';
import socaials from '../assets/socials.png';

const Footer = () => {
  return (
    <div className=" text-sm flex flex-col justify-evenly pt-40">
      <div className="">
        <img
          className="ml-[264px] -translate-y-9"
          src={logo_light}
          alt="logo_light  "
        />
      </div>
      <div className="text-white flex justify-evenly items-center  ">
        <div className="space-y-6 flex flex-col ">
          <div></div>
          <div className="space-y-5">
            <h2 className="font-normal">
              123 Main Street Anytown, <br /> USA Postal Code: 12345
            </h2>
            <p className="font-normal">
              Support: support@oyolloo.com <br /> (Available : 10:00am to
              07:00pm)
            </p>
          </div>
        </div>
        <div>
          <ul className="space-y-6">
            <li>Home </li>
            <li>About us</li>
            <li>Success Page</li>
            <li>Terms and condition</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-6">
            <li>Services </li>
            <li>Scheduling</li>
            <li>Contact Us</li>
            <li>Patient Portal</li>
          </ul>
        </div>
        <div>
          <ul className="space-y-6">
            <li>Follow Us </li>
            <li>
              <img src={socaials} alt="socaials" />
            </li>
            <li>@docplus 2024</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;

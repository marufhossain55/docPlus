import logo_light from '../assets/logo_light.png';

const Footer = () => {
  return (
    <div className="text-white flex justify-evenly items-center pt-24">
      <div className="space-y-6">
        <img src={logo_light} alt="logo_light" />
        <h2>
          123 Main Street Anytown, <br /> USA Postal Code: 12345
        </h2>
        <p>
          Support: support@oyolloo.com <br /> (Available : 10:00am to 07:00pm)
        </p>
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
          <li>Scheduling</li>
          <li>@docplus 2024</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;

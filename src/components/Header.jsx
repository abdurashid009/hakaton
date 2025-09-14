import { Link } from "react-router-dom";
import Logo from "../assets/Logo1.jpg"


export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <img className=" w-18 rounded-[50%]" src={Logo} alt="" />
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">
              Bosh sahifa
            </Link>
          </li>
          <li>
            <Link to="/patient" className="hover:underline">
              Bemor
            </Link>
          </li>
          <li>
            <Link to="/reception" className="hover:underline">
              Qabulxona
            </Link>
          </li>
          <li>
            <Link to="/doctor" className="hover:underline">
              Shifokor
            </Link>
          </li>
          <li>
            <Link to="/kiosk" className="hover:underline">
              Kiosk
            </Link>
          </li>
        </ul>
      </nav>
     
    </header>
  );
}

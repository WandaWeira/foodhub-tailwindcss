import { useState } from "react";
import { FaHome, FaQuestion } from "react-icons/fa";
import { MdMail, MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  return (
    <div className="text-gray-600 md:col-span-1 md:flex md:justify-end">
      <nav className="text-right">
        <div className="flex justify-between items-center">
          <h1 className="font-bold uppercase p-4 border-b border-gray-100">
            <a href="/" className="hover:text-gray-900">
              Food hub
            </a>
          </h1>
          <div className="px-4 cursor-pointer md:hidden">
            <MdMenu className="w-6" onClick={toggleMenu} />
          </div>
        </div>
        <ul className={`text-sm mt-6 ${isMenuVisible ? 'block' : 'hidden'} md:block`}>
          <li className="py-1 font-bold">
            <a
              href="/"
              className="px-4 flex justify-end border-r-4 border-red-400"
            >
              <span>Home</span>
              <FaHome className="w-5 ml-2 mt-1" />
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="px-4 flex justify-end border-r-4 border-white"
            >
              <span>About</span>
              <FaQuestion className="w-5 ml-2 mt-1" />
            </a>
          </li>
          <li className="py-1">
            <a
              href="/"
              className="px-4 flex justify-end border-r-4 border-white"
            >
              <span>Contact</span>
              <MdMail className="w-5 ml-2 mt-1" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

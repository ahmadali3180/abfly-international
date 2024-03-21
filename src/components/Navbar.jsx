import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const NavLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  { to: "/catalogue", text: "Catalogue" },
  { to: "/contact", text: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");
  const [menu, setMenu] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setActiveLink(location.pathname);
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(
        (prevScrollPos > currentScrollPos &&
          prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10
      );

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location, prevScrollPos]);

  return (
    <div className="flex justify-between px-8 md:px-10 lg:px-14 items-center w-full fixed z-10 -mt-4 py-3 backdrop-blur-md bg-gray-900/90">
      <MainMenu menu={menu} setMenu={setMenu} />
      {/* Logo */}
      <div className="xxs:-ml-8 flex gap-3">
        <Link to="/">
          <img src="/logo-thumb.png" alt="logo" className="w-16 h-14" />
        </Link>
        <p className="text-gray-custom text-2xl font-semibold uppercase italic leading-7 xxs:text-xl ">
          ABFLY <br /> &nbsp; INTERNATIONALS
        </p>
      </div>
      {/* NavLinks */}
      <nav className="xxs:hidden sm:flex gap-10 items-center">
        {NavLinks.map((link) => (
          <Link
            key={link.text}
            to={link.to}
            className={`hover:text-white transition duration-500 ease-in-out ${
              activeLink === link.to
                ? "text-white font-semibold"
                : "text-white/70"
            }`}
          >
            {link.text}
          </Link>
        ))}
      </nav>
      <img
        onClick={() => setMenu(true)}
        src="/menu-icon.png"
        alt="menu-icon"
        className="w-7 h-7 xxs:flex sm:hidden"
      />
    </div>
  );
};

const MainMenu = ({ menu, setMenu }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <div
      className={`fixed top-0  h-[100vh] w-full backdrop-blur-md bg-gray-900/90 transition-all flex justify-center items-center shadow-sm shadow-black/10 ${
        menu ? "left-0" : "left-[100%]"
      }`}
    >
      <img
        src="/close-icon.png"
        alt="close-icon"
        onClick={(e) => {
          setMenu(false);
        }}
        className="absolute top-10 cursor-pointer right-6 h-7"
      />

      <nav className="flex flex-col gap-8 text-center text-lg -mt-24">
        {NavLinks.map((link) => (
          <Link
            to={link.to}
            className={`hover:text-gray-300 transition duration-500 ease-in-out ${
              activeLink === link.to
                ? "text-gray-300 font-semibold"
                : "text-gray-300/70"
            }`}
            onClick={() => setMenu(false)}
            key={link.text}
          >
            {link.text}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;

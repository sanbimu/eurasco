import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { navLinks } from "../../navLinks";

const HeaderMobile = ({ current }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoHeight, setLogoHeight] = useState(90);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 0;
      const minLogoHeight = 52;

      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
        setLogoHeight(minLogoHeight);
      } else {
        setIsScrolled(false);
        setLogoHeight(90);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-row justify-between w-full fixed top-0 z-[100] m-auto pr-8 py-1 ${
          isScrolled ? "bg-white bg-opacity-40" : ""
        }`}
      >
        <Image
          src="/icons/logo.svg"
          alt="Eurasco Logo"
          width={150}
          height={90}
          className={`h-[${logoHeight}px]`}
        />
        <button
          className="flex flex-col justify-center gap-1"
          onClick={toggleMenu}
        >
          <div className="w-[30px] h-[2px] bg-darkGreen"></div>
          <div className="w-[30px] h-[2px] bg-darkGreen"></div>
          <div className="w-[30px] h-[2px] bg-darkGreen"></div>
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute flex flex-col w-full m-auto px-12 pt-36 h-screen gap-10 uppercase font-open text-lg text-darkGreen font-semibold bg-white bg-opacity-60">
          {navLinks.map((link) => (
            <a key={link.name} href={link.path}>
              {link.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
export default HeaderMobile;

import Image from "next/image";
import { navLinks } from "../../navLinks";
import { useState, useEffect } from "react";
import Link from "next/link";

const HeaderMobile = ({ current }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logoSize, setLogoSize] = useState({ width: 150, height: 90 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 0;
      const initialLogoSize = { width: 150, height: 90 };
      const scrolledLogoSize = { width: 80, height: 52 };

      if (scrollPosition > scrollThreshold) {
        setIsScrolled(true);
        setLogoSize(scrolledLogoSize);
      } else {
        setIsScrolled(false);
        setLogoSize(initialLogoSize);
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
    <div className="lg:hidden flex flex-col">
      <div
        className={`flex flex-row justify-between w-full fixed top-0 z-[100] m-auto pl-2 pr-8 py-1 ${
          isScrolled & !isMenuOpen
            ? "bg-white bg-opacity-30 backdrop-blur-sm "
            : ""
        }`}
      >
        <Image
          src="/icons/logo.svg"
          alt="Eurasco Logo"
          width={logoSize.width}
          height={logoSize.height}
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
        <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col px-12 pt-36 gap-10 uppercase font-open text-lg text-darkGreen font-semibold bg-white bg-opacity-90">
          <Link href="/">Acceuil</Link>
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

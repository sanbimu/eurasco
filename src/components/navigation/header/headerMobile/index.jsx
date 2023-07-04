import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const HeaderMobile = ({ current }) => {
  const [logoHeight, setLogoHeight] = useState(90);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const minLogoHeight = 52;
      const scrollThreshold = 0;

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
        <button className="flex flex-col justify-center gap-1">
          <div className="w-[30px] h-[2px] bg-darkGreen"></div>
          <div className="w-[30px] h-[2px] bg-darkGreen"></div>
          <div className="w-[30px] h-[2px] bg-darkGreen"></div>
        </button>
      </div>
      {/* <div className="flex flex-col w-full m-auto px-12 pt-[120px] h-screen gap-10 uppercase font-open font-sm text-lightGreen font-semibold">
        <Link
          href="/"
          className="border border-lightGreen p-2 rounded-[10px] w-auto"
        >
          Acceuil
        </Link>
        <Link
          href="/evenements"
          className="border border-lightGreen p-2 rounded-[10px] w-auto"
        >
          Nos événements
        </Link>
        <Link
          href="/actualites"
          className="border border-lightGreen p-2 rounded-[10px] w-auto"
        >
          Nos actualités
        </Link>
        <Link
          href="/membres"
          className="border border-lightGreen p-2 rounded-[10px] w-auto"
        >
          Nos membres
        </Link>
        <Link
          href="/contact"
          className="border border-lightGreen p-2 rounded-[10px] w-auto"
        >
          Contact
        </Link>
      </div> */}
    </div>
  );
};
export default HeaderMobile;

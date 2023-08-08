import Image from "next/image";
import { navLinks } from "../../navLinks";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

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

  const router = useRouter();
  const isContactPage = router.pathname === "/contact";
  const isBlogPost = router.pathname === "/news/[uid]";
  const isWhiteLogo = isBlogPost || isScrolled || isMenuOpen;

  return (
    <div className="lg:hidden flex flex-col z-[100]">
      <div
        className={`flex flex-row justify-between w-full fixed top-0 z-[100] m-auto pl-2 pr-8 py-1 ${
          isScrolled & !isMenuOpen
            ? "bg-darkGreen bg-opacity-60 backdrop-blur-sm "
            : ""
        }`}
      >
        <Link href="/">
          <Image
            src={isWhiteLogo ? "/icons/logoWhite.svg" : "/icons/logo.svg"}
            alt="Eurasco Logo"
            width={logoSize.width}
            height={logoSize.height}
          />
        </Link>
        <button
          className="flex flex-col justify-center gap-1"
          onClick={toggleMenu}
        >
          <span
            className={`w-[30px] h-[2px] ${
              isContactPage && !isScrolled ? "bg-darkGreen" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-[30px] h-[2px] ${
              isContactPage && !isScrolled ? "bg-darkGreen" : "bg-white"
            }`}
          ></span>
          <span
            className={`w-[30px] h-[2px] ${
              isContactPage && !isScrolled ? "bg-darkGreen" : "bg-white"
            }`}
          ></span>
        </button>
      </div>
      {isMenuOpen && (
        <div className="fixed z-[90] top-0 left-0 right-0 bottom-0 flex flex-col px-12 pt-36 gap-10 uppercase font-open text-lg text-white font-semibold tracking-wider bg-darkGreen bg-opacity-70 backdrop-blur-md animate__animated animate__fadeInDown animate__faster	">
          <Link href="/" onClick={toggleMenu}>
            Accueil
          </Link>
          {navLinks.map((link) => {
            const isActive = router.pathname === link.path;
            return (
              <Link
                key={link.name}
                href={link.path}
                onClick={toggleMenu}
                className={`${isActive ? "text-yellow" : "text-white"}`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default HeaderMobile;

{
  /* <button
className="flex flex-col justify-center gap-1"
onClick={toggleMenu}
>
<span
  className={`w-[30px] h-[2px] ${
    isContactPage && !isScrolled ? "bg-darkGreen" : "bg-white"
  }`}
></span>
<span
  className={`w-[30px] h-[2px] ${
    isContactPage && !isScrolled ? "bg-darkGreen" : "bg-white"
  }`}
></span>
<span
  className={`w-[30px] h-[2px] ${
    isContactPage && !isScrolled ? "bg-darkGreen" : "bg-white"
  }`}
></span>
</button> */
}

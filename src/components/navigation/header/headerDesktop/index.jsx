import Image from "next/image";
import { navLinks } from "../../navLinks";
import { useState, useEffect } from "react";
import Link from "next/link";

const HeaderDesktop = ({ current }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSize, setLogoSize] = useState({ width: 160, height: 100 });
  const currentPath =
    typeof window !== "undefined" ? window.location.pathname : "/";
  const isContactPage = currentPath === "/contact";

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 0;
      const initialLogoSize = { width: 160, height: 100 };
      const scrolledLogoSize = { width: 120, height: 75 };

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

  return (
    <div className="hidden lg:flex z-[100] w-screen">
      <div
        className={`flex justify-between w-screen fixed top-0 z-[100] px-24 ${
          isScrolled
            ? "bg-darkGreen bg-opacity-80 backdrop-blur-md pt-1"
            : "pt-6"
        }`}
      >
        <Link href="/">
          <Image
            src={isScrolled ? "/icons/logoWhite.svg" : "/icons/logo.svg"}
            alt="Eurasco Logo"
            width={logoSize.width}
            height={logoSize.height}
          />
        </Link>
        <div className="flex gap-16 uppercase font-open text-white items-center text-[17px]">
          {navLinks.map((link, index) => {
            const isActive =
              currentPath === link.path ||
              currentPath.startsWith(`${link.path}/`);
            const isLast = index === navLinks.length - 1;
            return (
              <Link
                key={link.name}
                href={link.path}
                className={`${
                  isActive
                    ? "text-yellow"
                    : isContactPage && !isScrolled
                    ? "text-darkGreen"
                    : "text-white"
                } ${
                  isLast
                    ? isContactPage
                      ? "border-yellow"
                      : "border-white"
                    : ""
                } ${
                  isLast
                    ? "lg:py-2 lg:px-5 md:py-1 md:px-3 rounded-[32px] border justify-center items-center inline-flex"
                    : ""
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default HeaderDesktop;

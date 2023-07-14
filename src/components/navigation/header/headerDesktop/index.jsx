import Image from "next/image";
import { navLinks } from "../../navLinks";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderDesktop = ({ current }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSize, setLogoSize] = useState({ width: 160, height: 100 });
  const router = useRouter();
  const isContactPage = router.pathname === "/contact";

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
    <div className="hidden lg:flex z-[100]">
      <div
        className={`flex justify-between w-full fixed top-0 z-[100] px-[10%] ${
          isScrolled
            ? "bg-darkGreen bg-opacity-60 backdrop-blur-sm pt-1"
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
        <div className="flex lg:gap-14 uppercase font-open text-white items-center lg:text-sm md:text-xs md:gap-4">
          {navLinks.map((link, index) => {
            const isActive = router.pathname === link.path;
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
                    ? "lg:py-2 lg:px-5 md:py-1 md:px-3 rounded-[32px] border border-white justify-center items-center inline-flex"
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

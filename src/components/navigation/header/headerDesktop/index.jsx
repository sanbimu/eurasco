import Image from "next/image";
import { navLinks } from "../../navLinks";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const HeaderDesktop = ({ current }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSize, setLogoSize] = useState({ width: 160, height: 100 });
  const router = useRouter();
  const currentRoute = router.pathname;

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
    <div className="hidden lg:flex">
      <div
        className={`flex justify-between w-full fixed top-0 z-[100] pt-6 px-[10%] ${
          isScrolled ? "bg-white bg-opacity-30 backdrop-blur-sm pt-0 " : ""
        }`}
      >
        <Link href="/">
          <Image
            src="/icons/logo.svg"
            alt="Eurasco Logo"
            width={logoSize.width}
            height={logoSize.height}
          />
        </Link>
        <div className="flex gap-11 uppercase font-open text-white items-center text-sm">
          <Link
            href="/evenements"
            className={
              currentRoute === "/evenements" ? "text-yellow" : "text-white"
            }
          >
            NOS ÉVÉNEMENTS
          </Link>

          <Link
            href="/actualites"
            className={
              currentRoute === "/actualites" ? "text-yellow" : "text-white"
            }
          >
            NOS ACTUALITÉS
          </Link>

          <Link
            href="/membres"
            className={
              currentRoute === "/membres" ? "text-yellow" : "text-white"
            }
          >
            NOS MEMBRES
          </Link>

          <Link
            href="/contact"
            className={
              currentRoute === "/contact"
                ? "text-yellow py-2 px-5 rounded-[32px] border border-white justify-center items-center inline-flex"
                : "text-white py-2 px-5 rounded-[32px] border border-white justify-center items-center inline-flex"
            }
          >
            CONTACT
          </Link>
        </div>
      </div>
    </div>
  );
};
export default HeaderDesktop;

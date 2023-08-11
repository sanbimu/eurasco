import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CardsScrollable({
  children,
  cartes,
  buttonLink,
  buttonText,
}) {
  const containerRef = useRef(null);
  const [scrollIndex, setScrollIndex] = useState(0);

  const handleScroll = () => {
    const currentIndex = Math.round(
      containerRef.current?.scrollLeft / containerRef.current.offsetWidth
    );
    setScrollIndex(currentIndex);
  };

  useEffect(() => {
    containerRef.current?.addEventListener("scroll", handleScroll);
    return () => {
      containerRef.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollLeft = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
      containerRef.current.scrollBy({
        left: -containerRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollIndex < cartes.length - 1) {
      setScrollIndex(scrollIndex + 1);
      containerRef.current.scrollBy({
        left: containerRef.current.offsetWidth / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="flex flex-col md:px-18 h-full gap-4 overflow-auto relative lg:gap-6 lg:pt-2  ">
        <div className="flex flex-row overflow-hidden items-center relative">
          <div
            className={`absolute flex bg-lightGrey/80 lg:bg-buttonGrey/50  z-20 rounded-[40px] h-[40px] w-[40px] justify-center left-4 hover:bg-lightGreen ${
              scrollIndex === 0
                ? "cursor-not-allowed hover:bg-lightGrey"
                : "cursor-pointer hover:bg-lightGreen"
            }`}
            onClick={handleScrollLeft}
          >
            <Image
              src="/icons/arrowLeftWhite.svg"
              width={25}
              height={25}
              alt="Left"
            ></Image>
          </div>
          <div
            className="snap-mandatory snap-x overflow-scroll flex flex-row w-screen gap-2 pl-2 md:pl-0 pr-2 md:pr-[70px] scrollbar-hide z-10  -mr-16 "
            ref={containerRef}
          >
            {children}
          </div>
          <div
            className={`absolute flex bg-lightGrey/80 lg:bg-buttonGrey/50 z-20 rounded-[40px] h-[40px] w-[40px] justify-center right-4 ${
              scrollIndex >= cartes.length - 5
                ? "cursor-not-allowed hover:bg-lightGrey"
                : "cursor-pointer hover:bg-lightGreen"
            }`}
            onClick={handleScrollRight}
          >
            <Image
              src="/icons/arrowRightWhite.svg"
              width={25}
              height={25}
              alt="Right"
            ></Image>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-row justify-center gap-12 md:gap-20 lg:gap-12 pt-4 ">
      </div> */}
      <div className="flex pt-8 md:pt-5 md:pb-4 lg:pb-10 mx-10 md:mx-48 lg:self-center ">
        <Link
          className="text-center font-open uppercase font-semibold text-[17px] leading-[17.3px] tracking-[1px] text-lightGreen border border-lightGreen rounded-[10px] px-[25px] py-[15px] w-full"
          href={buttonLink}
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
}

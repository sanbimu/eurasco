import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardsScrollable({
  children,
  cartes,
  buttonLink,
  buttonText,
}) {
  const containerRef = useRef(null);
  console.log(containerRef);
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
    <div className="flex flex-col lg:flex-row md:mx-8 md:px-18 lg:mx-auto gap-4 overflow-auto lg:pb-20 lg:gap-6 lg:pt-2  ">
      <div className="flex flex-col md:flex-row lg:flex-col md:gap-6 lg:gap-6 gap-4 overflow-auto">
        <div
          className="snap-mandatory snap-x overflow-scroll flex flex-row pl-8 pr-10 scrollbar-hide "
          ref={containerRef}
        >
          {children}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-12 md:gap-20 pt-1 md:pt-2">
        <div
          className={`flex border border-lightGreen rounded-[50px] h-[40px] w-[40px] justify-center ${
            scrollIndex === 0 ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={handleScrollLeft}
        >
          <Image
            src="/icons/arrowLeft.svg"
            width={25}
            height={25}
            alt="Left"
          ></Image>
        </div>
        <div
          className={`flex border border-lightGreen rounded-[50px] h-[40px] w-[40px] justify-center ${
            scrollIndex >= cartes.length - 5
              ? "cursor-not-allowed"
              : "cursor-pointer"
          }`}
          onClick={handleScrollRight}
        >
          <Image
            src="/icons/arrowRight.svg"
            width={25}
            height={25}
            alt="Right"
          ></Image>
        </div>
      </div>
      <div className="flex pb-[70px] md:pb-4 pt-1 md:pt-2 lg:pb-10 mx-10 md:mx-28">
        <Link
          className="text-center font-open uppercase font-semibold text-[17px] leading-[17.3px] tracking-[1px] text-lightGreen border border-lightGreen rounded-[10px] px-[25px] py-[15px] w-full"
          href={buttonLink}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

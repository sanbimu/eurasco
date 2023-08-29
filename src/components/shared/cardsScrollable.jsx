import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function CardsScrollable({ children, buttonLink, buttonText }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const [showButtons, setShowButtons] = useState(false);

  const handleScroll = (scrollOffset) => {
    const container = containerRef.current;
    if (container) {
      const childWidth =
        container.firstChild.clientWidth +
        parseInt(getComputedStyle(container.firstChild).marginLeft) +
        parseInt(getComputedStyle(container.firstChild).marginRight) +
        parseInt(getComputedStyle(container.firstChild).paddingLeft) +
        parseInt(getComputedStyle(container.firstChild).paddingRight);
      const maxScrollPosition = container.scrollWidth - container.clientWidth;
      const newPosition = Math.min(
        Math.max(scrollPosition + scrollOffset * childWidth, 0),
        maxScrollPosition
      );
      setScrollPosition(newPosition);
      container.scrollTo({ left: newPosition, behavior: "smooth" });
    }
  };

  const handleResize = () => {
    const container = containerRef.current;
    if (container) {
      setShowButtons(container.scrollWidth > container.clientWidth);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className='flex flex-col md:px-18 h-full gap-4 overflow-auto relative lg:gap-6 lg:pt-2  '>
        <div className='flex flex-row overflow-hidden items-center relative'>
          {showButtons && scrollPosition > 0 && (
            <div
              className='absolute flex bg-lightGrey/80 z-40 rounded-full h-[50px] w-[50px] justify-center left-4 cursor-pointer hover:bg-lightGreen/80 hover:h-[55px] hover:w-[55px]'
              onClick={() => handleScroll(-1.1)}
            >
              <Image
                src='/icons/arrowLeftWhite.svg'
                width={30}
                height={30}
                alt='Left'
              />
            </div>
          )}
          <div
            className='flex flex-row gap-2 pl-8 md:pl-0 pr-8 md:pr-0 overflow-x-scroll snap-mandatory snap-x scrollbar-hide'
            ref={containerRef}
          >
            {children}
          </div>
          {showButtons &&
            scrollPosition <
              containerRef?.current?.scrollWidth -
                containerRef?.current?.clientWidth && (
              <div
                className='absolute flex bg-lightGrey/80 z-40 rounded-full h-[50px] w-[50px] justify-center right-4 cursor-pointer hover:bg-lightGreen/80 hover:h-[55px] hover:w-[55px]'
                onClick={() => handleScroll(1.1)}
              >
                <Image
                  src='/icons/arrowRightWhite.svg'
                  width={30}
                  height={30}
                  alt='Right'
                />
              </div>
            )}
        </div>
      </div>

      <div className='flex pt-8 md:pt-5 md:pb-4 lg:pb-10 mx-10 md:mx-5  justify-center  '>
        <Link
          className='text-center font-open uppercase font-semibold text-[17px] leading-[17.3px] tracking-[1px] text-lightGreen border border-lightGreen rounded-[10px] px-[25px] py-[20px] w-full lg:w-[50%] hover:bg-lightGreen hover:text-white hover:shadow-lg duration-300'
          href={buttonLink}
        >
          {buttonText}
        </Link>
      </div>
    </>
  );
}

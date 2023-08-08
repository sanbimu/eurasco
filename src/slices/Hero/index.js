import React from "react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const HeroSlice = ({ slice }) => {
  function scrollToAbout() {
    const aboutSection = document.getElementById("about");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className="flex flex-col">
        <div className="flex relative h-screen w-full">
          <div className="flex flex-col h-screen w-full justify-center z-10 font-open text-white px-[13px] md:pl-12 md:pr-24 lg:pl-36 lg:pr-72">
            <h2 className="uppercase font-semibold tracking-[10px] text-sm lg:text-base lg:leading-6 lg:pb-3 text-yellow">
              {slice.primary.subtitle}
            </h2>
            <h1 className="uppercase font-mont font-bold leading-[70px] text-5xl lg:text-6xl">
              {slice.primary.title}
            </h1>
            <p className="text-lg leading-8 py-6">
              {slice.primary.description}
            </p>
            <button
              className="uppercase border-2 border-lightGreen  rounded-[3px] px-8 py-2 self-start font-semibold tracking-[2px] text-[15px]"
              onClick={() => (window.location.href = "/members")}
            >
              {slice.primary.button}
            </button>
          </div>

          <div
            className="cursor-pointer absolute z-10 bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 lg:hidden "
            onClick={scrollToAbout}
          >
            <Image
              src="/icons/arrowDown.svg"
              width={40}
              height={40}
              alt="Arrow"
              className="animate-bounce"
            />
          </div>

          <Image
            src={slice.primary.imageMobile.url}
            width={394}
            height={850}
            alt="Hero Image"
            className="flex md:hidden absolute h-screen w-full object-cover"
          />
          <Image
            src={slice.primary.imageMedium.url}
            width={1133}
            height={1472}
            alt="Hero Image"
            className="hidden md:flex absolute w-full h-screen lg:hidden "
          />
          <Image
            src={slice.primary.imageDesktop.url}
            width={1920}
            height={850}
            alt="Hero Image"
            className="hidden lg:flex absolute lg:h-screen lg:w-full lg:object-cover lg:top-0"
          />
        </div>
        <div id="about"></div>
      </div>
    </>
  );
};

export default HeroSlice;

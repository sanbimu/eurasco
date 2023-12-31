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
      <div className='flex flex-col'>
        <div className='flex relative h-mobileFullScreen w-full '>
          <div className='flex flex-col h-mobileFullScreen w-full justify-center z-20 font-open text-white px-[13px] md:pl-12 md:pr-24 lg:pl-36 lg:pr-72 mt-14 lg:mt-5'>
            <h2 className='uppercase font-semibold tracking-[8px] text-sm lg:text-base lg:leading-6 pb-5 lg:pb-3 text-yellow'>
              {slice.primary.subtitle}
            </h2>
            <h1 className='uppercase font-mont font-bold lg:leading-[70px]  leading-8 text-[6vw] md:text-[5vw] md:leading-[45px] lg:text-6xl'>
              {slice.primary.title}
            </h1>
            <p className='text-lg leading-8 py-6 lg:w-[100vh]'>
              {slice.primary.description}
            </p>
            <button
              className='uppercase border-2 border-lightGreen bg-lightGreen  rounded-[50px] px-8 py-2 self-start font-semibold tracking-[2px] text-[15px]  shadow-lg shadow-lightGreen/50 hover:scale-105 hover:shadow-lightGreen/80 duration-300'
              onClick={() => (window.location.href = "/members")}
            >
              {slice.primary.button}
            </button>
          </div>

          <div
            className='cursor-pointer absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 translate-y-1/2 '
            onClick={scrollToAbout}
          >
            <Image
              src='/icons/arrowDown.svg'
              width={40}
              height={40}
              alt='Arrow'
              className='animate-bounce'
            />
          </div>
          <div className='bg-black/20 h-full w-full absolute z-10' />
          <Image
            src={slice.primary.imageMobile.url}
            width={394}
            height={850}
            alt='Hero Image'
            className='flex md:hidden absolute h-mobileFullScreen w-full object-cover'
          />
          <Image
            src={slice.primary.imageMedium.url}
            width={1133}
            height={1472}
            alt='Hero Image'
            className='hidden md:flex absolute w-full h-screen lg:hidden '
          />
          <Image
            src={slice.primary.imageDesktop.url}
            width={1920}
            height={850}
            alt='Hero Image'
            className='hidden lg:flex absolute lg:h-screen lg:w-full lg:object-cover lg:top-0'
          />
        </div>
        <div id='about' className=''></div>
      </div>
    </>
  );
};

export default HeroSlice;

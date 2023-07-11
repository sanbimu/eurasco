import { PrismicRichText, PrismicNextImage } from "@prismicio/react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const HeroSlice = ({ slice }) => {
  return (
    <>
      <div className="flex h-screen w-full">
        <Image
          src="/images/homeMobile.jpg"
          width={394}
          height={850}
          alt="Hero Image"
          className="flex md:hidden relative "
        />
        <Image
          src="/images/homeMedium.jpg"
          width={1133}
          height={1472}
          alt="Hero Image"
          className="hidden md:flex md:relative lg:hidden "
        />
        <Image
          src="/images/homeDesktop.jpg"
          width={1920}
          height={850}
          alt="Hero Image"
          className="hidden lg:flex lg:relative "
        />
        <div className="flex flex-col absolute -z-50 self-center font-open px-[13px] md:pl-12 lg:pl-36 lg:pr-72 text-white">
          <h2 className="uppercase font-semibold tracking-[10px] text-sm lg:text-base lg:leading-6 lg:pb-3 text-yellow">
            {slice.primary.subtitle}
          </h2>
          <h1 className="uppercase font-mont font-bold leading-[70px] text-5xl lg:text-6xl">
            {slice.primary.title}
          </h1>
          <p className="text-lg leading-8 py-6 md:pr-48 lg:pr-[400px]">
            {slice.primary.description}
          </p>
          <button className="uppercase border-2 border-lightGreen rounded-[3px] px-8 py-2 self-start font-semibold tracking-[2px] text-[15px]">
            {slice.primary.button}
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSlice;

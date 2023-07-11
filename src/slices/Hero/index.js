import { PrismicRichText, PrismicNextImage } from "@prismicio/react";

/**
 * @typedef {import("@prismicio/client").Content.HeroSlice} HeroSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroSlice>} HeroProps
 * @param {HeroProps}
 */
const HeroSlice = ({ slice }) => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex md:bg-heroDesktop md:bg-right-top w-full bg-heroMobile h-screen">
          <div className="flex flex-col self-center font-open px-[13px] md:pl-12 lg:pl-36 lg:pr-72 text-white">
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
      </div>
    </>
  );
};

export default HeroSlice;

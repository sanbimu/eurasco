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
        <div className="flex md:bg-heroDesktop md:bg-right-top bg-heroMobile h-screen">
          <div className="flex flex-col self-center font-open px-[13px] text-white">
            <h2 className="uppercase font-semibold tracking-[10px] text-sm text-yellow">
              <PrismicRichText field={slice.primary.subtitle} />
            </h2>
            <h1 className="uppercase font-mont font-bold leading-[70px] text-5xl">
              <PrismicRichText field={slice.primary.title} />
            </h1>
            <p className="text-lg leading-8 py-6">
              <PrismicRichText field={slice.primary.description} />
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

import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.AboutEurascoSlice} AboutEurascoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutEurascoSlice>} AboutEurascoProps
 * @param {AboutEurascoProps}
 */
const AboutEurasco = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex lg:pb-40 md:mx-28 mx-5">
        <div className="flex flex-col lg:flex lg:flex-row justify-between">
          <div className="flex flex-col pt-14 font-open  md:px-0 lg:w-[50%] text-black">
            <h2 className="uppercase font-bold  text-5xl md:text-6xl font-mont text-yellow">
              {slice.primary.title}
            </h2>
            <h1 className="uppercase font-mont font-bold leading-[42px] text-4xl">
              {slice.primary.subtitle}
            </h1>
            <p className="text-[15px] leading-6 pt-[50px]">
              {slice.primary.descriptionParagraphOne}
            </p>
            <p className="text-[15px] leading-6 pt-8 pb-8 lg:pb-3">
              {slice.primary.descriptionParagraphTwo}
            </p>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
              <div className="flex flex-row lg:flex-col gap-2 md:items-center lg:items-start lg:w-[30%]">
                <Image
                  src={slice.primary.iconOne.url}
                  alt="shield"
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <p className="font-bold text-lg leading-6">
                    {slice.primary.titleIconOne}
                  </p>
                  <p className="italic text-[13px] leading-6 ">
                    {slice.primary.textIconOne}
                  </p>
                </div>
              </div>
              <div className="flex flex-row lg:flex-col gap-2 pt-8  md:pb-8 lg:pb-[36px] md:items-center lg:items-start lg:w-[30%] ">
                <Image
                  src={slice.primary.iconTwo.url}
                  alt="shield"
                  width={43}
                  height={50}
                />
                <div className="flex flex-col">
                  <p className="font-bold text-lg leading-6">
                    {slice.primary.titleIconTwo}
                  </p>
                  <p className="italic text-[13px] leading-6">
                    {slice.primary.textIconTwo}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex relative">
            <Image
              src={slice.primary.imageDesktop.url}
              width={579}
              height={759}
              alt="About Image"
              className="rounded-[10px] h-[630px] w-auto mt-[-70px]"
            />
            <div className=" h-[250px] w-[267px] bg-lightGreen rounded-[10px] p-[10px] absolute left-[25px] top-[280px]">
              <div className="border border-dashed border-white py-3 px-3">
                <Image
                  src={slice.primary.iconGreenFrame.url}
                  width={50}
                  height={50}
                  alt="Medal"
                  className="pt-1"
                />
                <p className="font-mont text-[18px] text-white font-bold leading-6 py-4">
                  {slice.primary.titleGreenFrame}
                </p>
                <p className="font-open text-[14px] text-white leading-6 ">
                  {slice.primary.textGreenFrame}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutEurasco;

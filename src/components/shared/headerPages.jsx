import React from "react";
import Image from "next/image";

export const HeaderPages = ({ title, logo }) => {
  return (
    <div className="flex h-screen md:h-auto w-full relative">
      <Image
        src="/images/homeMobile.jpg"
        width={394}
        height={850}
        alt="Hero Image"
        className="flex md:hidden relative"
      />
      <Image
        src="/images/homeDesktop.jpg"
        width={1920}
        height={850}
        alt="Hero Image"
        className="hidden md:flex relative w-full md:object-top md:object-contain md:top-0 lg:object-cover"
      />
      <div className="flex absolute z-50 items-center justify-center text-white h-full w-full">
        {title ? (
          <h1 className="uppercase font-mont font-bold leading-[70px] text-5xl md:text-3xl lg:text-5xl pl-[25px]">
            {title}
          </h1>
        ) : logo ? (
          <Image
            src={logo}
            width={800}
            height={200}
            alt="Logo"
            className="flex md:h-full md:w-[60vw] w-[80vw]"
          />
        ) : null}
      </div>
    </div>
  );
};

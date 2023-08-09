import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ButtonInfo = ({
  paddingTB,
  marginTB,
  linkTo,
  icon,
  iconHeight,
  fontSize,
  text,
}) => {
  return (
    <Link
      className={`flex flex-row border border-darkGreen rounded-[10px] items-center px-6 py-${paddingTB} gap-8 md:gap-16 mx-4 md:mx-[25vw] my-${marginTB}`}
      href={linkTo}
      target='blank'
    >
      <Image
        src={icon}
        width={55}
        height={55}
        alt='Logo'
        className={`w-[55px] h-${iconHeight}`}
      />
      <div className={`font-mont font-light text-${fontSize}`}>{text}</div>
    </Link>
  );
};

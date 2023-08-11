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
      className={`flex flex-row border border-lightGreen shadow-md shadow-lightGreen/10 rounded-[10px] items-center px-6 py-${paddingTB} gap-8 md:gap-16 mx-5    my-${marginTB}`}
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
      <div className={`font-mont font-medium text-darkGreen text-${fontSize}`}>
        {text}
      </div>
    </Link>
  );
};

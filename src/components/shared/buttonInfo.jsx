import Image from "next/image";
import Link from "next/link";
import React from "react";

export const ButtonInfo = ({
  paddingTB,
  marginTB,
  linkTo,
  icon,
  iconHeight,
  iconWidth,
  fontSize,
  text,
}) => {
  return (
    <Link
      className={`flex flex-row border border-lightGreen shadow-md shadow-lightGreen/10 hover:shadow-lightGreen/80 transition  rounded-[10px] items-center w-full px-6 py-${paddingTB} gap-8  my-${marginTB}`}
      href={linkTo}
      target='blank'
    >
      {icon && (
        <Image
          src={icon}
          width={55}
          height={55}
          alt='Logo'
          className={`w-${iconWidth} h-${iconHeight}`}
        />
      )}
      <div className={`font-mont font-medium text-darkGreen text-${fontSize}`}>
        {text}
      </div>
    </Link>
  );
};

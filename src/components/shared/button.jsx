import Link from "next/link";
import React from "react";

const Button = ({ buttonText, linkTo }) => {
  return (
    <Link
      className="font-open uppercase font-semibold text-[13px] leading-[17.3px] tracking-[1px] text-lightGreen border border-lightGreen rounded-[10px] px-[26px] py-[10px]"
      href={linkTo}
    >
      {buttonText}
    </Link>
  );
};

export default Button;

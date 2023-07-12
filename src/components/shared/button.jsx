import React from "react";

const Button = ({ text }) => {
  return (
    <button className="font-open uppercase font-semibold text-[13px] leading-[17.3px] tracking-[1px] text-lightGreen border border-lightGreen rounded-[10px] px-[26px] py-[10px]">
      {text}
    </button>
  );
};

export default Button;

import Image from "next/image";
import Button from "./button";

export const CardAll = ({ title, buttonText, linkTo }) => {
  return (
    <div className="flex flex-col mx-[25px] md:mx-auto md:w-[350px] pb-20 ">
      <div className="h-[232px] bg-white relative shadow-card rounded-[10px]">
        <Image
          src="/images/cardAll.png"
          width={283}
          height={191}
          alt="Card All Image"
          className="flex ml-14 mt-8"
        />
        <div className="flex flex-col px-[25px] items-start justify-center absolute inset-0">
          <h1 className="font-mont font-bold text-[38px] leading-[42px] text-black pb-12">
            {title}
          </h1>
          <Button buttonText={buttonText} className="pb-1" linkTo={linkTo} />
        </div>
      </div>
    </div>
  );
};

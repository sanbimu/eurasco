import Image from "next/image";
import Button from "./button";

export const CardAll = ({ title, buttonText, linkTo }) => {
  return (
    <div className="flex flex-col mx-[25px] md:mx-auto md:w-[350px] lg:w-[35vw] lg:h-[516px] lg:pb-0 ">
      <div className="h-[232px] lg:h-[516px] bg-white relative shadow-card rounded-[10px]">
        <Image
          src="/images/cardAll.png"
          width={283}
          height={191}
          alt="Card All Image"
          className="flex ml-14 mt-8 lg:hidden"
        />
        <Image
          src="/images/cardAllDesktop.png"
          width={663}
          height={497}
          alt="Card All Image"
          className="lg:flex hidden mt-10 "
        />
        <div className="flex flex-col px-[25px] items-start justify-center absolute inset-0">
          <h1 className="font-mont font-bold text-[38px] lg:text-[35px] lg:w-[40%] leading-[42px] text-black pb-12">
            {title}
          </h1>
          <Button buttonText={buttonText} className="pb-1" linkTo={linkTo} />
        </div>
      </div>
    </div>
  );
};

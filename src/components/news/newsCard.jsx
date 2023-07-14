import Image from "next/image";
import Button from "../shared/button";

export const NewsCard = () => {
  return (
    <div className="lg:hidden flex flex-col mx-[25px] md:mx-auto md:h-[560px] md:w-[343px]">
      <div className="relative rounded-[10px]">
        <Image
          src="/images/newsMobile.jpg"
          width={343}
          height={560}
          alt="News Image"
          className="flex rounded-[10px] w-full"
        />
        <div className="absolute inset-0 gradient_News rounded-[10px] shadow-card"></div>
      </div>

      <div className="flex flex-col px-[35px] md:w-[343px] items-start absolute mt-[360px]">
        <h1 className="font-mont text-white font-bold text-xl leading-6 pb-3 ">
          ACTUALITÉ 1
        </h1>
        <p className="font-open text-white text-[15px] leading-[25px] pb-5">
          Organic livestock raised for meat, eggs, and dairy products must be
          raised in living conditions.
        </p>
        <Button buttonText="voir" linkTo={"/evenements"}></Button>
      </div>
    </div>
  );
};

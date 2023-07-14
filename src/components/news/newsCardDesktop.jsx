import Image from "next/image";
import Button from "../shared/button";

export const NewsCardDesktop = () => {
  return (
    <div className="hidden lg:flex flex-row h-[300px] w-[610px] rounded-[10px] shadow-card bg-white">
      <div className="relative rounded-[10px]">
        <Image
          src="/images/newsMobile.jpg"
          width={343}
          height={560}
          alt="News Image"
          className="flex rounded-[10px] h-[300px] w-[245px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px]"></div>
      </div>
      <div className="flex flex-col ml-[270px] mt-[4%] w-[340px] items-start absolute ">
        <h1 className="font-mont text-black font-bold text-xl leading-6 pb-3 ">
          ACTUALITÉ 1
        </h1>
        <p className="font-open text-black text-[15px] leading-[25px] pb-5">
          Organic livestock raised for meat, eggs, and dairy products must be
          raised in living conditions.
        </p>
        <Button buttonText="voir" linkTo={"/evenements"}></Button>
      </div>
    </div>
  );
};

import Image from "next/image";
import Button from "../shared/button";
import Link from "next/link";

export const NewsCard = ({ linkToCard, image, title, date }) => {
  return (
    <Link
      className="lg:hidden flex flex-col mx-6 md:mx-[25vw]"
      href={linkToCard}
    >
      <div className="relative flex rounded-[10px] h-[560px] w-full shadow-card bg-darkGreen">
        <div className="flex flex-col px-[35px] md:w-[343px] justify-end mb-8 z-20">
          <h1 className="font-mont text-white font-bold text-xl leading-6 pb-1 ">
            {title}
          </h1>
          <p className="font-open text-white italic text-[13px] leading-[25px] pb-5">
            {date}
          </p>
          <div className="font-open text-lightGreen italic text-[15px] leading-[22px] ml-auto">
            Lire plus →
          </div>
        </div>
        <Image
          src={image}
          width={343}
          height={560}
          alt="News Image"
          className="absolute rounded-[10px] w-full min-h-[560px] object-cover"
        />
        <div className="absolute inset-0 gradient_News rounded-[10px] z-10 shadow-card"></div>
      </div>
    </Link>
  );
};

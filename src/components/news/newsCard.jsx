import Image from "next/image";
import Button from "../shared/button";
import Link from "next/link";

export const NewsCard = ({ linkToCard, image, title, date }) => {
  return (
    <Link
      className="lg:hidden flex flex-col mx-6 md:mx-auto md:h-[560px] md:w-[343px]"
      href={linkToCard}
    >
      <div className="relative rounded-[10px]">
        <Image
          src={image}
          width={343}
          height={560}
          alt="News Image"
          className="flex rounded-[10px] w-full min-h-[560px] object-cover"
        />
        <div className="absolute inset-0 gradient_News rounded-[10px] shadow-card"></div>
      </div>

      <div className="flex flex-col px-[35px] md:w-[343px] absolute mt-[360px]">
        <h1 className="font-mont text-white font-bold text-xl leading-6 pb-1 ">
          {title}
        </h1>
        <p className="font-open text-white italic text-[13px] leading-[25px] pb-5">
          {date}
        </p>
        <div className="font-open text-lightGreen italic text-[15px] leading-[22px]">
          Lire plus →
        </div>
      </div>
    </Link>
  );
};

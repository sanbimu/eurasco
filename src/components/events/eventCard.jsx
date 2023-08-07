import Image from "next/image";
import Link from "next/link";

export const EventCard = ({ linkToCard, imageHeader, index, title }) => {
  return (
    <Link href={linkToCard} className="flex flex-col mx-6 md:mx-[25vw]">
      <div className="flex relative rounded-[10px] shadow-card bg-darkGreen w-full h-[400px]">
        <div className="flex flex-col w-full h-[400px] p-[25px] z-20">
          <div className="flex flex-col flex-grow ">
            <p className="font-mont font-bold text-[25px] text-white text-opacity-20">
              {index}
            </p>
            <h1 className="flex font-mont text-white font-bold text-[25px] leading-[30px] my-auto">
              {title}
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col font-mont font-light text-white text-[15px] leading-[20px]">
              <p>01/08/2023 </p>
              <p>11/08/2023</p>
            </div>
            <p className="flex items-end font-open text-lightGreen italic text-[15px] leading-[22px] ml-auto">
              Lire plus →
            </p>
          </div>
        </div>
        <Image
          src={imageHeader}
          width={343}
          height={560}
          alt="Events Image"
          className="absolute rounded-[10px] w-full h-[400px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 rounded-[10px] z-10 shadow-card"></div>
      </div>
    </Link>
  );
};

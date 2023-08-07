import Image from "next/image";
import Link from "next/link";

export const EventNewsCard = ({
  linkToCard,
  index,
  title,
  sizeTitle,
  leadingTitle,
  date,
  fromDate,
  toDate,
  imageHeader,
}) => {
  return (
    <Link className="flex flex-col mx-6 md:mx-[25vw]" href={linkToCard}>
      <div className="relative flex rounded-[10px] h-[560px] w-full shadow-card">
        <div className="flex flex-col px-[35px] w-full  md:w-[343px] justify-end mb-8 z-20">
          {index && (
            <p className="font-mont font-bold text-2xl text-white text-opacity-30">
              {` EVENT ${index}`}
            </p>
          )}
          <h1
            className={`font-mont text-white font-bold text-${sizeTitle} leading-${leadingTitle} pb-1 `}
          >
            {title}
          </h1>
          {date && (
            <p className="font-open text-white italic text-[13px] leading-[25px] pb-5">
              {date}
            </p>
          )}
          {fromDate && toDate && (
            <p className="font-open text-white italic text-[13px] leading-[25px] pb-5">
              {`${fromDate} - ${toDate}`}
            </p>
          )}
          <div className="font-open text-lightGreen italic text-[15px] leading-[22px] ml-auto">
            Lire plus →
          </div>
        </div>

        <Image
          src={imageHeader}
          width={343}
          height={560}
          alt="Header Image"
          className="absolute rounded-[10px] w-full min-h-[560px] object-cover"
        />
        <div className="absolute inset-0 gradient_News rounded-[10px] z-10 shadow-card"></div>
      </div>
    </Link>
  );
};

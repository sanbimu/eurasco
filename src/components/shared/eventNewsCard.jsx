import Image from "next/image";
import Link from "next/link";

export const EventNewsCard = ({
  linkToCard,
  textIndex,
  index,
  title,
  sizeTitle,
  leadingTitle,
  date,
  fromDate,
  toDate,
  imageHeader,
  widthFull,
}) => {
  return (
    <Link
      className={`flex flex-col md:h-[420px] snap-center flex-shrink-0 ${
        widthFull ? " mx-5 md:mx-0" : " mx-2"
      }`}
      href={linkToCard}
    >
      <div
        className={`relative flex rounded-[10px] h-[260px] md:h-[420px] shadow-card  ${
          widthFull ? "w-[100%]" : "w-[80vw] md:w-[40vw]"
        }`}
      >
        <div className="flex flex-col px-[20px] w-full  md:w-[343px] justify-between my-4 z-20">
          {index && (
            <p className="font-mont font-bold text-2xl text-white text-opacity-30">
              {` ${textIndex} ${index}`}
            </p>
          )}
          <div className="flex flex-col">
            <h1
              className={`font-mont text-white text-${sizeTitle} leading-${leadingTitle} pb-2 ${
                textIndex == "NEWS" ? "font-bold" : ""
              }`}
            >
              {title}
            </h1>
            {date && (
              <p
                className={`font-open text-white italic  leading-[25px] pb-4  ${
                  textIndex == "NEWS"
                    ? "font-light text-[17px]"
                    : " font-bold text-[21px]"
                }`}
              >
                {date}
              </p>
            )}
            {fromDate && toDate && (
              <p
                className={`font-open text-white italic text-[21px] leading-[25px] pb-4   ${
                  textIndex == "NEWS"
                    ? "font-light text-[17px]"
                    : " font-bold text-[21px]"
                }`}
              >
                {`${fromDate} - ${toDate}`}
              </p>
            )}
            <div className="font-open text-lightGreen italic text-[15px] leading-[22px] ml-auto">
              Read more →
            </div>{" "}
          </div>
        </div>

        <Image
          src={imageHeader}
          width={343}
          height={360}
          alt="Header Image"
          className="absolute rounded-[10px] w-full h-[260px] md:h-[420px] object-cover"
        />
        <div className="absolute inset-0 gradient_News rounded-[10px] z-10 shadow-card"></div>
      </div>
    </Link>
  );
};

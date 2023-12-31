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
      className={`flex flex-col snap-center flex-shrink-0 ${
        widthFull ? " mx-5 md:mx-0" : " mx-2"
      }`}
      href={linkToCard}
    >
      <div
        className={`relative flex rounded-[10px] h-[260px] lg:h-[320px] shadow-card group overflow-hidden  ${
          widthFull ? "w-[100%]" : "w-[80vw] md:w-[40vw] lg:w-[430px]"
        }`}
      >
        <div className='flex flex-col px-[20px] w-full justify-between my-4 z-20'>
          {index && (
            <p className='font-mont font-bold text-2xl text-white text-opacity-80'>
              {` ${textIndex} `}
            </p>
          )}
          <div className='flex flex-col'>
            <h1
              className={`font-mont text-white text-${sizeTitle} leading-${leadingTitle} pb-2 ${
                textIndex == "NEWS" ? "font-bold" : ""
              }`}
            >
              {title}
            </h1>
            {date && (
              <p
                className={`font-open text-white italic leading-[25px] pb-4  ${
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
            <div className='font-open text-lightGreen italic text-[15px] leading-[22px] ml-auto'>
              Read more →
            </div>
          </div>
        </div>

        <Image
          src={imageHeader}
          width={343}
          height={360}
          alt='Header Image'
          className='absolute rounded-[10px] w-full h-[260px] lg:h-[320px] object-cover group-hover:scale-110  transition'
        />
        <div className='absolute inset-0 gradient_News rounded-[10px]  z-10 '></div>
      </div>
    </Link>
  );
};

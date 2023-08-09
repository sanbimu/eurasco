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
      className={`flex flex-col md:mx-[25vw] snap-center flex-shrink-0 ${
        widthFull ? " mx-4" : " mx-2"
      }`}
      href={linkToCard}
    >
      <div
        className={`relative flex rounded-[10px] h-[400px] shadow-card w-[80vw] ${
          widthFull ? "w-[100%]" : "w-[80vw]"
        }`}
      >
        <div className='flex flex-col px-[20px] w-full  md:w-[343px] justify-end mb-5 z-20'>
          {index && (
            <p className='font-mont font-bold text-2xl text-white text-opacity-30'>
              {` ${textIndex} ${index}`}
            </p>
          )}
          <h1
            className={`font-mont text-white font-bold text-${sizeTitle} leading-${leadingTitle} pb-1 `}
          >
            {title}
          </h1>
          {date && (
            <p className='font-open text-white italic text-[13px] leading-[25px] pb-5'>
              {date}
            </p>
          )}
          {fromDate && toDate && (
            <p className='font-open text-white italic text-[13px] leading-[25px] pb-5'>
              {`${fromDate} - ${toDate}`}
            </p>
          )}
          <div className='font-open text-lightGreen italic text-[15px] leading-[22px] ml-auto'>
            Read more →
          </div>
        </div>

        <Image
          src={imageHeader}
          width={343}
          height={360}
          alt='Header Image'
          className='absolute rounded-[10px] w-full h-[400px] object-cover'
        />
        <div className='absolute inset-0 gradient_News rounded-[10px] z-10 shadow-card'></div>
      </div>
    </Link>
  );
};

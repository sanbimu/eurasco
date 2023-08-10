import Image from "next/image";
import Link from "next/link";

export const MemberCard = ({
  linkToCard,
  member,
  country,
  backgroundImage,
  logo,
  widthFull,
}) => {
  return (
    <Link
      className={`flex flex-col mx-2 md:mx-[25vw]  snap-center flex-shrink-0 ${
        widthFull ? " mx-5" : " mx-2"
      }`}
      href={linkToCard}
    >
      <div
        className={`relative flex flex-col rounded-[10px] h-[380px]  shadow-card ${
          widthFull ? "w-[100%]" : "w-[80vw]"
        }`}
      >
        <div className='relative flex items-center justify-center h-[560px]'>
          <Image
            src={logo}
            width={295}
            height={66}
            alt='Member logo Logo'
            className='z-20 max-w-[295px] max-h-[150px] object-contain '
          />
        </div>
        <div className='absolute inset-0 gradient_Membres rounded-[10px] z-10 shadow-card' />
        <div className='flex flex-col justify-end gap-2 z-20 w-full  rounded-bl-[10px] px-6 pb-4 pt-6'>
          <h2 className='font-open font-bold text-[30px] leading-8 text-white'>
            {member}
          </h2>
          <h2 className='font-open font-light text-[30px] leading-6 text-white'>
            {country}
          </h2>
          <div className='font-open italic text-[15px] leading-[25px] text-white ml-auto'>
            Read more →
          </div>
        </div>
        <Image
          src={backgroundImage}
          width={343}
          height={450}
          alt='Member Image'
          className='absolute rounded-[10px] w-full min-h-[380px] object-cover'
        />
      </div>
    </Link>
  );
};

{
  /* <Image
src={logo}
width={295}
height={66}
alt="Member logo Logo"
className="absolute top-1/3 left-[10%] z-20 max-w-[295px] max-h-[200px]"
/> */
}

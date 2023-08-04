import Image from "next/image";
import Link from "next/link";

export const MemberCard = ({
  linkToCard,
  member,
  country,
  backgroundImage,
  logo,
}) => {
  return (
    <Link className="flex flex-col mx-6 md:mx-[25vw]" href={linkToCard}>
      <div className="relative flex flex-col rounded-[10px] h-[560px] w-full shadow-card">
        <div className="relative flex items-center justify-center h-[560px]">
          <Image
            src={logo}
            width={295}
            height={66}
            alt="Member logo Logo"
            className="z-20 max-w-[295px] max-h-[200px]"
          />
        </div>

        <div className="flex flex-col justify-end gap-2 z-20 w-full bg-gradient-to-br from-emerald rounded-bl-[10px] px-6 pb-4 pt-6">
          <h2 className="font-open font-bold text-[30px] leading-8 text-white">
            {member}
          </h2>
          <h2 className="font-open font-light text-[30px] leading-6 text-white">
            {country}
          </h2>
          <div className="font-open italic text-[15px] leading-[25px] text-white ml-auto">
            Lire plus →
          </div>
        </div>
        <Image
          src={backgroundImage}
          width={343}
          height={560}
          alt="Member Image"
          className="absolute rounded-[10px] w-full min-h-[560px] object-cover"
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

import Image from "next/image";
import Link from "next/link";

export const MemberCard = () => {
  return (
    <div className="flex flex-col relative mx-[25px] h-[560px] justify-center rounded-[10px] overflow-hidden">
      <Image
        src="/images/memberMobile.jpg"
        width={343}
        height={560}
        alt="Member Image"
        className="absolute shadow-card h-full"
      />

      <div className="flex flex-col absolute px-[25px]">
        <Image
          src="/images/agromek.svg"
          width={295}
          height={66}
          alt="Agromek Logo"
          className="flex"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[230px] h-[150px] bg-gradient-to-br from-emerald rounded-tl-[10px]">
        <Link className="flex flex-col p-6" href="/membres">
          <h2 className="font-open font-bold text-[30px] leading-6 text-white">
            AGROMEK
          </h2>
          <h2 className="font-open font-light text-[30px] leading-6 text-white pt-2">
            DENMARK
          </h2>
          <Link
            className="font-open italic text-[15px] leading-[25px] text-white pt-4"
            href="/membres"
          >
            Lire plus →
          </Link>
        </Link>
      </div>
    </div>
  );
};

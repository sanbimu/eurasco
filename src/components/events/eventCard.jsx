import Image from "next/image";
import Link from "next/link";

export const EventCard = () => {
  return (
    <div className="flex flex-col mx-[25px] h-[232px]">
      <div className="relative rounded-[10px] shadow-card ">
        <Image
          src="/images/eventMobile.jpg"
          width={393}
          height={281}
          alt="Event Image"
          className="flex rounded-[10px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-[10px] shadow-card"></div>
      </div>

      <div className="flex flex-col px-[25px] items-start pt-8 absolute">
        <p className="font-mont text-lightGrey font-bold text-[25px] leading-9 pb-4">
          01
        </p>
        <h1 className="font-mont text-white font-bold text-xl leading-6 pb-2">
          Événement 1
        </h1>
        <p className="font-open text-white italic text-[15px] leading-[22px] pb-4">
          Salad ahead is picking low moisture vegetables.
        </p>
        <Link
          className="font-open text-lightGreen italic text-[15px] leading-[22px]"
          href="/evenements"
        >
          Lire plus →
        </Link>
      </div>
    </div>
  );
};

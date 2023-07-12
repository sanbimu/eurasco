import Image from "next/image";
import Button from "../shared/button";
import { useRouter } from "next/router";

export const NewsCard = () => {
  const router = useRouter();
  const handleNews = () => {
    router.push("/actualites");
  };
  return (
    <div className="flex flex-col px-[25px] h-[560px]">
      <div className="relative rounded-[10px] shadow-card ">
        <Image
          src="/images/newsMobile.jpg"
          width={343}
          height={560}
          alt="News Image"
          className="flex rounded-[10px]"
        />
        <div className="absolute inset-0 bg-black bg-opacity-25 rounded-[10px] shadow-card"></div>
      </div>

      <div className="flex flex-col px-[35px] items-start absolute mt-[360px]">
        <h1 className="font-mont text-white font-bold text-xl leading-6 pb-3 ">
          ACTUALITÉ 1
        </h1>
        <p className="font-open text-white text-[15px] leading-[25px] pb-5">
          Organic livestock raised for meat, eggs, and dairy products must be
          raised in living conditions.
        </p>
        <Button text="voir" onClick={handleNews}></Button>
      </div>
    </div>
  );
};

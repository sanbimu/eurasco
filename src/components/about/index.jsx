import Image from "next/image";

export const About = () => {
  return (
    <div className="flex">
      <div className="flex flex-col pt-14 font-open px-[25px] text-black">
        <h2 className="uppercase font-bold leading-[70px] text-6xl font-mont text-yellow">
          A propos
        </h2>
        <h1 className="uppercase font-mont font-bold leading-[42px] text-4xl">
          Eurasco
        </h1>
        <p className="text-[15px] leading-6 pt-[50px]">
          Our objective is to improve and promote European agricultural
          exhibitions, fairs and shows through the exchange of information,
          ideas and experience, reciprocal advice, liaison and mutual
          assistance.
        </p>
        <p className="text-[15px] leading-6 pt-8 pb-8">
          People at Farmey are helping farmers to emerging markets maximize
          their profits. We use agronomic.
        </p>
        <div className="flex flex-row gap-2">
          <Image src="/icons/shield.svg" alt="shield" width={50} height={50} />
          <div className="flex flex-col">
            <p className="font-bold text-lg leading-6">We are Passionate</p>
            <p className="italic text-[13px] leading-6">
              Latest analysis by the Cadre Harmonisé.
            </p>
          </div>
        </div>
        <div className="flex flex-row pt-8 pb-[100px] gap-2">
          <Image src="/icons/wheat.svg" alt="shield" width={43} height={50} />
          <div className="flex flex-col">
            <p className="font-bold text-lg leading-6">Industry Oriented</p>
            <p className="italic text-[13px] leading-6">
              Enabling Ecosystem for Food and Agriculture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

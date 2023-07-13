import Image from "next/image";

export const About = () => {
  return (
    <div className="flex lg:pb-40 md:px-[70px] lg:px-[150px]">
      <div className="flex flex-col lg:flex lg:flex-row justify-between">
        <div className="flex flex-col pt-14 font-open px-[25px] md:px-0 lg:w-[50%] text-black">
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
          <p className="text-[15px] leading-6 pt-8 pb-8 lg:pb-3">
            People at Farmey are helping farmers to emerging markets maximize
            their profits. We use agronomic.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-6">
            <div className="flex flex-row lg:flex-col gap-2 md:items-center lg:items-start lg:w-[30%]">
              <Image
                src="/icons/shield.svg"
                alt="shield"
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <p className="font-bold text-lg leading-6">We are Passionate</p>
                <p className="italic text-[13px] leading-6 ">
                  Latest analysis by the Cadre Harmonisé.
                </p>
              </div>
            </div>
            <div className="flex flex-row lg:flex-col gap-2 pt-8 pb-[100px] md:pb-8 lg:pb-[36px] md:items-center lg:items-start lg:w-[30%] ">
              <Image
                src="/icons/wheat.svg"
                alt="shield"
                width={43}
                height={50}
              />
              <div className="flex flex-col">
                <p className="font-bold text-lg leading-6">Industry Oriented</p>
                <p className="italic text-[13px] leading-6">
                  Enabling Ecosystem for Food and Agriculture.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex relative">
          <Image
            src="/images/aboutDesktop.jpg"
            width={579}
            height={759}
            alt="About Image"
            className="rounded-[10px] h-[630px] w-auto mt-[-70px]"
          />
          <div className=" h-[250px] w-[267px] bg-lightGreen rounded-[10px] p-[10px] absolute left-[25px] top-[280px]">
            <div className="border border-dashed border-white py-3 px-3">
              <Image
                src="/icons/medal.svg"
                width={50}
                height={50}
                alt="Medal"
                className="pt-1"
              />
              <p className="font-mont text-[18px] text-white font-bold leading-6 py-4">
                Our Values
              </p>
              <p className="font-open text-[14px] text-white leading-6 ">
                Continuously realize profitability and growth objectives through
                the manufacture and distribution of fertilizer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

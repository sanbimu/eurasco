export const Hero = () => {
  return (
    <>
      <div className="flex md:bg-heroDesktop md:bg-right-top bg-heroMobile h-screen">
        <div className="flex flex-col self-center font-open px-[13px] text-white">
          <h2 className="uppercase font-semibold tracking-[10px] text-sm md:text-base text-yellow">
            A PROFESSION OF HOPE
          </h2>
          <h1 className="uppercase font-mont font-bold leading-[70px] text-5xl lg:text-6xl">
            THE PURE NATURALLY HEALING
          </h1>
          <p className="text-lg leading-8 py-6">
            Growing community by inspiring healthy is our commitment with
            farmers, the abundant living on the field
          </p>
          <button className="uppercase border-2 border-lightGreen rounded-[3px] px-8 py-2 self-start font-semibold tracking-[2px] text-[15px]">
            Learn More
          </button>
        </div>
      </div>
    </>
  );
};

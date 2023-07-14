export const Title = ({ title, subtitle, text }) => {
  return (
    <div className="flex flex-col pb-8 items-center">
      <div className="relative z-[60]">
        <h1 className="font-mont font-bold text-[40px] lg:text-[60px] leading-[42px] text-yellow uppercase text-center">
          {title}
        </h1>
        <h2 className="font-mont font-bold text-[22px] lg:text-[25px] leading-[35px] text-black uppercase absolute top-[22px] left-0 right-0 text-center">
          {subtitle}
        </h2>
        <p className="pt-6 pb-6 font-open text-[15px] leading-[25px] text-black text-center">
          {text}
        </p>
      </div>
    </div>
  );
};

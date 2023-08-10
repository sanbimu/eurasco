export const Title = ({ title, subtitle, text }) => {
  return (
    <div className="flex flex-col pb-5 pt-[70px] items-center px-4">
      {title && (
        <h1 className="font-mont font-bold text-[40px] lg:text-[60px] leading-[42px] text-yellow uppercase text-center">
          {title}
        </h1>
      )}
      {subtitle && (
        <h2 className="font-mont font-bold text-[22px] lg:text-[25px] leading-[35px] text-black uppercase -mt-5 text-center">
          {subtitle}
        </h2>
      )}
      {text && (
        <p className="pt-6 pb-6 font-open text-[15px] leading-[25px] text-black text-center">
          {text}
        </p>
      )}
    </div>
  );
};

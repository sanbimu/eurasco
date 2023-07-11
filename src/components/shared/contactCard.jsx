export const ContactCard = () => {
  return (
    <div className="flex px-[25px] bg-contact min-h-[280px]">
      <div className="flex flex-col items-center relative z-[60]">
        <h1 className="font-mont font-bold text-[40px] leading-[42px] text-yellow uppercase text-center">
          Contact
        </h1>
        <h2 className="font-mont font-bold text-[22px] leading-[35px] text-black uppercase absolute top-[22px] left-0 right-0 text-center">
          Restons connectés
        </h2>
        <p className="pt-6 pb-[28px] font-open text-[15px] leading-[25px] text-black text-center">
          We will be the leading company in the national market with each of our
          products.
        </p>
        <button className="uppercase text-white font-open font-semibold text-[20px] tracking-[1px] bg-lightGreen rounded-[10px] py-4 w-full">
          send message
        </button>
      </div>
    </div>
  );
};

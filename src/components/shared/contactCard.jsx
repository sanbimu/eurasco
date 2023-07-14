import Image from "next/image";
import { useRouter } from "next/router";

export const ContactCard = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <div className="flex flex-col h-[281px] md:items-center md:h-[18vh] lg:h-[30vh]">
      {isHomePage ? (
        <Image
          src="/images/contactMobile.jpg"
          width={393}
          height={281}
          alt="Hero Image"
          className="flex md:hidden"
        />
      ) : (
        ""
      )}
      <div className="flex flex-col px-[25px] items-center absolute">
        <h1 className="font-mont font-bold text-[40px] lg:text-[60px] leading-[42px] text-yellow uppercase text-center">
          Contact
        </h1>
        <h2 className="font-mont font-bold text-[22px] lg:text-[25px] leading-[35px] text-black uppercase absolute top-[22px] left-0 right-0 text-center">
          Restons connectés
        </h2>
        <p className="pt-6 pb-[28px] font-open text-[15px] leading-[25px] text-black text-center">
          We will be the leading company in the national market with each of our
          products.
        </p>
        <button className="uppercase text-white font-open font-semibold text-[20px] md:text-sm tracking-[1px] bg-lightGreen rounded-[10px] py-4 md:py-2 w-full md:w-[200px] lg:w-[170px]">
          send message
        </button>
      </div>
    </div>
  );
};

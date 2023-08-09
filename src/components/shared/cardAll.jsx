import Image from "next/image";
import Button from "./button";

export const CardAll = ({ title, buttonText, linkTo }) => {
  return (
    <div className='flex flex-col mx-5 w-full md:mx-[25vw] lg:w-[35vw] lg:h-[516px] lg:pb-0'>
      <div className='h-[232px] w-full lg:h-[516px] bg-white shadow-card rounded-[10px] relative'>
        <div className='flex flex-col px-4 lg:px-8 items-start justify-center pt-8 lg:pt-48 z-20 relative'>
          <h1 className='font-mont font-bold text-[38px] md:pr-24 lg:text-[35px] lg:w-[40%] leading-[42px] text-black pb-12'>
            {title}
          </h1>
          <Button buttonText={buttonText} className='pb-1' linkTo={linkTo} />
        </div>
        <div className='absolute top-0 left-0 h-full w-full rounded-[10px] overflow-hidden'>
          <Image
            src='/images/cardAll.jpg'
            alt='Card Image'
            layout='fill'
            objectFit='cover'
            className='opacity-85'
          />
        </div>
      </div>
    </div>
  );
};

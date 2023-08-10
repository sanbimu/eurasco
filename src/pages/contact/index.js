import { ContactCard } from "@/components/shared/contactCard";
import Image from "next/image";

export default function Contact() {
  return (
    <main>
      <div className='flex flex-col lg:flex-row h-screen md:h-auto items-center lg:justify-between w-screen mx-auto'>
        <Image
          src='/images/contactPageMobile.jpg'
          width={514}
          height={750}
          alt='Contact Page Image'
          className='flex md:hidden relative h-[600px] w-auto'
        />
        <Image
          src='/images/contactPageDesktopC.jpg'
          width={960}
          height={600}
          alt='Contact Page Image'
          className='md:flex hidden relative lg:h-[70vh] lg:ml-12 mt-20 md:[80vw] lg:w-[50vw]'
        />
        <div className='hidden md:flex md:mt-16 lg:mt-48 lg:ml-[23%] items-center lg:h-[70vh] lg:w-[70vw]'>
          <ContactCard />
        </div>
        <div className='md:hidden absolute h-[370px] w-full bottom-0 bg-white rounded-t-[20px]'>
          <div className='mt-20 md:hidden'>
            <ContactCard />
          </div>
        </div>
      </div>
    </main>
  );
}

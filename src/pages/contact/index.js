import { ContactCard } from "@/components/shared/contactCard";
import Image from "next/image";
import { createClient } from "../../prismicio";

export default function Contact({ homePage }) {
  return (
    <main>
      <div className='flex flex-col lg:flex-row  md:h-auto items-center lg:justify-between w-screen mx-auto  relative'>
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
          height={500}
          alt='Contact Page Image'
          className='md:flex hidden relative lg:h-screen object-cover  lg:w-[50vw]'
        />
        <div className='hidden md:flex md:mt-16 lg:mt-48 lg:ml-[23%] items-center lg:h-[70vh] lg:w-[70vw] z-50'>
          <ContactCard slice={homePage.data.slices[5]} />
        </div>
        <div className='md:hidden absolute h-fit w-full bottom-0 bg-white rounded-t-[20px] '>
          <div className='mt-20 md:hidden'>
            <ContactCard slice={homePage.data.slices[5]} />
          </div>
        </div>
      </div>
    </main>
  );
}
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const homePage = await client.getByUID("home", "home");

  return {
    props: {
      homePage,
    },
  };
}

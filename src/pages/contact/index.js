import { ContactCard } from "@/components/shared/contactCard";
import Image from "next/image";
import { createClient } from "../../prismicio";
import { Title } from "@/components/shared/title";
import { ButtonInfo } from "@/components/shared/buttonInfo";

export default function Contact({ homePage }) {
  return (
    <main>
      <div className='flex flex-col lg:flex-row   md:h-auto items-center lg:justify-between w-screen mx-auto  relative'>
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

        <div className='hidden md:flex md:flex-col md:mt-16 lg:mt-48 justify-center items-center lg:h-[70vh] lg:w-[70vw] z-50'>
          {/* INFO PRATIQUE */}
          <div className='flex flex-col lg:mx-32 md:mt-12 mb-10'>
            <div className=''>
              <Title title='INFO' subtitle='PRACTICAL INFORMATION' />
            </div>{" "}
            <div
              className={`flex flex-row  px-6 font-mont font-medium text-darkGreen justify-center   `}
            >
              {"Eurasco AISBL"}
            </div>
            <div
              className={`flex flex-row  px-6 font-mont font-medium text-darkGreen justify-center   `}
            >
              {"Frédérique François"}
            </div>{" "}
            <div
              className={`flex flex-row  px-6 font-mont font-medium text-darkGreen justify-center   `}
            >
              {"numéro: 0565786"}
            </div>
          </div>
          <ContactCard slice={homePage.data.slices[5]} />
        </div>
        <div className='md:hidden -mt-80 z-50 h-fit w-full bottom-0 top-96 bg-white rounded-t-[20px] '>
          {/* INFO PRATIQUE */}
          <div className='flex flex-col lg:mx-32 mt-5 md:mt-12 mb-10'>
            <div className=''>
              <Title title='INFO' subtitle='PRACTICAL INFORMATION' />
            </div>{" "}
            <div
              className={`flex flex-row  px-6 font-mont font-medium text-darkGreen justify-center   `}
            >
              {"Eurasco AISBL"}
            </div>
            <div
              className={`flex flex-row  px-6 font-mont font-medium text-darkGreen justify-center   `}
            >
              {"Blvd Auguste Reyers 207, 1030 Bruxelles"}
            </div>
            <div
              className={`flex flex-row  px-6 font-mont font-medium text-darkGreen justify-center   `}
            >
              {"Frédérique François"}
            </div>{" "}
            <div
              className={`flex flex-row  px-6 font-mont font-medium text-darkGreen justify-center   `}
            >
              {"numéro: 0565786"}
            </div>
          </div>
          <div className='-mt-10 md:hidden'>
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

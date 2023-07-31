import { ContactCard } from "@/components/shared/contactCard";
import Image from "next/image";

export default function Contact() {
  return (
    <main>
      <div className="flex flex-col lg:flex-row h-screen items-center w-screen">
        <Image
          src="/images/contactPageMobile.jpg"
          width={514}
          height={750}
          alt="Contact Page Image"
          className="flex md:hidden relative h-[600px] w-auto"
        />
        <Image
          src="/images/contactPageDesktop.jpg"
          width={960}
          height={600}
          alt="Contact Page Image"
          className="md:flex hidden relative h-[70vh] ml-12 mt-20 w-[50vw]"
        />
        <div className="hidden md:flex mt-24 ml-[25%]">
          <ContactCard />
        </div>
        <div className="md:hidden absolute h-[370px] w-full bottom-0 bg-white rounded-t-[20px]">
          <div className="mt-20 md:hidden">
            <ContactCard />
          </div>
        </div>
      </div>
    </main>
  );
}

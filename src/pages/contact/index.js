import { ContactCard } from "@/components/shared/contactCard";
import Image from "next/image";

export default function Contact() {
  return (
    <main>
      <div className="flex flex-col h-screen w-full">
        <Image
          src="/images/contactPageMobile.jpg"
          width={514}
          height={750}
          alt="Contact Page Image"
          className="flex md:hidden relative h-[600px] w-auto"
        />
        <div className="absolute h-[370px] w-full bottom-0 bg-white rounded-t-[20px]">
          <div className="mt-20">
            <ContactCard />
          </div>
        </div>
      </div>
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import Socials from "../socials";

export default function FooterDesktop() {
  return (
    <div className="hidden lg:flex w-full bottom-0 bg-darkGreen pt-8 m-auto px-6">
      <div className="flex flex-col pl-44 pr-48">
        <div className="flex flex-row">
          <div className="flex flex-col w-[50%]">
            <Image
              src="/icons/logoWhite.svg"
              alt="Eurasco Logo"
              width={160}
              height={100}
            />
            <p className="font-open leading-6 text-sm text-lightGrey pl-6 pr-8 pb-7 2xl:text-lg">
              We are an efficient, competitive, innovative and entrepreneurial
              agricultural sector, which serves providing the population with a
              source of food generating opportunities for the Farmers.
            </p>
            <div className="flex flex-row gap-4 pl-6">
              <Socials src="/icons/linkedin.svg" alt="linkedin" />
            </div>
          </div>

          <div className="flex flex-col w-[23%] pt-8 pl-4">
            <div className="flex flex-col items-start font-open leading-7 text-sm text-lightGrey 2xl:text-lg">
              <h1 className="text-white font-bold text-xl leading-6 pb-6  ">
                Quick links
              </h1>
              <Link href="/">Home</Link>
              <Link href="/events">Our events</Link>
              <Link href="/news">Latest news</Link>
              <Link href="/members">Our members</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col w-[27%] items-start font-open leading-6 text-sm text-lightGrey pr-10 pt-2 2xl:text-lg">
            <h1 className="text-white font-bold text-xl leading-6 py-6">
              Newsletter
            </h1>
            <p className="pb-8">
              Subscribe to our newsletter to receive the latest news about our
              services.
            </p>
            <form className="flex flew-row justify-between h-[38px] rounded-r-[15px] font-mont text-xs w-full bg-white pl-3 2xl:text-lg">
              <input
                type="text"
                className=" bg-white  border-none "
                placeholder="Your email address"
              ></input>
              <button
                className=" bg-lightGreen w-[30%] rounded-r-[5px] text-white"
                type="submit"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>

        <div className="hidden lg:flex h-[1px] w-[95%] self-center bg-darkGrey bg-opacity-60 mt-10"></div>

        <div className="flex justify-center">
          <p className="pt-8 pb-8 font-open text-white text-[13px] 2xl:text-lg">
            © 2023 Eurasco made with love by Listri
          </p>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import Socials from "../socials";

const FooterDesktop = ({ current }) => {
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
            <p className="font-open leading-6 text-sm text-lightGrey pl-6 pr-8 pb-7">
              We are an efficient, competitive, innovative and entrepreneurial
              agricultural sector, which serves providing the population with a
              source of food generating opportunities for the Farmers.
            </p>
            <div className="flex flex-row gap-4 pl-6">
              <Socials src="/icons/facebook.svg" alt="Facebook" />
              <Socials src="/icons/twitter.svg" alt="Twitter" />
              <Socials src="/icons/instagram.svg" alt="Instagram" />
              <Socials src="/icons/youtube.svg" alt="Youtube" />
            </div>
          </div>

          <div className="flex flex-col w-[23%] pt-8 pl-4">
            <div className="flex flex-col items-start font-open leading-7 text-sm text-lightGrey">
              <h1 className="text-white font-bold text-xl leading-6 pb-6 ">
                Quick links
              </h1>
              <Link href="/">Acceuil</Link>
              <Link href="/evenements">Nos événements</Link>
              <Link href="/actualites">Nos actualités</Link>
              <Link href="/membres">Nos membres</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>

          <div className="flex flex-col w-[27%] items-start font-open leading-6 text-sm text-lightGrey pr-10 pt-2">
            <h1 className="text-white font-bold text-xl leading-6 py-6">
              Newsletter
            </h1>
            <p className="pb-8">
              Subscribe to our newsletter to receive the latest news about our
              services.
            </p>
            <form className="flex flew-row justify-between h-[38px] rounded-r-[15px] font-mont text-xs w-full bg-white pl-3">
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
          <p className="pt-8 pb-8 font-open text-white text-[13px]">
            © 2023 Eurasco made with love by Listri
          </p>
        </div>
      </div>
    </div>
  );
};
export default FooterDesktop;

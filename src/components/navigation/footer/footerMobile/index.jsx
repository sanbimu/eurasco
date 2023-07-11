import Image from "next/image";
import Link from "next/link";
import Socials from "../socials";

const FooterMobile = ({ current }) => {
  return (
    <div className="flex flex-col lg:hidden w-full bottom-0 bg-darkGreen pt-8 m-auto md:px-40 px-6">
      <Image
        src="/icons/logoWhite.svg"
        alt="Eurasco Logo"
        width={170}
        height={100}
        className="self-center pb-10"
      />
      <div className="flex flex-row justify-between">
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
        <div className="flex flex-col gap-2 ">
          <Socials src="/icons/facebook.svg" alt="Facebook" />
          <Socials src="/icons/twitter.svg" alt="Twitter" />
          <Socials src="/icons/instagram.svg" alt="Instagram" />
          <Socials src="/icons/youtube.svg" alt="Youtube" />
        </div>
      </div>
      <div className="flex flex-col items-start font-open leading-7 text-sm text-lightGrey">
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

      <div className="flex justify-center">
        <p className="pt-8 pb-10 font-open text-white text-sm ">
          © 2023 Eurasco made with love by Listri
        </p>
      </div>
    </div>
  );
};
export default FooterMobile;

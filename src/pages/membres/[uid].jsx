import * as prismic from "@prismicio/client";
import { createClient } from "../../prismicio";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import SectionTitle from "@/slices/SectionTitle";
import { CardAll } from "@/components/shared/cardAll";
import Link from "next/link";
import { ButtonInfo } from "@/components/shared/buttonInfo";

export default function MemberPage({ memberPage, cartesMembres, homePage }) {
  console.log("memberPage", memberPage);
  console.log("cartesMembre", cartesMembres);
  console.log("homePage", homePage);

  const currentPageUID = memberPage.uid;
  const currentPageIndex = cartesMembres.findIndex(
    (member) => member.uid === currentPageUID
  );
  let randomIndex = Math.floor(Math.random() * cartesMembres.length);
  if (randomIndex === currentPageIndex) {
    randomIndex = (currentPageIndex + 1) % cartesMembres.length;
  }
  const randomMemberToShow = cartesMembres[randomIndex];

  return (
    <>
      {/* HEADER */}
      <div className="min-h-[75vh] flex flex-col w-screen justify-center">
        <Image
          src={memberPage.data.logo.url}
          width={295}
          height={66}
          alt="Member Logo"
          className="z-20 max-w-[295px] max-h-[200px] mx-auto"
        />
        <Image
          src={memberPage.data.imageHeader.url}
          width={394}
          height={850}
          alt="Member Image"
          className="min-h-[75vh] absolute object-cover lg:max-h-[75vh] md:w-full"
        />
      </div>
      <div className="mb-12"></div>

      {/* CONTENT */}
      <div className="flex flex-col font-open leading-6 mx-6 md:px-0 lg:w-[50%] text-black">
        <h2 className="uppercase font-bold leading-[70px] text-5xl md:text-6xl font-mont text-yellow">
          A PROPOS
        </h2>
        <h1 className="uppercase font-mont font-bold leading-10 text-4xl pb-12">
          {memberPage.data.name}
        </h1>
        <PrismicRichText field={memberPage.data.description} />
      </div>
      <div className="flex flex-col gap-6">
        <ButtonInfo
          paddingTB="2"
          marginTB="12"
          linkTo={memberPage.data.website.url}
          icon="/icons/website.svg"
          iconHeight="[55px]"
          fontSize="[17px]"
          text="VOIR LE SITE WEB"
        />

        <ButtonInfo
          paddingTB="4"
          marginTB="0"
          linkTo={`mailto:${memberPage.data.email}}`}
          icon="/icons/mail.svg"
          iconHeight="[40px]"
          fontSize="[15px]"
          text={memberPage.data.email}
        />

        <ButtonInfo
          paddingTB="4"
          marginTB="0"
          linkTo={`tel:${memberPage.data.phone}}`}
          icon="/icons/phone.svg"
          iconHeight="[40px]"
          fontSize="[15px]"
          text={memberPage.data.phone}
        />
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const client = createClient();

  const memberPages = await client.getAllByType("member");

  return {
    paths: memberPages.map((memberPage) => prismic.asLink(memberPage)),
    fallback: true,
  };
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const memberPage = await client.getByUID("member", params.uid);
  const homePage = await client.getByUID("home", "home");
  const cartesMembres = await client.getAllByType("member", {
    orderings: [{ field: "my.member.name" }],
  });

  return {
    props: { memberPage, cartesMembres, homePage },
  };
}

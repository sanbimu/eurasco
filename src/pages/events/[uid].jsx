import * as prismic from "@prismicio/client";
import { createClient } from "../../prismicio";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import SectionTitle from "@/slices/SectionTitle";
import { CardAll } from "@/components/shared/cardAll";
import { ButtonInfo } from "@/components/shared/buttonInfo";
import { Title } from "@/components/shared/title";
import { MemberCard } from "@/components/members/memberCard";
import { EventNewsCard } from "@/components/shared/eventNewsCard";
import { formatDateEvents } from "@/components/utils";
import Link from "next/link";

export default function EventPage({ eventPage, homePage, members }) {
  console.log("eventPage", eventPage);
  console.log("homePage", homePage);
  console.log("members", members);

  const matchingMember = members.find((member) => {
    return member.url === eventPage.data.member.url;
  });

  const matchingMemberTwo = members.find((member) => {
    return member.url === eventPage.data.memberTwo.url;
  });

  const matchingMemberThree = members.find((member) => {
    return member.url === eventPage.data.memberThree.url;
  });

  return (
    <>
      {/* HEADER */}
      <div className="min-h-[75vh] flex flex-col relative w-screen justify-center">
        <Image
          src={eventPage.data.imageHeader.url}
          width={394}
          height={850}
          alt="Member Image"
          className="min-h-[75vh] absolute object-cover lg:max-h-[75vh] md:w-screen"
        />
        <div className="absolute inset-0 gradient_Event z-10"></div>
        <div className="flex flex-col items-start justify-end min-h-[75vh] p-[25px] gap-4 md:gap-10 z-20">
          <div className="font-mont font-bold text-3xl md:text-6xl leading-8 text-white md:mx-20 ">
            {eventPage.data.name}
          </div>
          <div className="font-mont font-semibold text-opacity-60 text-xl md:text-3xl leading-6 text-white md:mx-20 md:pb-10">
            {`${formatDateEvents(
              eventPage.data.startDate
            )} - ${formatDateEvents(eventPage.data.endDate)}`}
          </div>
        </div>
      </div>
      <div className="mb-12"></div>

      {/* CONTENT */}
      <div className="flex flex-col font-open leading-6 md:px-0 lg:w-[50%] text-black pb-6">
        <div className="font-mont font-bold text-lg md:text-xl leading-6 mx-5 md:mx-20 ">
          Organised by:&nbsp;
          <Link href={eventPage.data.member.url}>
            {matchingMember.data.name}
          </Link>
          {matchingMemberTwo && (
            <>
              ,&nbsp;
              <Link
                href={eventPage.data.member.url}
                className="font-mont font-bold text-lg leading-6"
              >
                {matchingMemberTwo.data.name}
              </Link>
            </>
          )}
          {matchingMemberThree && (
            <>
              ,&nbsp;
              <Link
                href={eventPage.data.member.url}
                className="font-mont font-bold text-lg leading-6"
              >
                {matchingMemberThree.data.name}
              </Link>
            </>
          )}
        </div>
        <div className="flex min-h-[25vh] md:min-h-[15vh] w-[90vw] md:w-[40vw] mx-auto my-2 relative overflow-hidden">
          <Image
            src={eventPage.data.logo.url}
            fill={true}
            alt="Event Image"
            className="object-contain "
          />
        </div>
        <div className="font-open leading-[25px] mx-5 md:mx-20 text-justify md:text-xl">
          <PrismicRichText field={eventPage.data.description} />
        </div>
        <div className="flex min-h-[25vh] w-full relative overflow-hidden mt-12">
          <Image
            src={eventPage.data.imageEvent.url}
            fill={true}
            alt="Event Image"
            className="object-cover w-full h-full object-left"
          />
        </div>
      </div>
      {/* INFO & BUTTONS */}
      <div className="flex flex-col gap-6 my-6 ">
        <ButtonInfo
          paddingTB="2"
          marginTB="0"
          linkTo={eventPage.data.website.url}
          icon="/icons/website.svg"
          iconHeight="[55px]"
          fontSize="[17px]"
          text="GO TO WEBSITE"
        />
        <ButtonInfo
          paddingTB="4"
          marginTB="0"
          linkTo={`http://maps.google.com/?q=${eventPage.data.city}`}
          icon="/icons/address.svg"
          iconHeight="[40px]"
          fontSize="[15px]"
          text={`${eventPage.data.city}, ${eventPage.data.country}`}
        />
        <ButtonInfo
          paddingTB="4"
          marginTB="0"
          linkTo={`mailto:${eventPage.data.mail}`}
          icon="/icons/mail.svg"
          iconHeight="[40px]"
          fontSize="[15px]"
          text={eventPage.data.mail}
        />
        <ButtonInfo
          paddingTB="4"
          marginTB="0"
          linkTo={`tel:${eventPage.data.phone}`}
          icon="/icons/phone.svg"
          iconHeight="[40px]"
          fontSize="[15px]"
          text={eventPage.data.phone}
        />
        <div className="mb-4"></div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const client = createClient();

  const eventPages = await client.getAllByType("event");

  return {
    paths: eventPages.map((eventPage) => prismic.asLink(eventPage)),
    fallback: true,
  };
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const eventPage = await client.getByUID("event", params.uid);
  const members = await client.getAllByType("member");
  const homePage = await client.getByUID("home", "home");

  return {
    props: { eventPage, homePage, members },
  };
}

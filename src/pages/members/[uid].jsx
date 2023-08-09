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

export default function MemberPage({
  memberPage,
  cartesMembres,
  homePage,
  cartesEvents,
}) {
  console.log("memberPage", memberPage);
  console.log("cartesMembre", cartesMembres);
  console.log("homePage", homePage);
  console.log("cartesEvents", cartesEvents);

  const currentPageUID = memberPage.uid;
  const currentPageIndex = cartesMembres.findIndex(
    (member) => member.uid === currentPageUID
  );
  const nextMemberIndex = (currentPageIndex + 1) % cartesMembres.length;

  const eventsOfCurrentMember = cartesEvents.filter(
    (event) => event.data.member.uid === currentPageUID
  );

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
      <div className="flex flex-col font-open leading-6 mx-5 md:mx-[25vw] md:px-0 lg:w-[50%] text-black">
        <h2 className="uppercase font-bold leading-[70px] text-5xl md:text-6xl font-mont text-yellow">
          ABOUT
        </h2>
        <h1 className="uppercase font-mont font-bold leading-10 text-4xl pb-12">
          {memberPage.data.name}
        </h1>
        <PrismicRichText field={memberPage.data.description} />
      </div>
      <div className="flex flex-col gap-6 my-6">
        <ButtonInfo
          paddingTB="2"
          marginTB="8"
          linkTo={memberPage.data.website.url}
          icon="/icons/website.svg"
          iconHeight="[55px]"
          fontSize="[17px]"
          text="GO TO WEBSITE"
        />
        <Title title="INFO" subtitle="PRACTICAL INFORMATION" />
        <ButtonInfo
          paddingTB="4"
          marginTB="0"
          linkTo={`mailto:${memberPage.data.email}`}
          icon="/icons/mail.svg"
          iconHeight="[40px]"
          fontSize="[15px]"
          text={memberPage.data.email}
        />
        <ButtonInfo
          paddingTB="4"
          marginTB="0"
          linkTo={`tel:${memberPage.data.phone}`}
          icon="/icons/phone.svg"
          iconHeight="[40px]"
          fontSize="[15px]"
          text={memberPage.data.phone}
        />
      </div>

      {/* EVENTS */}
      <div className="mt-12">
        <SectionTitle slice={homePage.data.slices[2]} />
      </div>
      <div className="flex flex-col scrollbar-hide w-full mb-12 gap-4">
        {eventsOfCurrentMember.length === 0 ? (
          <p className="font-mont text-center text-[17px] font-light uppercase text-opacity-80 text-darkGrey ">
            No events to show yet
          </p>
        ) : (
          <div className="snap-mandatory snap-x overflow-scroll flex flex-row ml-3 ">
            {eventsOfCurrentMember.map((cartesEvents, index) => (
              <EventNewsCard
                key={index}
                linkToCard={`/events/${cartesEvents.uid}`}
                imageHeader={cartesEvents.data.imageHeader.url}
                index={index + 1}
                title={cartesEvents.data.name}
                sizeTitle="2xl"
                leadingTitle="8"
                fromDate={formatDateEvents(cartesEvents.data.startDate)}
                toDate={formatDateEvents(cartesEvents.data.endDate)}
              />
            ))}{" "}
          </div>
        )}
      </div>

      {/* OTHER MEMBER CARD */}

      <SectionTitle slice={homePage.data.slices[4]} />
      <div className="snap-mandatory snap-x overflow-scroll flex flex-row ml-3 ">
        {" "}
        {cartesMembres.slice(0, 5).map((carteMembre, index) => (
          <MemberCard
            key={index}
            member={carteMembre.data.name}
            country={carteMembre.data.country}
            backgroundImage={carteMembre.data.imageHeader.url}
            logo={carteMembre.data.logo.url}
            linkToCard={`/members/${carteMembre.uid}`}
          />
        ))}{" "}
      </div>

      <div className="flex mt-6 mb-8">
        <CardAll
          title="All of our members"
          buttonText="see all"
          linkTo={"/members"}
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
  const cartesEvents = await client.getAllByType("event", {
    orderings: [{ field: "my.event.startDate" }],
  });
  return {
    props: { memberPage, cartesMembres, homePage, cartesEvents },
  };
}

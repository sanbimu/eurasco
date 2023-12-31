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
import CardsScrollable from "@/components/shared/cardsScrollable";
import Link from "next/link";

export default function MemberPage({
  memberPage,
  cartesMembres,
  homePage,
  cartesEvents,
}) {
  const currentPageUID = memberPage.uid;
  const currentPageIndex = cartesMembres.findIndex(
    (member) => member.uid === currentPageUID
  );
  const nextMemberIndex = (currentPageIndex + 1) % cartesMembres.length;

  const eventsOfCurrentMember = cartesEvents.filter(
    (event) =>
      event.data.member.uid === currentPageUID ||
      event.data.memberTwo.uid === currentPageUID ||
      event.data.memberThree.uid === currentPageUID
  );

  return (
    <>
      {/* HEADER */}
      <div className='min-h-[75vh] flex flex-col w-screen justify-center'>
        <Image
          src={memberPage.data.logo.url}
          width={295}
          height={66}
          alt='Member Logo'
          className='z-20 max-w-[295px] max-h-[200px] mx-auto object-contain'
        />
        <Image
          src={memberPage.data.imageHeader.url}
          width={394}
          height={850}
          priority={true}
          alt='Member Image'
          className='min-h-[75vh] absolute object-cover lg:max-h-[75vh] w-full'
        />
      </div>
      <div className='mb-6 md:mb-10'></div>

      {/* CONTENT */}
      <Link
        className='font-open text-darkGreen italic text-[15px] ml-5 md:ml-10 hover:text-lightGreen'
        href='/members'
      >
        ← Go back
      </Link>
      <div className='md:flex md:flex-row lg:mx-32 md:mx-10 '>
        <div className='md:w-[60%] flex flex-col justify-between'>
          <div className='flex flex-col font-open mx-5 lg:mx-24 md:px-0 text-black pb-6'>
            <h2 className='uppercase font-bold leading-[70px] text-5xl md:text-6xl font-mont text-yellow md:mt-4 lg:mt-12'>
              ABOUT
            </h2>
            <h1 className='uppercase font-mont font-bold text-4xl pb-12 -mt-4'>
              {memberPage.data.name}
            </h1>
            <div className='font-open text-[15px] leading-6 md:text-xl md:leading-8 lg:text-base'>
              <PrismicRichText field={memberPage.data.description} />
            </div>
          </div>
          <div className='flex mt-6 mx-5 md:mt-6  lg:mb-12 lg:mx-24'>
            <ButtonInfo
              paddingTB='2'
              marginTB='8'
              linkTo={memberPage.data.website.url}
              icon='/icons/website.svg'
              iconHeight='[55px]'
              fontSize='[17px]'
              text='GO TO WEBSITE'
            />
          </div>
        </div>

        <div className='hidden md:flex z-50 relative lg:mb-12 '>
          <Image
            src={memberPage.data.imageDesktop.url}
            width={450}
            height={630}
            alt='About Image'
            className='rounded-[10px] object-cover '
          />
          {memberPage.data.values && (
            <div className=' h-fit w-[267px] bg-lightGreen rounded-[10px] p-[10px] absolute left-[25px] bottom-[25px]'>
              <div className='border border-dashed border-white py-3 px-3'>
                <p className='font-mont text-[18px] text-white font-bold leading-6 py-4'>
                  Our Values
                </p>
                <p className='font-open text-[14px] text-white leading-6 '>
                  {memberPage.data.values}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* INFO PRATIQUE */}
      <div className='flex flex-col lg:mx-32 md:mt-12'>
        <div className='mt-[80px] md:mt-2'>
          <Title title='INFO' subtitle='PRACTICAL INFORMATION' />
        </div>
        <div className=' flex flex-col md:flex lg:flex-row gap-6 lg:justify-center mx-5 md:mx-48 lg:my-6'>
          <ButtonInfo
            paddingTB='4'
            marginTB='0'
            linkTo={`mailto:${memberPage.data.email}`}
            icon='/icons/mail.svg'
            iconHeight='[40px]'
            fontSize='[157px]'
            text={memberPage.data.email}
          />
          <ButtonInfo
            paddingTB='4'
            marginTB='0'
            linkTo={`tel:${memberPage.data.phone}`}
            icon='/icons/phone.svg'
            iconHeight='[40px]'
            fontSize='[17px]'
            text={memberPage.data.phone}
          />
        </div>
      </div>

      {/* EVENTS */}
      <div className='flex flex-col lg:mx-24 md:mx-12 md:border md:border-lightGrey/10 md:rounded-[20px] md:bg-lightGrey md:bg-opacity-10 md:mb-12 md:mt-12'>
        <SectionTitle slice={homePage.data.slices[2]} />

        <div className='flex flex-col scrollbar-hide w-full gap-4'>
          {eventsOfCurrentMember.length === 0 ? (
            <p className='font-mont text-center text-[17px] font-light uppercase text-opacity-80 text-darkGrey mb-8'>
              No events to show yet
            </p>
          ) : (
            <CardsScrollable
              buttonLink='/events'
              buttonText='discover all our events'
            >
              {eventsOfCurrentMember.map((cartesEvents, index) => (
                <EventNewsCard
                  key={index}
                  textIndex='EVENT'
                  index={index + 1}
                  linkToCard={`/events/${cartesEvents.uid}`}
                  imageHeader={cartesEvents.data.imageHeader.url}
                  title={cartesEvents.data.name}
                  sizeTitle='2xl'
                  leadingTitle='8'
                  fromDate={formatDateEvents(cartesEvents.data.startDate)}
                  toDate={formatDateEvents(cartesEvents.data.endDate)}
                />
              ))}
            </CardsScrollable>
          )}
        </div>
      </div>

      {/* OTHER MEMBER CARD */}

      <div className='flex flex-col mb-12 lg:mx-24 md:mx-12 md:border md:border-lightGrey/10 md:rounded-[20px] md:bg-lightGrey md:bg-opacity-10 md:mb-12'>
        <SectionTitle slice={homePage.data.slices[4]} />
        <CardsScrollable
          buttonLink='/members'
          buttonText='discover our members'
        >
          {cartesMembres.slice(0, 5).map((cartesMembres, index) => (
            <MemberCard
              key={index}
              member={cartesMembres.data.name}
              country={cartesMembres.data.country}
              backgroundImage={cartesMembres.data.imageHeader.url}
              logo={cartesMembres.data.logo.url}
              linkToCard={`/members/${cartesMembres.uid}`}
            />
          ))}
        </CardsScrollable>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const client = createClient();

  const memberPages = await client.getAllByType("member");

  return {
    paths: memberPages.map((memberPage) => prismic.asLink(memberPage)),
    fallback: "blocking",
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

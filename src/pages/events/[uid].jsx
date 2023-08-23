import * as prismic from "@prismicio/client";
import { createClient } from "../../prismicio";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import { ButtonInfo } from "@/components/shared/buttonInfo";
import { Title } from "@/components/shared/title";
import { formatDateEvents } from "@/components/utils";
import Link from "next/link";

export default function EventPage({ eventPage, members }) {
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
      <div className='flex flex-col relative w-screen justify-center'>
        <Image
          src={eventPage.data.imageHeader.url}
          width={394}
          height={850}
          alt='Member Image'
          className='min-h-[75vh] absolute object-cover lg:min-h-[65vh] lg:max-h-[65vh] md:w-screen'
        />
        <div className='absolute inset-0 gradient_Event z-10'></div>
        <div className='flex flex-col items-start justify-end min-h-[75vh] lg:min-h-[65vh] p-[25px] gap-4 md:gap-10 z-20'>
          <div className='font-mont font-bold text-3xl md:text-6xl lg:text-5xl leading-8 text-white md:mx-20 '>
            {eventPage.data.name}
          </div>
          <div className='font-mont font-semibold text-opacity-60 text-xl md:text-3xl leading-6 text-white md:mx-20 md:pb-10'>
            {`${formatDateEvents(
              eventPage.data.startDate
            )} - ${formatDateEvents(eventPage.data.endDate)}`}
          </div>
        </div>
      </div>
      <div className='mb-6 md:mb-10'></div>

      {/* CONTENT */}
      <Link
        className='font-open text-darkGreen italic text-[15px] ml-5 md:ml-10 hover:text-lightGreen'
        href='/events'
      >
        ← Go back
      </Link>
      {/* ----MOBILE---- */}
      <div className='flex lg:hidden flex-col font-open leading-6 md:px-0 lg:w-[50%] text-black pb-6 mt-6 md:mt-8'>
        <div className='font-mont font-bold text-lg md:text-xl leading-6 mx-5 md:mx-20'>
          Organised by:&nbsp;
          <Link href={eventPage.data.member.url}>
            {matchingMember.data.name}
          </Link>
          {matchingMemberTwo && (
            <>
              ,&nbsp;
              <Link
                href={eventPage.data.member.url}
                className='font-mont font-bold text-lg leading-6'
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
                className='font-mont font-bold text-lg leading-6'
              >
                {matchingMemberThree.data.name}
              </Link>
            </>
          )}
        </div>
        <div className='flex min-h-[25vh] md:min-h-[15vh] w-[90vw] md:w-[40vw] mx-auto my-6 relative overflow-hidden'>
          <Image
            src={eventPage.data.logo.url}
            fill={true}
            alt='Event Logo'
            className='object-contain '
          />
        </div>
        <div className='font-open leading-[25px] mx-5 md:mx-20 text-justify md:text-xl'>
          <PrismicRichText field={eventPage.data.description} />
        </div>
        <div className='flex min-h-[25vh] w-full relative overflow-hidden mt-12'>
          <Image
            src={eventPage.data.imageEvent.url}
            fill={true}
            alt='Event Image'
            className='object-cover w-full h-full object-left'
          />
        </div>
      </div>

      {/* ----DESKTOP---- */}
      <div className='hidden lg:flex flex-row mb-12 mx-24 mt-6 border md:border-lightGrey/10 md:rounded-[20px] md:bg-lightGrey md:bg-opacity-10 justify-evenly'>
        <div className='flex w-[45%] relative overflow-hidden my-12 rounded-[10px]'>
          <Image
            src={eventPage.data.imageEvent.url}
            height={450}
            width={600}
            alt='Event Image'
            className='max-w-full object-cover rounded-[10px]'
          />
        </div>
        <div className='flex flex-col w-[45%] my-12 gap-6'>
          <div className='font-mont font-bold text-lg leading-6'>
            Organised by:&nbsp;
            <Link href={eventPage.data.member.url}>
              {matchingMember.data.name}
            </Link>
            {matchingMemberTwo && (
              <>
                ,&nbsp;
                <Link
                  href={eventPage.data.member.url}
                  className='font-mont font-bold text-lg leading-6'
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
                  className='font-mont font-bold text-lg leading-6'
                >
                  {matchingMemberThree.data.name}
                </Link>
              </>
            )}
          </div>
          <div className='flex max-h-[20vh] max-w-full mx-auto my-4 justify-center z-20'>
            <Image
              src={eventPage.data.logo.url}
              height={450}
              width={450}
              alt='Event Logo'
              className='object-scale-down'
            />
          </div>
          <div className='font-open leading-[25px] text-justify'>
            <PrismicRichText field={eventPage.data.description} />
          </div>
        </div>
      </div>

      {/* INFO & BUTTONS */}
      <div className='mt-6 '>
        <Title title='INFO' subtitle='PRACTICAL INFORMATION' />
      </div>

      <div className='flex flex-col gap-6 mt-6 mb-12 mx-5 md:mx-20 lg:mx-2 lg:justify-center lg:flex-row'>
        <div className='flex flex-col gap-6 lg:w-[30vw]'>
          <ButtonInfo
            paddingTB='2'
            marginTB='0'
            linkTo={eventPage.data.website.url}
            icon='/icons/website.svg'
            iconHeight='[45px]'
            fontSize='[17px]'
            text='GO TO WEBSITE'
          />
          <ButtonInfo
            paddingTB='4'
            marginTB='0'
            linkTo={`http://maps.google.com/?q=${eventPage.data.city}`}
            icon='/icons/address.svg'
            iconHeight='[40px]'
            fontSize='[15px]'
            text={`${eventPage.data.city}, ${eventPage.data.country}`}
          />
        </div>
        <div className='flex flex-col gap-6  lg:w-[30vw]'>
          <ButtonInfo
            paddingTB='4'
            marginTB='0'
            linkTo={`mailto:${eventPage.data.mail}`}
            icon='/icons/mail.svg'
            iconHeight='[40px]'
            fontSize='[15px]'
            text={eventPage.data.mail}
          />
          <ButtonInfo
            paddingTB='4'
            marginTB='0'
            linkTo={`tel:${eventPage.data.phone}`}
            icon='/icons/phone.svg'
            iconHeight='[40px]'
            fontSize='[15px]'
            text={eventPage.data.phone}
          />
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const client = createClient();

  const eventPages = await client.getAllByType("event");

  return {
    paths: eventPages.map((eventPage) => prismic.asLink(eventPage)),
    fallback: "blocking",
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

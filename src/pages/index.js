import * as prismic from "@prismicio/client";
import { createClient } from "../prismicio";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import HeroSlice from "@/slices/Hero";
import { ContactCard } from "@/components/shared/contactCard";
import { MemberCard } from "@/components/members/memberCard";
import AboutEurasco from "@/slices/AboutEurasco";
import SectionTitle from "@/slices/SectionTitle";
import { formatDate, formatDateEvents } from "@/components/utils";
import { EventNewsCard } from "@/components/shared/eventNewsCard";
import CardsScrollable from "@/components/shared/cardsScrollable";

export default function Home({
  homePage,
  cartesBlog,
  cartesMembres,
  cartesEvents,
}) {
  // const [random, setRandom] = useState([0, 2]);

  // useEffect(() => {
  //   const randomMember = Math.floor(Math.random() * cartesMembres.length);
  //   const nextRandomMember = (randomMember + 2) % cartesMembres.length;
  //   setRandom([randomMember, nextRandomMember]);
  // }, []);
  console.log(homePage);
  return (
    <main>
      <div className='flex flex-col w-full'>
        <HeroSlice slice={homePage.data.slices[0]} />
        <AboutEurasco slice={homePage.data.slices[1]} />

        {/* EVENTS */}
        <div className='flex flex-col lg:mx-24 md:mx-12 md:border md:border-lightGrey/10 md:rounded-[20px] md:bg-lightGrey md:bg-opacity-10 md:mb-12'>
          <SectionTitle slice={homePage.data.slices[2]} />
          <CardsScrollable
            buttonLink='/events'
            buttonText='discover our events'
          >
            {cartesEvents.slice(0, 8).map((cartesEvents, index) => (
              <EventNewsCard
                key={index}
                textIndex={cartesEvents.data.country}
                index={index + 1}
                linkToCard={`/events/${cartesEvents.uid}`}
                imageHeader={cartesEvents.data.imageHeader.url}
                title={cartesEvents.data.name}
                sizeTitle='xl'
                leadingTitle='6'
                fromDate={formatDateEvents(cartesEvents.data.startDate)}
                toDate={formatDateEvents(cartesEvents.data.endDate)}
              />
            ))}
          </CardsScrollable>
        </div>

        {/*ccard  MEMBRES */}
        <div className='flex flex-col lg:mx-24 md:mx-12 md:border md:border-lightGrey/10 md:rounded-[20px] md:bg-lightGrey md:bg-opacity-10 md:mb-12'>
          <SectionTitle slice={homePage.data.slices[4]} />
          <CardsScrollable
            buttonLink='/members'
            buttonText='discover our members'
          >
            {cartesMembres.slice(0, 8).map((cartesMembre, index) => (
              <MemberCard
                key={index}
                member={cartesMembre.data.name}
                country={cartesMembre.data.country}
                backgroundImage={cartesMembre.data.imageHeader.url}
                logo={cartesMembre.data.logo.url}
                linkToCard={`/members/${cartesMembre.uid}`}
              />
            ))}
          </CardsScrollable>
        </div>

        {/* NEWS */}
        <div className='flex flex-col lg:mx-24 md:mx-12 md:border md:border-lightGrey/10 md:rounded-[20px] md:bg-lightGrey md:bg-opacity-10 md:mb-12'>
          <SectionTitle slice={homePage.data.slices[3]} />
          <CardsScrollable buttonLink='/news' buttonText='discover our news'>
            {cartesBlog.slice(0, 8).map((cartesBlog, index) => (
              <EventNewsCard
                key={index}
                textIndex='NEWS'
                index={index + 1}
                title={cartesBlog.data.title}
                sizeTitle='xl'
                leadingTitle='6'
                imageHeader={cartesBlog.data.image.url}
                date={formatDate(cartesBlog.first_publication_date)}
                linkToCard={`/news/${cartesBlog.uid}`}
              />
            ))}
          </CardsScrollable>
        </div>

        <Image
          src='/images/contactDesktop.jpg'
          width={1920}
          height={600}
          alt='Image Contact'
          className='hidden md:flex md:pb-14 md:pt-14 lg:w-screen'
        />
        <ContactCard slice={homePage.data.slices[5]} />
      </div>
    </main>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const homePage = await client.getByUID("home", "home");
  const cartesMembres = await client.getAllByType("member");
  const cartesBlog = await client.getAllByType("blog", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const cartesEvents = await client.getAllByType("event", {
    orderings: [{ field: "my.event.startDate" }],
  });

  return {
    props: {
      homePage,
      cartesBlog,
      cartesMembres,
      cartesEvents,
    },
  };
}

import * as prismic from "@prismicio/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "../prismicio";
import HeroSlice from "@/slices/Hero";
import { ContactCard } from "@/components/shared/contactCard";
import { CardAll } from "@/components/shared/cardAll";
import { MemberCard } from "@/components/members/memberCard";
import Button from "@/components/shared/button";
import AboutEurasco from "@/slices/AboutEurasco";
import SectionTitle from "@/slices/SectionTitle";
import { formatDate, formatDateEvents } from "@/components/utils";
import { EventNewsCard } from "@/components/shared/eventNewsCard";

export default function Home({
  homePage,
  cartesBlog,
  cartesMembres,
  cartesEvents,
}) {
  console.log("homePage", homePage.data);
  console.log("cartesMembers", cartesMembres);

  const [random, setRandom] = useState([0, 2]);

  useEffect(() => {
    const randomMember = Math.floor(Math.random() * cartesMembres.length);
    const nextRandomMember = (randomMember + 2) % cartesMembres.length;
    setRandom([randomMember, nextRandomMember]);
  }, []);

  return (
    <main>
      <div className="flex flex-col w-full">
        <HeroSlice slice={homePage.data.slices[0]} />
        <AboutEurasco slice={homePage.data.slices[1]} />

        {/* EVENTS */}
        <SectionTitle slice={homePage.data.slices[2]} />
        <div className="flex flex-col lg:flex-row md:gap-0 md:px-10 lg:mx-auto gap-4 overflow-auto lg:pb-20 lg:gap-6 lg:pt-2  ">
          <div className="flex flex-col md:flex-row lg:flex-col md:gap-6 lg:gap-6 gap-4 overflow-auto">
            {cartesEvents.slice(0, 2).map((cartesEvents, index) => (
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
            ))}
          </div>
          <div className="flex md:hidden lg:flex pb-20 lg:pb-10">
            <CardAll
              title="Tous nos événements"
              buttonText="voir tout"
              linkTo={"/events"}
              marginBottom="0"
            />
          </div>
          <div className="hidden md:flex lg:hidden mx-auto mt-8 mb-14">
            <Button
              buttonText={"tous nos événements"}
              linkTo={"/events"}
            ></Button>
          </div>
        </div>

        {/* ACTUS */}
        <SectionTitle slice={homePage.data.slices[3]} />
        <div className="hidden lg:flex flex-col gap-10 mb-14 w-full h-[440px] custom_Gradient items-center">
          <div className="flex flex-row gap-6 mx-auto mt-14"></div>
          <Button
            buttonText={"toutes nos actualités"}
            linkTo={"/news"}
          ></Button>
        </div>
        <div className="flex flex-col md:flex-row md:gap-0 md:flex-wrap md:px-6 gap-4 overflow-auto">
          {cartesBlog.slice(0, 2).map((carteBlog, index) => (
            <EventNewsCard
              key={index}
              title={carteBlog.data.title}
              sizeTitle="xl"
              leadingTitle="6"
              imageHeader={carteBlog.data.image.url}
              date={formatDate(carteBlog.first_publication_date)}
              linkToCard={`/news/${carteBlog.uid}`}
            />
          ))}
          <div className="flex md:hidden pb-20">
            <CardAll
              title="Toutes nos actualités"
              buttonText="voir tout"
              linkTo={"/news"}
            />
          </div>
          <div className="hidden md:flex lg:hidden mx-auto mt-12 mb-14">
            <Button
              buttonText={"toutes nos actualités"}
              linkTo={"/news"}
            ></Button>
          </div>
        </div>

        {/* MEMBRES */}
        <SectionTitle slice={homePage.data.slices[4]} />
        <div className="flex flex-col gap-4 overflow-auto md:flex-row md:gap-0 md:flex-wrap md:px-6 lg:gap-3 lg:mx-[10%]">
          {cartesMembres.slice(...random).map((carteMembre, index) => (
            <MemberCard
              key={index}
              member={carteMembre.data.name}
              country={carteMembre.data.country}
              backgroundImage={carteMembre.data.imageHeader.url}
              logo={carteMembre.data.logo.url}
              linkToCard={`/members/${carteMembre.uid}`}
            />
          ))}
          <div className="flex md:hidden pb-20">
            <CardAll
              title="Tous nos membres"
              buttonText="voir tout"
              linkTo={"/members"}
            />
          </div>
          <div className="hidden md:flex mx-auto mt-10 mb-14">
            <Button
              buttonText={"tous nos membres"}
              linkTo={"/members"}
            ></Button>
          </div>
        </div>
        <Image
          src="/images/contactDesktop.jpg"
          width={1920}
          height={600}
          alt="Image Contact"
          className="hidden md:flex md:pb-14 :pt-14"
        />
        <ContactCard />
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

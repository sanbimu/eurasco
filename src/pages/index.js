import * as prismic from "@prismicio/client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "../prismicio";
import HeroSlice from "@/slices/Hero";
import { ContactCard } from "@/components/shared/contactCard";
import { EventCard } from "@/components/events/eventCard";
import { CardAll } from "@/components/shared/cardAll";
import { NewsCard } from "@/components/news/newsCard";
import { MemberCard } from "@/components/members/memberCard";
import Button from "@/components/shared/button";
import { NewsCardDesktop } from "@/components/news/newsCardDesktop";
import AboutEurasco from "@/slices/AboutEurasco";
import SectionTitle from "@/slices/SectionTitle";
import { formatDate } from "@/components/utils";

export default function Home({
  homePage,
  cartesBlog,
  cartesMembres,
  randomMember,
  nextRandomMember,
}) {
  console.log("homePage", homePage.data);
  console.log("cartesMembers", cartesMembres);
  console.log(randomMember);

  return (
    <main>
      <div className="flex flex-col w-full">
        <HeroSlice slice={homePage.data.slices[0]} />
        <AboutEurasco slice={homePage.data.slices[1]} />
        <SectionTitle slice={homePage.data.slices[2]} />
        <div className="flex flex-col lg:flex-row md:gap-0 md:px-10 lg:mx-auto gap-4 overflow-auto lg:pb-20 lg:gap-6 lg:pt-2  ">
          <div className="flex flex-col md:flex-row lg:flex-col md:gap-6 lg:gap-6 gap-4 overflow-auto">
            <EventCard />
            <EventCard />
          </div>
          <div className="flex md:hidden lg:flex pb-20 lg:pb-10">
            <CardAll
              title="Tous nos événements"
              buttonText="voir tout"
              linkTo={"/evenements"}
              marginBottom="0"
            />
          </div>
          <div className="hidden md:flex lg:hidden mx-auto mt-8 mb-14">
            <Button
              buttonText={"tous nos événements"}
              linkTo={"/evenements"}
            ></Button>
          </div>
        </div>
        <SectionTitle slice={homePage.data.slices[3]} />
        <div className="hidden lg:flex flex-col gap-10 mb-14 w-full h-[440px] custom_Gradient items-center">
          <div className="flex flex-row gap-6 mx-auto mt-14">
            <NewsCardDesktop />
            <NewsCardDesktop />
          </div>
          <Button
            buttonText={"toutes nos actualités"}
            linkTo={"/actualites"}
          ></Button>
        </div>
        <div className="flex flex-col md:flex-row md:gap-0 md:flex-wrap md:px-6 gap-4 overflow-auto">
          {cartesBlog.slice(0, 2).map((carteBlog, index) => (
            <NewsCard
              key={index}
              title={carteBlog.data.title}
              image={carteBlog.data.image.url}
              date={formatDate(carteBlog.first_publication_date)}
              linkToCard={`/actualites/${carteBlog.uid}`}
            />
          ))}
          <div className="flex md:hidden pb-20">
            <CardAll
              title="Toutes nos actualités"
              buttonText="voir tout"
              linkTo={"/actualites"}
            />
          </div>
          <div className="hidden md:flex lg:hidden mx-auto mt-12 mb-14">
            <Button
              buttonText={"toutes nos actualités"}
              linkTo={"/actualites"}
            ></Button>
          </div>
        </div>
        <SectionTitle slice={homePage.data.slices[4]} />
        <div className="flex flex-col gap-4 overflow-auto md:flex-row md:gap-0 md:flex-wrap md:px-6 lg:gap-3 lg:mx-[10%]">
          {cartesMembres
            .slice(randomMember, nextRandomMember + 1)
            .map((carteMembre, index) => (
              <MemberCard
                key={index}
                member={carteMembre.data.name}
                country={carteMembre.data.country}
                backgroundImage={carteMembre.data.imageHeader.url}
                logo={carteMembre.data.logo.url}
                linkToCard={`/membres/${carteMembre.uid}`}
              />
            ))}
          <div className="flex md:hidden pb-20">
            <CardAll
              title="Tous nos membres"
              buttonText="voir tout"
              linkTo={"/membres"}
            />
          </div>
          <div className="hidden md:flex mx-auto mt-10 mb-14">
            <Button
              buttonText={"tous nos membres"}
              linkTo={"/membres"}
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

export async function getServerSideProps({ previewData }) {
  const client = createClient({ previewData });

  const homePage = await client.getByUID("home", "home");
  const cartesBlog = await client.getAllByType("blog", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });
  const cartesMembres = await client.getAllByType("member");

  const randomMember = Math.floor(Math.random() * cartesMembres.length);
  const nextRandomMember = (randomMember + 1) % cartesMembres.length;

  return {
    props: {
      homePage,
      cartesBlog,
      cartesMembres,
      randomMember,
      nextRandomMember,
    },
  };
}

import * as prismic from "@prismicio/client";
import React from "react";
import Image from "next/image";
import { createClient } from "../prismicio";
import HeroSlice from "@/slices/Hero";
import { About } from "@/components/about/about";
import { Title } from "@/components/shared/title";
import { ContactCard } from "@/components/shared/contactCard";
import { EventCard } from "@/components/events/eventCard";
import { CardAll } from "@/components/shared/cardAll";
import { NewsCard } from "@/components/news/newsCard";
import { MemberCard } from "@/components/members/memberCard";
import Button from "@/components/shared/button";

export default function Home({ document }) {
  return (
    <main>
      <div className="flex flex-col w-full">
        <HeroSlice slice={document.data.slices[0]} />
        <About />
        <Title
          title="events"
          subtitle="événements à venir"
          text="We have a wide variety of services so that our clients have good options."
        />
        <div className="flex flex-col md:flex-row md:gap-8 md:flex-wrap md:px-10 gap-4 overflow-auto">
          <EventCard />
          <EventCard />
          <EventCard />
          <CardAll
            title="Tous nos événements"
            buttonText="voir tout"
            linkTo={"/evenements"}
          />
        </div>
        <Title
          title="news"
          subtitle="DERNIèRES ACTUALITéS"
          text="We have a wide variety of services so that our clients have good options."
        />
        <div className="flex flex-col md:flex-row md:gap-0 md:flex-wrap md:px-6 gap-4 overflow-auto">
          <NewsCard />
          <NewsCard />
          <div className="flex md:hidden">
            <CardAll
              title="Toutes nos actualités"
              buttonText="voir tout"
              linkTo={"/actualites"}
            />
          </div>
          <div className="hidden md:flex mx-auto mt-10 mb-14">
            <Button
              buttonText={"toutes nos actualités"}
              linkTo={"/actualites"}
            ></Button>
          </div>
        </div>
        <Title
          title="rencontrez"
          subtitle="nos membres"
          text="We have a team of professionals, dedicated to providing excellent service."
        />
        <div className="flex flex-col md:flex-row md:gap-0 md:flex-wrap md:px-6 gap-4 overflow-auto">
          <MemberCard />
          <MemberCard />
          <div className="flex md:hidden">
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

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const document = await client.getByUID("home", "home");

  return {
    props: { document },
  };
}

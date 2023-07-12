import * as prismic from "@prismicio/client";
import React from "react";
import Image from "next/image";
import { createClient } from "../prismicio";
import HeroSlice from "@/slices/Hero";
import { About } from "@/components/about/about";
import { Title } from "@/components/shared/title";
import { ContactCard } from "@/components/shared/contactCard";
import { EventCard } from "@/components/events/eventCard";

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
        <div className="flex flex-col gap-4">
          <EventCard />
          <EventCard />
        </div>

        <Title
          title="news"
          subtitle="DERNIèRES ACTUALITéS"
          text="We have a wide variety of services so that our clients have good options."
        />
        <Title
          title="rencontrez"
          subtitle="nos membres"
          text="We have a team of professionals, dedicated to providing excellent service."
        />
        <Image
          src="/images/contactDesktop.jpg"
          width={1920}
          height={600}
          alt="Image Contact"
          className="hidden md:flex md:pb-14 md:pt-14"
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

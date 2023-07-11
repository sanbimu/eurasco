import * as prismic from "@prismicio/client";
import { createClient } from "../prismicio";
import HeroSlice from "@/slices/Hero";
import { About } from "@/components/about";
import { Title } from "@/components/shared/title";
import { ContactCard } from "@/components/shared/contactCard";

export default function Home({ document }) {
  return (
    <main>
      <div className="flex flex-col">
        <HeroSlice slice={document.data.slices[0]} />
        <About />
        <Title
          title="events"
          subtitle="événements à venir"
          text="We have a wide variety of services so that our clients have good options."
        />
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

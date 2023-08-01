import { createClient } from "../../prismicio";
import { NewsCard } from "@/components/news/newsCard";
import { NewsCardDesktop } from "@/components/news/newsCardDesktop";
import Button from "@/components/shared/button";
import { CardAll } from "@/components/shared/cardAll";
import { ContactCard } from "@/components/shared/contactCard";
import { HeaderPages } from "@/components/shared/headerPages";
import { Title } from "@/components/shared/title";

export default function News({ cartesBlog }) {
  console.log("CarteBlog", cartesBlog);
  return (
    <main>
      <div className="flex flex-col md:h-auto">
        <HeaderPages title="Nos actualités" />
        <div className="flex flex-col mt-12">
          <Title
            title="news"
            subtitle="DERNIèRES ACTUALITéS"
            text="We have a wide variety of services so that our clients have good options."
          />
          <div className="flex flex-col gap-4 mb-12 md:flex-wrap md:gap-4 md:grid md:grid-cols-2 md:mx-[50px] lg:mx-[100px] ">
            <NewsCardDesktop />
            <NewsCardDesktop />

            {cartesBlog.map((carteBlog, index) => (
              <NewsCard
                key={index}
                title={carteBlog.data.title}
                image={carteBlog.data.image.url}
                description={carteBlog.data.description}
                linkToCard={`/actualites/${carteBlog.uid}`}
              />
            ))}

            <div className="flex md:hidden">
              <CardAll
                title="Tous nos événements"
                buttonText="voir tout"
                linkTo={"/evenements"}
              />
            </div>
            <NewsCardDesktop />
            <NewsCardDesktop />
          </div>
          <div className="mx-auto ">
            <Button buttonText="Voir plus" linkTo="/actualites" />
          </div>
          <div className="mt-10 lg:mt-20 mb-4">
            <ContactCard />
          </div>
        </div>
      </div>
    </main>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const cartesBlog = await client.getAllByType("blog");

  return {
    props: { cartesBlog },
  };
}

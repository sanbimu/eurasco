import { createClient } from "../../prismicio";
import { NewsCard } from "@/components/news/newsCard";
import { NewsCardDesktop } from "@/components/news/newsCardDesktop";
import { CardAll } from "@/components/shared/cardAll";
import { ContactCard } from "@/components/shared/contactCard";
import { HeaderPages } from "@/components/shared/headerPages";
import { formatDate } from "@/components/utils";
import SectionTitle from "@/slices/SectionTitle";

export default function News({ cartesBlog, homePage }) {
  console.log("CarteBlog", cartesBlog);
  console.log("homePage", homePage);

  return (
    <main>
      <div className="flex flex-col md:h-auto">
        <HeaderPages title="Nos actualités" />
        <div className="flex flex-col mt-12">
          <SectionTitle slice={homePage.data.slices[3]} />

          <div className="flex flex-col gap-4 mb-12 md:flex-wrap md:gap-4 md:grid md:grid-cols-2 md:mx-[50px] lg:mx-[100px] ">
            <NewsCardDesktop />
            <NewsCardDesktop />

            {cartesBlog.slice(0, 2).map((carteBlog, index) => (
              <NewsCard
                key={index}
                title={carteBlog.data.title}
                image={carteBlog.data.image.url}
                date={formatDate(carteBlog.first_publication_date)}
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

            {cartesBlog.slice(2).map((carteBlog, index) => (
              <NewsCard
                key={index + 2}
                title={carteBlog.data.title}
                image={carteBlog.data.image.url}
                date={formatDate(carteBlog.first_publication_date)}
                linkToCard={`/actualites/${carteBlog.uid}`}
              />
            ))}

            <NewsCardDesktop />
            <NewsCardDesktop />
          </div>
          {/* <div className="mx-auto ">
            <Button buttonText="Voir plus" linkTo="/actualites" />
          </div> */}
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

  const homePage = await client.getByUID("home", "home");
  const cartesBlog = await client.getAllByType("blog", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: { cartesBlog, homePage },
  };
}

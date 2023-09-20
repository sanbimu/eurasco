import { createClient } from "../../prismicio";
import { CardAll } from "@/components/shared/cardAll";
import { ContactCard } from "@/components/shared/contactCard";
import { EventNewsCard } from "@/components/shared/eventNewsCard";
import { HeaderPages } from "@/components/shared/headerPages";
import { formatDate } from "@/components/utils";
import SectionTitle from "@/slices/SectionTitle";

export default function News({ cartesBlog, homePage }) {
  return (
    <main>
      <div className='flex flex-col md:h-auto'>
        <HeaderPages
          title='OUR LATEST NEWS'
          image={homePage.data.slices[0].primary}
        />
        <div className='flex flex-col lg:mt-12'>
          <SectionTitle slice={homePage.data.slices[3]} />

          <div className='flex flex-col gap-5 mb-12 md:flex-wrap md:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:mx-[60px] g:mx-[100px] '>
            {cartesBlog.slice(0, 2).map((carteBlog, index) => (
              <EventNewsCard
                key={index}
                textIndex='NEWS'
                index={index + 1}
                title={carteBlog.data.title}
                sizeTitle='xl'
                leadingTitle='6'
                imageHeader={carteBlog.data.image.url}
                date={formatDate(carteBlog.first_publication_date)}
                linkToCard={`/news/${carteBlog.uid}`}
                widthFull={true}
              />
            ))}

            <div className='flex md:hidden'>
              <CardAll
                title='All of our events'
                buttonText='see all'
                linkTo={"/events"}
              />
            </div>

            {cartesBlog.slice(2).map((carteBlog, index) => (
              <EventNewsCard
                key={index + 2}
                textIndex='NEWS'
                index={index + 3}
                title={carteBlog.data.title}
                sizeTitle='xl'
                leadingTitle='6'
                imageHeader={carteBlog.data.image.url}
                date={formatDate(carteBlog.first_publication_date)}
                linkToCard={`/news/${carteBlog.uid}`}
                widthFull={true}
              />
            ))}
          </div>
          {/* <div className="mx-auto ">
            <Button buttonText="Voir plus" linkTo="/news" />
          </div> */}
          <div className=' lg:mt-20 '>
            <ContactCard slice={homePage.data.slices[5]} />
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

import { createClient } from "../../prismicio";
import { ContactCard } from "@/components/shared/contactCard";
import { HeaderPages } from "@/components/shared/headerPages";
import SectionTitle from "@/slices/SectionTitle";
import { EventNewsCard } from "@/components/shared/eventNewsCard";
import { formatDateEvents } from "@/components/utils";
import { CardAll } from "@/components/shared/cardAll";

export default function Events({ cartesEvents, homePage }) {
  console.log("cartesEvents", cartesEvents);

  return (
    <main>
      <div className='flex flex-col md:h-auto'>
        <HeaderPages title='ALL OF OUR EVENTS' />
        <div className='flex flex-col mt-12'>
          <SectionTitle slice={homePage.data.slices[2]} />

          <div className='flex flex-col gap-4 mb-12 md:flex-wrap md:gap-4 md:grid md:grid-cols-2 md:mx-[100px] lg:mx-[150px] '>
            {cartesEvents.slice(0, 2).map((cartesEvents, index) => (
              <EventNewsCard
                key={index}
                linkToCard={`/events/${cartesEvents.uid}`}
                imageHeader={cartesEvents.data.imageHeader.url}
                textIndex='EVENT'
                index={index + 1}
                title={cartesEvents.data.name}
                sizeTitle='2xl'
                leadingTitle='8'
                fromDate={formatDateEvents(cartesEvents.data.startDate)}
                toDate={formatDateEvents(cartesEvents.data.endDate)}
                widthFull={true}
              />
            ))}

            <div className='flex md:hidden'>
              <CardAll
                title='All our members'
                buttonText='see all'
                linkTo={"/members"}
              />
            </div>

            {cartesEvents.slice(2).map((cartesEvents, index) => (
              <EventNewsCard
                key={index + 2}
                linkToCard={`/events/${cartesEvents.uid}`}
                imageHeader={cartesEvents.data.imageHeader.url}
                textIndex='EVENT'
                index={index + 3}
                title={cartesEvents.data.name}
                sizeTitle='2xl'
                leadingTitle='8'
                fromDate={formatDateEvents(cartesEvents.data.startDate)}
                toDate={formatDateEvents(cartesEvents.data.endDate)}
                widthFull={true}
              />
            ))}
          </div>

          <div className='mt-14 lg:mt-20 mb-4 '>
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
  const cartesEvents = await client.getAllByType("event", {
    orderings: [{ field: "my.event.startDate" }],
  });
  return {
    props: { homePage, cartesEvents },
  };
}

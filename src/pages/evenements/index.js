import { createClient } from "../../prismicio";
import { ContactCard } from "@/components/shared/contactCard";
import { HeaderPages } from "@/components/shared/headerPages";
import SectionTitle from "@/slices/SectionTitle";
import { EventNewsCard } from "@/components/shared/eventNewsCard";
import { formatDateEvents } from "@/components/utils";

export default function Events({ cartesEvents, homePage }) {
  console.log("cartesEvents", cartesEvents);

  return (
    <main>
      <div className="flex flex-col md:h-auto">
        <HeaderPages title="Nos événements" />
        <div className="flex flex-col mt-12">
          <SectionTitle slice={homePage.data.slices[2]} />

          <div className="flex flex-col gap-4 mb-12 md:flex-wrap md:gap-4 md:grid md:grid-cols-2 md:mx-[100px] lg:mx-[150px] ">
            {cartesEvents.map((cartesEvents, index) => (
              <EventNewsCard
                key={index}
                linkToCard={`/evenements/${cartesEvents.uid}`}
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

          <div className="mt-14 lg:mt-20 mb-4 ">
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

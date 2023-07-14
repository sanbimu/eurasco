import { EventCard } from "@/components/events/eventCard";
import Button from "@/components/shared/button";
import { ContactCard } from "@/components/shared/contactCard";
import { HeaderPages } from "@/components/shared/headerPages";
import { Title } from "@/components/shared/title";

export default function Events() {
  return (
    <main>
      <div className="flex flex-col md:h-auto">
        <HeaderPages title="Nos événements" />
        <div className="flex flex-col mt-12">
          <Title
            title="events"
            subtitle="événements à venir"
            text="We have a wide variety of services so that our clients have good options."
          />
          <div className="flex flex-col gap-4 mb-12 md:flex-wrap md:gap-4 md:grid md:grid-cols-2 md:mx-[100px] lg:mx-[150px] ">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
          <div className="mx-auto ">
            <Button buttonText="Voir plus" linkTo="/evenements" />
          </div>
          <div className="mt-14 lg:mt-20 mb-4 ">
            <ContactCard />
          </div>
        </div>
      </div>
    </main>
  );
}

import { EventCard } from "@/components/events/eventCard";
import { ContactCard } from "@/components/shared/contactCard";
import { HeaderPages } from "@/components/shared/headerPages";
import { Title } from "@/components/shared/title";

export default function Events() {
  return (
    <main>
      <div className="flex flex-col md:h-screen lg:h-auto">
        <HeaderPages title="Nos événements" />
        <div className="flex flex-col mt-12">
          <Title
            title="events"
            subtitle="événements à venir"
            text="We have a wide variety of services so that our clients have good options."
          />
          <div className="flex flex-col gap-4 mb-12">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
          <div className="mt-10 mb-4">
            <ContactCard />
          </div>
        </div>
      </div>
    </main>
  );
}

import { MemberCard } from "@/components/members/memberCard";
import { CardAll } from "@/components/shared/cardAll";
import { ContactCard } from "@/components/shared/contactCard";
import { HeaderPages } from "@/components/shared/headerPages";
import { Title } from "@/components/shared/title";

export default function Members() {
  return (
    <main>
      <div className="flex flex-col md:h-screen lg:h-auto">
        <HeaderPages title="Nos membres" />
        <div className="flex flex-col mt-12">
          <Title
            title="rencontrez"
            subtitle="nos membres"
            text="We have a team of professionals, dedicated to providing excellent service."
          />
          <div className="flex flex-col gap-4 mb-12">
            <MemberCard />
            <MemberCard />
            <CardAll
              title="Tous nos membres"
              buttonText="voir tout"
              linkTo={"/membres"}
            />
            <MemberCard />
            <MemberCard />
          </div>
          <div className="mt-10 mb-4">
            <ContactCard />
          </div>
        </div>
      </div>
    </main>
  );
}

import { MemberCard } from "@/components/members/memberCard";
import Button from "@/components/shared/button";
import { CardAll } from "@/components/shared/cardAll";
import { ContactCard } from "@/components/shared/contactCard";
import { HeaderPages } from "@/components/shared/headerPages";
import { Title } from "@/components/shared/title";

export default function Members() {
  return (
    <main>
      <div className="flex flex-col md:h-auto">
        <HeaderPages title="Nos membres" />
        <div className="flex flex-col mt-12">
          <Title
            title="rencontrez"
            subtitle="nos membres"
            text="We have a team of professionals, dedicated to providing excellent service."
          />
          <div className="flex flex-col gap-4 mb-12 md:flex-wrap md:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:mx-[50px] lg:mx-[100px] ">
            <MemberCard />
            <MemberCard />
            <div className="flex md:hidden">
              <CardAll
                title="Tous nos événements"
                buttonText="voir tout"
                linkTo={"/evenements"}
              />
            </div>
            <MemberCard />
            <MemberCard />
            <MemberCard />
            <MemberCard />
          </div>
          <div className="mx-auto ">
            <Button buttonText="Voir plus" linkTo="/membres" />
          </div>
          <div className="mt-10 lg:mt-20 mb-4">
            <ContactCard />
          </div>
        </div>
      </div>
    </main>
  );
}

import { createClient } from "../../prismicio";
import { MemberCard } from "@/components/members/memberCard";
import { CardAll } from "@/components/shared/cardAll";
import { ContactCard } from "@/components/shared/contactCard";
import { HeaderPages } from "@/components/shared/headerPages";
import SectionTitle from "@/slices/SectionTitle";

export default function Members({ cartesMembres, homePage }) {
  console.log("CarteMembre", cartesMembres);
  console.log("homePage", homePage);

  return (
    <main>
      <div className="flex flex-col md:h-auto">
        <HeaderPages title="Our members" />
        <div className="flex flex-col mt-12">
          <SectionTitle slice={homePage.data.slices[4]} />

          <div className="flex flex-col gap-5 mb-12 md:flex-wrap md:gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:mx-[50px] lg:mx-[100px] ">
            {cartesMembres.slice(0, 2).map((carteMembre, index) => (
              <MemberCard
                key={index}
                member={carteMembre.data.name}
                country={carteMembre.data.country}
                backgroundImage={carteMembre.data.imageHeader.url}
                logo={carteMembre.data.logo.url}
                linkToCard={`/members/${carteMembre.uid}`}
                widthFull={true}
              />
            ))}

            <div className="flex md:hidden">
              <CardAll
                title="All of our events"
                buttonText="see all"
                linkTo={"/events"}
              />
            </div>

            {cartesMembres.slice(2).map((carteMembre, index) => (
              <MemberCard
                key={index}
                member={carteMembre.data.name}
                country={carteMembre.data.country}
                backgroundImage={carteMembre.data.imageHeader.url}
                logo={carteMembre.data.logo.url}
                linkToCard={`/members/${carteMembre.uid}`}
                widthFull={true}
              />
            ))}
          </div>
          {/* <div className="mx-auto ">
            <Button buttonText="Voir plus" linkTo="/members" />
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
  const cartesMembres = await client.getAllByType("member", {
    orderings: [{ field: "my.member.name" }],
  });

  return {
    props: { cartesMembres, homePage },
  };
}

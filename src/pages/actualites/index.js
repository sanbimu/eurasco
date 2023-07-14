import { NewsCard } from "@/components/news/newsCard";
import { NewsCardDesktop } from "@/components/news/newsCardDesktop";
import { CardAll } from "@/components/shared/cardAll";
import { ContactCard } from "@/components/shared/contactCard";
import { HeaderPages } from "@/components/shared/headerPages";
import { Title } from "@/components/shared/title";

export default function News() {
  return (
    <main>
      <div className="flex flex-col md:h-screen lg:h-auto">
        <HeaderPages title="Nos actualités" />
        <div className="flex flex-col mt-12">
          <Title
            title="news"
            subtitle="DERNIèRES ACTUALITéS"
            text="We have a wide variety of services so that our clients have good options."
          />
          <div className="flex flex-col gap-4 mb-12">
            <NewsCard />
            <NewsCard />
            <CardAll
              title="Toutes nos actualités"
              buttonText="voir tout"
              linkTo={"/actualites"}
            />
            <NewsCard />
            <NewsCard />
          </div>
          <div className="mt-10 mb-4">
            <ContactCard />
          </div>
        </div>
      </div>
    </main>
  );
}

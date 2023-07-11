import * as prismic from "@prismicio/client";
import { createClient } from "../prismicio";
import HeroSlice from "@/slices/Hero";

export default function Home({ document }) {
  return (
    <main>
      <div className="flex flex-col">
        <HeroSlice slice={document.data.slices[0]} />
      </div>
    </main>
  );
}

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const document = await client.getByUID("home", "home");

  return {
    props: { document },
  };
}

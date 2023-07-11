import * as prismic from "@prismicio/client";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import HeroSlice from "@/slices/Hero";
import { Hero } from "@/components/hero";
import { components } from "@/slices";

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

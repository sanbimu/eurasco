import * as prismic from "@prismicio/client";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import HeroSlice from "@/slices/Hero";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        {/* <SliceZone slices={page.data.body} components={HeroSlice} /> */}
        <Hero />
      </div>
    </main>
  );
}

// export async function getStaticProps({ previewData }) {
//   const client = createClient({ previewData });

//   const document = await client.getSingle("home");

//   return {
//     props: { page },
//   };
// }

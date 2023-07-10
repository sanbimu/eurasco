import * as prismic from "@prismicio/client";
import { createClient } from "../prismicio";
import { SliceZone } from "@prismicio/react";
import HeroSlice from "@/slices/Hero";
import { Hero } from "@/components/Hero";

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

// export async function getStaticProps({ params, previewData }) {
//   const client = createClient({ previewData });

//   const page = await client.getByUID("page", params.uid);

//   return {
//     props: { page },
//   };
// }

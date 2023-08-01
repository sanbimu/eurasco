import * as prismic from "@prismicio/client";
import { createClient } from "../../prismicio";
import Image from "next/image";

export default function Blog({ page }) {
  console.log("mes infos", page);

  return (
    <>
      <div className='min-h-[75vh]  flex justify-center items-center '>
        <div className='font-mont text-white text-5xl uppercase font-bold pb-8 z-50 '>
          {page.data.title}
        </div>
        <Image
          src={page.data.image.url}
          width={394}
          height={850}
          alt='Event Image'
          className='min-h-[75vh] absolute object-cover '
        />
        <div className='bg-black h-[75vh] w-full z-40 absolute opacity-50 ' />
      </div>
      {/* <div className="flex relative">
        <Image
          src={page.data.image.url}
          width={394}
          height={850}
          alt="Event Image"
          className="min-h-[75vh] object-cover"
        />
        <div className="flex absolute inset-0 h-full w-full bg-black bg-opacity-50"></div>
        <div className="absolute top-[35%] mx-4">
          <div className="font-mont text-white text-5xl uppercase font-bold pb-8 ">
            {page.data.title}
          </div>
          <div className="font-open text-white leading-6">
            {page.data.description}
          </div>
        </div>
      </div>

      <div className="mt-20 mb-20">Test</div> */}
    </>
  );
}

export async function getStaticPaths() {
  const client = createClient();

  const pages = await client.getAllByType("blog");

  return {
    paths: pages.map((page) => prismic.asLink(page)),
    fallback: true,
  };
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getByUID("blog", params.uid);

  return {
    props: { page },
  };
}

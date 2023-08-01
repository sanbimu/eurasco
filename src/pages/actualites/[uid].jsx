import * as prismic from "@prismicio/client";
import { createClient } from "../../prismicio";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";

export default function Blog({ page }) {
  console.log("PageInfo", page);

  return (
    <>
      <div className="min-h-[75vh] flex flex-col mx-4 justify-center items-center ">
        <div className="flex flex-col items-start z-20">
          <div className="font-mont text-white text-5xl uppercase font-bold pb-8">
            {page.data.title}
          </div>
          <div className="font-open text-white">{page.data.description}</div>
        </div>
        <Image
          src={page.data.image.url}
          width={394}
          height={850}
          alt="Event Image"
          className="min-h-[75vh] absolute object-cover "
        />
        <div className="bg-black h-[75vh] w-full z-10 absolute opacity-50 " />
      </div>
      <div className="mb-20">
        <h2 className="font-mont text-black font-bold text-4xl my-12 mx-6">
          {page.data.slices[0].items[0].subtitle}
        </h2>
        <div className="mx-6 font-open leading-[25px]">
          <PrismicRichText field={page.data.slices[0].items[0].paragraph} />
        </div>
        <Image
          src={page.data.slices[0].items[0].image.url}
          width={400}
          height={400}
          alt="Blog Image"
          className="w-[390px] h-[390px] object-cover mt-20"
        />
      </div>
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

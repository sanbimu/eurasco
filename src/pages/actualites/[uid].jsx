import * as prismic from "@prismicio/client";
import { createClient } from "../../prismicio";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import SectionTitle from "@/slices/SectionTitle";
import { NewsCard } from "@/components/news/newsCard";
import { CardAll } from "@/components/shared/cardAll";

export default function Blog({ page, carteBlog, homePage }) {
  console.log("blogSection", page);
  console.log("carteBlog", carteBlog);
  console.log("homePage", homePage);

  const currentPageUID = page.uid;
  const currentPageIndex = carteBlog.findIndex(
    (blog) => blog.uid === currentPageUID
  );
  const indexToShow = currentPageIndex === 0 ? 1 : 0;

  return (
    <>
      <div className="min-h-[75vh] flex flex-col w-screen justify-center">
        <div className="flex flex-col z-20">
          <div className="font-mont text-white text-5xl uppercase font-bold mx-4 mb-8 max-h-[140px] overflow-scroll ">
            {page.data.title}
          </div>
          <div className="font-open text-white mx-4 max-h-[200px] overflow-scroll ">
            {page.data.description}
          </div>
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
      {page.data.slices.map((slice, sliceIndex) => (
        <div key={sliceIndex} className="mb-20">
          <h2 className="font-mont text-black font-bold text-4xl my-12 mx-6">
            {slice.primary.subtitle}
          </h2>
          <div className="mx-6 font-open leading-[25px]">
            <PrismicRichText field={slice.primary.paragraph} />
          </div>
          {slice.primary.image.url && (
            <Image
              src={slice.primary.image.url}
              width={400}
              height={400}
              alt="Blog Image"
              className="w-[390px] h-[390px] object-cover mt-20"
            />
          )}
        </div>
      ))}
      <SectionTitle slice={homePage.data.slices[3]} />
      <div className="mb-6">
        <NewsCard
          title={carteBlog[indexToShow].data.title}
          image={carteBlog[indexToShow].data.image.url}
          description={carteBlog[indexToShow].data.description}
          linkToCard={`/actualites/${carteBlog[indexToShow].uid}`}
        />
      </div>
      <div className="flex md:hidden pb-20">
        <CardAll
          title="Toutes nos actualités"
          buttonText="voir tout"
          linkTo={"/actualites"}
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
  const homePage = await client.getByUID("home", "home");
  const carteBlog = await client.getAllByType("blog", {
    orderings: [
      { field: "document.first_publication_date", direction: "desc" },
    ],
  });

  return {
    props: { page, homePage, carteBlog },
  };
}

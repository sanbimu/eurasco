import * as prismic from "@prismicio/client";
import { createClient } from "../../prismicio";
import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";
import SectionTitle from "@/slices/SectionTitle";
import { NewsCard } from "@/components/news/newsCard";
import { CardAll } from "@/components/shared/cardAll";
import { formatDate } from "@/components/utils";
import CardsScrollable from "@/components/shared/cardsScrollable";
import { EventNewsCard } from "@/components/shared/eventNewsCard";

export default function Blog({ page, carteBlog, homePage }) {
  console.log("blogSection", page);
  console.log("carteBlog", carteBlog);
  console.log("homePage", homePage);

  return (
    <>
      {/* HEADER */}
      <div className='min-h-[75vh] flex flex-col w-screen justify-center'>
        <div className='flex flex-col z-20'>
          <div className='font-mont text-white text-4xl uppercase font-bold mx-6 md:mx-12'>
            {page.data.title}
          </div>
          {/* <div className="font-open text-white mx-4 max-h-[200px] overflow-scroll ">
            {page.data.description}
          </div> */}
        </div>
        <Image
          src={page.data.image.url}
          width={394}
          height={850}
          alt='Event Image'
          className='h-[75vh] w-full absolute object-cover lg:max-h-[75vh]'
        />
        <div className='bg-black h-[75vh] w-full z-10 absolute opacity-50 ' />
      </div>
      <div className='mb-12'></div>
      <div className='mb-10 font-open text-sm italic mx-5 md:mx-24 md:text-xl'>
        Publication date: {formatDate(page.first_publication_date)}
      </div>

      {/* CONTENT */}
      {page.data.slices.map((slice, sliceIndex) => (
        <div key={sliceIndex} className='mb-12 flex flex-col gap-10 font-open '>
          <h2 className='font-mont text-black font-bold text-4xl mx-5 md:mx-24'>
            {slice.primary.subtitle}
          </h2>
          <div className='font-open leading-[25px] md:leading-[30px] mx-5 md:mx-24 md:text-xl text-justify'>
            <PrismicRichText field={slice.primary.paragraph} />
          </div>
          {slice.primary.image.url && (
            <Image
              src={slice.primary.image.url}
              width={400}
              height={400}
              alt='Blog Image'
              className='w-full h-[390px] object-cover md:w-auto md:max-h-[450px] md:mx-24 '
            />
          )}
        </div>
      ))}
      <div className='-mt-12 mb-20'>
        {/* INFO */}
        <SectionTitle slice={homePage.data.slices[3]} />

        <CardsScrollable
          cartes={carteBlog}
          buttonLink='/news'
          buttonText='discover our news'
        >
          {carteBlog.slice(0, 5).map((cartesBlog, index) => (
            <>
              {cartesBlog.uid === page.uid ? (
                <></>
              ) : (
                <EventNewsCard
                  key={index}
                  textIndex='NEWS'
                  index={index + 1}
                  title={cartesBlog.data.title}
                  sizeTitle='xl'
                  leadingTitle='6'
                  imageHeader={cartesBlog.data.image.url}
                  date={formatDate(cartesBlog.first_publication_date)}
                  linkToCard={`/news/${cartesBlog.uid}`}
                />
              )}
            </>
          ))}
        </CardsScrollable>
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

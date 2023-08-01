import * as prismic from "@prismicio/client";
import { createClient } from "../../prismicio";
import Image from "next/image";

export default function Blog({ page }) {
  console.log("mes infos", page);

  return (
    <>
      <Image
        src={page.data.image.url}
        width={394}
        height={850}
        alt="Hero Image"
        className=" "
      />
      <div>{page.data.title}</div>
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

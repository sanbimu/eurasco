import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "../slicemachine.config.json";

/**
 * The project's Prismic repository name.
 */
export const repositoryName = config.repositoryName;

/**
 * A list of Route Resolver objects that define how a document's `url` field is resolved.
 *
 * {@link https://prismic.io/docs/route-resolver#route-resolver}
 *
 */

export function linkResolver(doc) {
  switch (doc.type) {
    case "home":
      return "/";
    case "blog":
      return `/actualites/${doc.uid}`;
    case "member":
      return `/membres/${doc.uid}`;
    case "event":
      return `/evenements/${doc.uid}`;
    default:
      return "/";
  }
}

const routes = [
  {
    type: "home",
    uid: "home",
    path: "/",
  },
  {
    type: "blog",
    path: "/actualites/:uid",
  },
  {
    type: "member",
    path: "/membres/:uid",
  },
  {
    type: "event",
    path: "/evenements/:uid",
  },
];

/**
 * Creates a Prismic client for the project's repository. The client is used to
 * query content from the Prismic API.
 *
 * @param {prismicNext.CreateClientConfig} config - Configuration for the Prismic client.
 */
export const createClient = (config = {}) => {
  const client = prismic.createClient(repositoryName, {
    routes,
    ...config,
  });

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};

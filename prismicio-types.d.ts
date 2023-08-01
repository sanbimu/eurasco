// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = {
  [KeyType in keyof T]: T[KeyType];
};
/** Content for Blog documents */
interface BlogDocumentData {
  /**
   * Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  description: prismic.KeyTextField;
  /**
   * Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Blog → Slice Zone*
 *
 */
type BlogDocumentDataSlicesSlice = BlogSectionSlice;
/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BlogDocumentData>, "blog", Lang>;
/** Content for Home documents */
interface HomeDocumentData {
  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Home → Slice Zone*
 *
 */
type HomeDocumentDataSlicesSlice =
  | HeroSlice
  | AboutEurascoSlice
  | SectionTitleSlice;
/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HomeDocumentData>, "home", Lang>;
export type AllDocumentTypes = BlogDocument | HomeDocument;
/**
 * Primary content in AboutEurasco → Primary
 *
 */
interface AboutEurascoSliceDefaultPrimary {
  /**
   * Title field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Subtitle field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismic.KeyTextField;
  /**
   * Description Paragraph One field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.descriptionParagraphOne
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  descriptionParagraphOne: prismic.KeyTextField;
  /**
   * Description Paragraph Two field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.descriptionParagraphTwo
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  descriptionParagraphTwo: prismic.KeyTextField;
  /**
   * Icon One field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.iconOne
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  iconOne: prismic.ImageField<never>;
  /**
   * Title Icon One field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.titleIconOne
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  titleIconOne: prismic.KeyTextField;
  /**
   * Text Icon One field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.textIconOne
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  textIconOne: prismic.KeyTextField;
  /**
   * Icon Two field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.iconTwo
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  iconTwo: prismic.ImageField<never>;
  /**
   * Title Icon Two field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.titleIconTwo
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  titleIconTwo: prismic.KeyTextField;
  /**
   * Text Icon Two field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.textIconTwo
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  textIconTwo: prismic.KeyTextField;
  /**
   * Image Desktop Version field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.imageDesktop
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imageDesktop: prismic.ImageField<never>;
  /**
   * Icon Green Frame field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.iconGreenFrame
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  iconGreenFrame: prismic.ImageField<never>;
  /**
   * Title Green Frame field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.titleGreenFrame
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  titleGreenFrame: prismic.KeyTextField;
  /**
   * Text Green Frame field in *AboutEurasco → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_eurasco.primary.textGreenFrame
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  textGreenFrame: prismic.KeyTextField;
}
/**
 * Default variation for AboutEurasco Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutEurascoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutEurascoSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *AboutEurasco*
 *
 */
type AboutEurascoSliceVariation = AboutEurascoSliceDefault;
/**
 * AboutEurasco Shared Slice
 *
 * - **API ID**: `about_eurasco`
 * - **Description**: `AboutEurasco`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type AboutEurascoSlice = prismic.SharedSlice<
  "about_eurasco",
  AboutEurascoSliceVariation
>;
/**
 * Item in BlogSection → Items
 *
 */
export interface BlogSectionSliceDefaultItem {
  /**
   * Subtitle field in *BlogSection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_section.items[].subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismic.KeyTextField;
  /**
   * Paragraph field in *BlogSection → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_section.items[].paragraph
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  paragraph: prismic.RichTextField;
  /**
   * Image field in *BlogSection → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_section.items[].image
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  image: prismic.ImageField<never>;
}
/**
 * Default variation for BlogSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<BlogSectionSliceDefaultItem>
>;
/**
 * Slice variation for *BlogSection*
 *
 */
type BlogSectionSliceVariation = BlogSectionSliceDefault;
/**
 * BlogSection Shared Slice
 *
 * - **API ID**: `blog_section`
 * - **Description**: `BlogSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type BlogSectionSlice = prismic.SharedSlice<
  "blog_section",
  BlogSectionSliceVariation
>;
/**
 * Primary content in Hero → Primary
 *
 */
interface HeroSliceDefaultPrimary {
  /**
   * Title field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Subtitle field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismic.KeyTextField;
  /**
   * Button field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.button
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  button: prismic.KeyTextField;
  /**
   * Description field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  description: prismic.KeyTextField;
  /**
   * Image Desktop field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.imageDesktop
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imageDesktop: prismic.ImageField<never>;
  /**
   * Image Mobile field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.imageMobile
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imageMobile: prismic.ImageField<never>;
  /**
   * Image Medium field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.imageMedium
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imageMedium: prismic.ImageField<never>;
}
/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *Hero*
 *
 */
type HeroSliceVariation = HeroSliceDefault;
/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: `Hero`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;
/**
 * Primary content in SectionTitle → Primary
 *
 */
interface SectionTitleSliceDefaultPrimary {
  /**
   * Title field in *SectionTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_title.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * Subtitle field in *SectionTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_title.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismic.KeyTextField;
  /**
   * Text field in *SectionTitle → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section_title.primary.text
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  text: prismic.KeyTextField;
}
/**
 * Default variation for SectionTitle Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionTitleSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionTitleSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *SectionTitle*
 *
 */
type SectionTitleSliceVariation = SectionTitleSliceDefault;
/**
 * SectionTitle Shared Slice
 *
 * - **API ID**: `section_title`
 * - **Description**: `SectionTitle`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type SectionTitleSlice = prismic.SharedSlice<
  "section_title",
  SectionTitleSliceVariation
>;
declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }
  namespace Content {
    export type {
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      BlogDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      HomeDocument,
      AllDocumentTypes,
      AboutEurascoSliceDefaultPrimary,
      AboutEurascoSliceDefault,
      AboutEurascoSliceVariation,
      AboutEurascoSlice,
      BlogSectionSliceDefaultItem,
      BlogSectionSliceDefault,
      BlogSectionSliceVariation,
      BlogSectionSlice,
      HeroSliceDefaultPrimary,
      HeroSliceDefault,
      HeroSliceVariation,
      HeroSlice,
      SectionTitleSliceDefaultPrimary,
      SectionTitleSliceDefault,
      SectionTitleSliceVariation,
      SectionTitleSlice,
    };
  }
}

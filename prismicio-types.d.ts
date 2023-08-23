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
/** Content for Event documents */
interface EventDocumentData {
  /**
   * Member field in *Event*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: event.member
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  member: prismic.ContentRelationshipField<"member">;
  /**
   * Member Two field in *Event*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: event.memberTwo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  memberTwo: prismic.ContentRelationshipField<"member">;
  /**
   * Member Three field in *Event*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: event.memberThree
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  memberThree: prismic.ContentRelationshipField;
  /**
   * Logo field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
  /**
   * Event Image field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event.imageEvent
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imageEvent: prismic.ImageField<never>;
  /**
   * Image Header & Card field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event.imageHeader
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imageHeader: prismic.ImageField<never>;
  /**
   * Name field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismic.KeyTextField;
  /**
   * Description field in *Event*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: (max 300 characters)
   * - **API ID Path**: event.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Start date field in *Event*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: event.startDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  startDate: prismic.DateField;
  /**
   * End date field in *Event*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: event.endDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/date
   *
   */
  endDate: prismic.DateField;
  /**
   * Country field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.country
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  country: prismic.KeyTextField;
  /**
   * City field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.city
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  city: prismic.KeyTextField;
  /**
   * Website field in *Event*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: event.website
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  website: prismic.LinkField;
  /**
   * Phone number field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  phone: prismic.KeyTextField;
  /**
   * E-mail address field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: event.mail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  mail: prismic.KeyTextField;
  /**
   * Slice Zone field in *Event*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: event.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<EventDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: event.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Event*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: event.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Event*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: event.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Event → Slice Zone*
 *
 */
type EventDocumentDataSlicesSlice = never;
/**
 * Event document from Prismic
 *
 * - **API ID**: `event`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EventDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<EventDocumentData>, "event", Lang>;
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
  | SectionTitleSlice
  | ContactSectionSlice;
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
/** Content for Member documents */
interface MemberDocumentData {
  /**
   * Logo field in *Member*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: member.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  logo: prismic.ImageField<never>;
  /**
   * Name field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  name: prismic.KeyTextField;
  /**
   * Description field in *Member*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: (max 300 characters)
   * - **API ID Path**: member.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  description: prismic.RichTextField;
  /**
   * Country field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.country
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  country: prismic.KeyTextField;
  /**
   * Website field in *Member*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: member.website
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
   *
   */
  website: prismic.LinkField;
  /**
   * Telephone Number field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  phone: prismic.KeyTextField;
  /**
   * E-mail address field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: member.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  email: prismic.KeyTextField;
  /**
   * Image Focus Desktop field in *Member*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: member.imageDesktop
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imageDesktop: prismic.ImageField<never>;
  /**
   * Image Header & Card field in *Member*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: member.imageHeader
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  imageHeader: prismic.ImageField<never>;
  /**
   * Slice Zone field in *Member*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: member.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/core-concepts/slices
   *
   */
  slices: prismic.SliceZone<MemberDocumentDataSlicesSlice>;
  /**
   * Meta Description field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: member.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_description: prismic.KeyTextField;
  /**
   * Meta Image field in *Member*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: member.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/image
   *
   */
  meta_image: prismic.ImageField<never>;
  /**
   * Meta Title field in *Member*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: member.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  meta_title: prismic.KeyTextField;
}
/**
 * Slice for *Member → Slice Zone*
 *
 */
type MemberDocumentDataSlicesSlice = never;
/**
 * Member document from Prismic
 *
 * - **API ID**: `member`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MemberDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<MemberDocumentData>, "member", Lang>;
export type AllDocumentTypes =
  | BlogDocument
  | EventDocument
  | HomeDocument
  | MemberDocument;
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
 * Primary content in BlogSection → Primary
 *
 */
interface BlogSectionSliceDefaultPrimary {
  /**
   * Subtitle field in *BlogSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_section.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismic.KeyTextField;
  /**
   * Paragraph field in *BlogSection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_section.primary.paragraph
   * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
   *
   */
  paragraph: prismic.RichTextField;
  /**
   * Image field in *BlogSection → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_section.primary.image
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
  Simplify<BlogSectionSliceDefaultPrimary>,
  never
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
 * Primary content in ContactSection → Primary
 *
 */
interface ContactSectionSliceDefaultPrimary {
  /**
   * title field in *ContactSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.primary.title
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  title: prismic.KeyTextField;
  /**
   * subtitle field in *ContactSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  subtitle: prismic.KeyTextField;
  /**
   * description field in *ContactSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.primary.description
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  description: prismic.KeyTextField;
  /**
   * ButtonText field in *ContactSection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
   *
   */
  buttontext: prismic.KeyTextField;
}
/**
 * Default variation for ContactSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Default`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSectionSliceDefaultPrimary>,
  never
>;
/**
 * Slice variation for *ContactSection*
 *
 */
type ContactSectionSliceVariation = ContactSectionSliceDefault;
/**
 * ContactSection Shared Slice
 *
 * - **API ID**: `contact_section`
 * - **Description**: `ContactSection`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ContactSectionSlice = prismic.SharedSlice<
  "contact_section",
  ContactSectionSliceVariation
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
      EventDocumentData,
      EventDocumentDataSlicesSlice,
      EventDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      HomeDocument,
      MemberDocumentData,
      MemberDocumentDataSlicesSlice,
      MemberDocument,
      AllDocumentTypes,
      AboutEurascoSliceDefaultPrimary,
      AboutEurascoSliceDefault,
      AboutEurascoSliceVariation,
      AboutEurascoSlice,
      BlogSectionSliceDefaultPrimary,
      BlogSectionSliceDefault,
      BlogSectionSliceVariation,
      BlogSectionSlice,
      ContactSectionSliceDefaultPrimary,
      ContactSectionSliceDefault,
      ContactSectionSliceVariation,
      ContactSectionSlice,
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

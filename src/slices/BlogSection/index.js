/**
 * @typedef {import("@prismicio/client").Content.BlogSectionSlice} BlogSectionSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<BlogSectionSlice>} BlogSectionProps
 * @param {BlogSectionProps}
 */
const BlogSection = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for blog_section (variation: {slice.variation})
      Slices
    </section>
  );
};

export default BlogSection;

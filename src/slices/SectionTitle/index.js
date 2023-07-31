/**
 * @typedef {import("@prismicio/client").Content.SectionTitleSlice} SectionTitleSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SectionTitleSlice>} SectionTitleProps
 * @param {SectionTitleProps}
 */
const SectionTitle = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col pb-8 items-center px-4">
        <div className="relative z-[60]">
          <h1 className="font-mont font-bold text-[40px] lg:text-[60px] leading-[42px] text-yellow uppercase text-center">
            {slice.primary.title}
          </h1>
          <h2 className="font-mont font-bold text-[22px] lg:text-[25px] leading-[35px] text-black uppercase absolute top-[22px] left-0 right-0 text-center">
            {slice.primary.subtitle}
          </h2>
          <p className="pt-6 pb-6 font-open text-[15px] leading-[25px] text-black text-center">
            {slice.primary.text}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTitle;

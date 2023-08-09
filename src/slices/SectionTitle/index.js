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
      <div className='flex flex-col pb-3 items-center px-4'>
        <h1 className='font-mont font-bold text-[40px] lg:text-[60px] leading-[42px] text-yellow uppercase text-center'>
          {slice.primary.title}
        </h1>
        <h2 className='font-mont font-bold text-[22px] lg:text-[25px] leading-[35px] text-black uppercase -mt-5 text-center'>
          {slice.primary.subtitle}
        </h2>
        <p className=' pb-6 font-open text-[15px] leading-[25px] text-black text-center'>
          {slice.primary.text}
        </p>
      </div>
    </section>
  );
};

export default SectionTitle;

/**
 * @typedef {import("@prismicio/client").Content.MembreSlice} MembreSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<MembreSlice>} MembreProps
 * @param {MembreProps}
 */
const Membre = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for membre (variation: {slice.variation}) Slices
    </section>
  );
};

export default Membre;

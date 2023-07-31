import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

/**
 * @typedef {import("@prismicio/client").Content.AboutEurascoSlice} AboutEurascoSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<AboutEurascoSlice>} AboutEurascoProps
 * @param {AboutEurascoProps}
 */
const AboutEurasco = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    ></section>
  );
};

export default AboutEurasco;

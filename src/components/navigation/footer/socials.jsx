import Image from "next/image";

const Socials = ({ src, alt }) => {
  return (
    <div className="bg-darkGrey bg-opacity-80 rounded-full h-[40px] w-[40px] flex justify-center">
      <Image src={src} alt={alt} width={15} height={15} />
    </div>
  );
};

export default Socials;

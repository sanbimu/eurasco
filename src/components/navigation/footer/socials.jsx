import Image from "next/image";

const Socials = ({ src, alt }) => {
  return (
    <div className=' hover:scale-125 transition rounded-full h-[50px] w-[50px] flex justify-center cursor-pointer'>
      <Image src={src} alt={alt} width={40} height={40} />
    </div>
  );
};

export default Socials;

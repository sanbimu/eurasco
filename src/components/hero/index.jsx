export const Hero = () => {
  return (
    <>
      <div className="md:hidden flex">
        <img src="/images/home.jpg" alt="Home"></img>
        <div className="absolute z-10 flex flex-col self-center">
          <h2 className="uppercase">A PROFESSION OF HOPE</h2>
          <h1 className="uppercase">THE PURE NATURALLY HEALING</h1>
        </div>
      </div>

      <div className="hidden md:flex">
        <img
          src="/images/homebig.jpg"
          alt="Home"
          className="md:object-contain"
        ></img>
      </div>
    </>
  );
};

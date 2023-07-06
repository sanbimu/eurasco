export const Hero = () => {
  return (
    <>
      <div className="md:hidden flex">
        <img src="/images/home.jpg" alt="Home"></img>
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

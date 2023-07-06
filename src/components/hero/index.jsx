export const Hero = () => {
  return (
    <>
      <div className="md:hidden flex h-screen">
        <img src="/images/home.jpg" alt="Home"></img>
      </div>
      <div className="hidden lg:flex h-screen">
        <img src="/images/homebig.jpg" alt="Home"></img>
      </div>
    </>
  );
};

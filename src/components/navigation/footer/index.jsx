const Footer = ({ current }) => {
  return (
    <>
      <div className="flex flex-col w-full fixed bottom-0 bg-darkGreen mt-[140px] py-10 m-auto px-6">
        <h1 className="text-white text-3xl self-center pb-14">EURASCO</h1>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col items-start font-open leading-7 text-sm text-lightGrey">
            <h1 className="text-white font-bold text-xl leading-6 pb-6">
              Quick links
            </h1>
            <p>Acceuil</p>
            <p>Nos événements</p>
            <p>Nos actualités</p>
            <p>Nos membres</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col ">
            <p>FB</p>
            <p>TW</p>
            <p>IG</p>
            <p>YT</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;

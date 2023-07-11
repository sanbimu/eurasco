export default function Events() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="md:hidden flex h-screen">
          <img src="/images/homeMobile.jpg" alt="Home"></img>
        </div>
        <div className="hidden lg:flex h-screen">
          <img src="/images/homeDesktop.jpg" alt="Home"></img>
        </div>
      </div>
    </main>
  );
}

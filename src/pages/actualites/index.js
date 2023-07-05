export default function News() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="md:hidden flex h-screen">
          <img src="/images/home.jpg" alt="Home"></img>
        </div>
        <div className="hidden lg:flex h-screen">
          <img src="/images/homebig.jpg" alt="Home"></img>
        </div>
      </div>
    </main>
  );
}

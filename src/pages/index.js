import Footer from "@/components/navigation/footer";
import HeaderMobile from "@/components/navigation/header/headerMobile";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <HeaderMobile />
        <div className="flex h-screen">
          <img src="/images/home.jpg" alt="Home"></img>
        </div>
        <Footer />
      </div>
    </main>
  );
}

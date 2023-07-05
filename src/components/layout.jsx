import HeaderDesktop from "./navigation/header/headerDesktop";
import HeaderMobile from "./navigation/header/headerMobile";
import Footer from "./navigation/footer";

export default function Layout({ children }) {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
      <main>{children}</main>
      <Footer />
    </>
  );
}

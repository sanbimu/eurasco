import HeaderDesktop from "./navigation/header/headerDesktop";
import HeaderMobile from "./navigation/header/headerMobile";
import FooterMobile from "./navigation/footer/footerMobile";
import FooterDesktop from "./navigation/footer/footerDesktop";

export default function Layout({ children }) {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
      <main>{children}</main>
      <FooterDesktop />
      <FooterMobile />
    </>
  );
}

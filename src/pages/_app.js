import "@/styles/globals.css";
import { Open_Sans, Montserrat } from "next/font/google";

const open = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }) {
  return (
    <main
      className={`${open.variable} font-open ${montserrat.variable} font-mont`}
    >
      <Component {...pageProps} />
    </main>
  );
}

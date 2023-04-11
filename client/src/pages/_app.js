import { Provider } from "@/Context";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Provider>
        <Navbar></Navbar>
        <Component {...pageProps} />
        <Footer></Footer>
      </Provider>
    </>
  );
}

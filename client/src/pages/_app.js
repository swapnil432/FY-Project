import { Provider } from "@/Context";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import "@/styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const exclude = ["/login", "/404"].includes(router.pathname);
  const excludeAdmin = router.pathname.startsWith("/admin");
  return (
    <>
      <Provider>
        {!exclude && !excludeAdmin && <Navbar />}

        <Component {...pageProps} />
        {!exclude && !excludeAdmin && <Footer />}
      </Provider>
    </>
  );
}

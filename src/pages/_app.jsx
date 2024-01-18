import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import theme from "@/theme/index";
import Layout from "@/layouts/global";
import SEO from "next-seo.config";

import "@fontsource/poppins/latin-400.css";
import "@fontsource/poppins/latin-500.css";
import "@fontsource/poppins/latin-600.css";
import "@fontsource/poppins/latin-700.css";
import "@/styles/index.css";
import Loading from "@/components/UI/loading";


const MyApp = ({ Component, pageProps }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <DefaultSeo {...SEO} />

      <ChakraProvider theme={theme}>
        {loading && <Loading />}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};

export default MyApp;

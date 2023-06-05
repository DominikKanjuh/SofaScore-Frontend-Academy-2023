import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@/components/theme/Theme";
import { useState } from "react";
import { GlobalStyles } from "@/components/styles/GlobalStyle";
import Layout from "@/components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState(theme);
  // const updateTheme = () => {
  //   setCurrentTheme(currentTheme === theme ? secondaryTheme : theme);
  // };

  return (
    <>
      <Head>
        <title>Mini Sofascore by D.K.</title>
        <meta
          name="description"
          content="Final project for Sofascore Front-end Academy 2023"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles /> {/* GlobalStyles are applied to the whole app */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

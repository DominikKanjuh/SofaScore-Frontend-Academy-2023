import type { AppProps } from "next/app";
import { ThemeContext } from "styled-components";
import { useState } from "react";
import { createContext } from "react";
import { GlobalStyles } from "@/components/styles/GlobalStyle";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Theme from "@/contexts/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
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

      <Theme>
        <GlobalStyles /> {/* GlobalStyles are applied to the whole app */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}

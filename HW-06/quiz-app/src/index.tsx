import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./globals.css";
import Layout from "./components/Layout";
import { SWRConfig } from "swr";

//@ts-ignore
const fetcher = (...args) =>
  //@ts-ignore
  fetch(...args).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("404");
    }
  });

ReactDOM.render(
  <BrowserRouter>
    <SWRConfig value={{ fetcher: fetcher }}>
      <Layout>
        <App />
      </Layout>
    </SWRConfig>
  </BrowserRouter>,
  document.getElementById("root")
);

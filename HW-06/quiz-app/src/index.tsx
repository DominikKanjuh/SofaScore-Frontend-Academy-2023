import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./globals.css";
import Layout from "./components/Layout";

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <App />
    </Layout>
  </BrowserRouter>,
  document.getElementById("root")
);

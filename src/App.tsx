import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";

import Header from "./components/Header";
import Financials from "./components/Financials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Layout id="app" className="layout">
        <Header />
        <Financials />
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;

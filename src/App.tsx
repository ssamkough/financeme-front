import React from "react";

import Header from "./components/Header";
import Financials from "./components/Financials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="main-container">
      <Header />
      <Financials />
      <Footer />
    </div>
  );
};

export default App;

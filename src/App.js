import React from "react";
import "./App.css";
import Footer from "./Layout/Main/Footer/Footer";
import Header from "./Layout/Main/Header/Header";

import ProductsLists from "./Views/Components/Products/ProductsLists";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomeContent /> */}
      <ProductsLists />
      <Footer />
    </div>
  );
}

export default App;

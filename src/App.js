import React from "react";
import "./App.css";
import Footer from "./Layout/Main/Footer/Footer";
import Header from "./Layout/Main/Header/Header";
import Restaurant from "./Views/Components/RestaurantList/Restaurant";
import HomeContent from "./Layout/Main/HomeContent/HomeContent";
import ProductsLists from "./Views/Components/Products/ProductsLists";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Restaurant /> */}
      <ProductsLists />
      {/* <HomeContent /> */}
      <Footer />
    </div>
  );
}

export default App;

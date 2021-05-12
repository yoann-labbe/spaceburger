import React from "react";
import "./App.css";
import Footer from "./Layout/Main/Footer/Footer";
import Header from "./Layout/Main/Header/Header";
import Restaurant from "./Views/Components/RestaurantList/Restaurant";
import HomeContent from "./Layout/Main/HomeContent/HomeContent";
import Menu from "./View/Components/Menu";
import MenuProduits from "./View/Components/MenuProduits";

import ProductsLists from "./Views/Components/Products/ProductsLists";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Restaurant /> */}
      <ProductsLists />
      {/* <HomeContent /> */}
      <ProductsLists />
      <MenuProduits />
      {/* <Menu /> */}
      <Footer />
    </div>
  );
}

export default App;

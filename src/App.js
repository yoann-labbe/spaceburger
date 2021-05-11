import React from "react";
import "./App.css";
import Footer from "./Layout/Main/Footer/Footer";
import Header from "./Layout/Main/Header/Header";
import HomeContent from "./Layout/Main/HomeContent/HomeContent";
import Menu from "./View/Components/Menu";
import MenuProduits from "./View/Components/MenuProduits";


function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomeContent /> */}
      <MenuProduits />
      {/* <Menu /> */}
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Footer from "./Layout/Main/Footer/Footer";
import Header from "./Layout/Main/Header/Header";
import HomeContent from "./Layout/Main/HomeContent/HomeContent";
import Menu from "./View/Components/Menu";


function App() {
  return (
    <div className="App">
      <Header />
      {/*<HomeContent />*/}
      <Menu />
      <Footer />
    </div>
  );
}

export default App;

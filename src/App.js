import React from "react";
import "./App.css";
import Footer from "./Layout/Main/Footer/Footer";
import Header from "./Layout/Main/Header/Header";
import HomeContent from "./Layout/Main/HomeContent/HomeContent";


function App() {
  return (
    <div className="App">
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default App;

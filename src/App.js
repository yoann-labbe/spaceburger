import React from "react";
import "./App.css";
import Footer from "./Layout/Main/Footer/Footer";
import Header from "./Layout/Main/Header/Header";
import HomeContent from "./Layout/Main/HomeContent/HomeContent";
import Menu from "./View/Components/Menu";
import Load from "./View/Components/Load";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./Layout/Main/Main";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Main>
                <HomeContent />
              </Main>
            )}
          />

          <Header />

          {/*<Menu />*/}
          <Load />
          <Footer />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

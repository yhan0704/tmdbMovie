import React from "react";
import "../App.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../Components/Navigation";
import ForGF from "../Components/ForGF";
import MainPage from "../Components/MainPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/romance" component={ForGF}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

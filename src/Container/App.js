import React from "react";
import "../App.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "../Components/Navigation";
import MainPage from "../Components/MainPage";
import Romance from "../Components/genres/Romance";
import Action from "../Components/genres/Action";
import Mystery from "../Components/genres/Mystery";
import Horror from "../Components/genres/Horror";
import Comedy from "../Components/genres/Comedy";
import DetailPage from "../Components/DetailPage";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route path="/" exact component={MainPage}></Route>
          <Route path="/romance" component={Romance} />
          <Route path="/action" component={Action} />
          <Route path="/mystery" component={Mystery} />
          <Route path="/horror" component={Horror} />
          <Route path="/comedy" component={Comedy} />
          <Route path="/:id" component={DetailPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

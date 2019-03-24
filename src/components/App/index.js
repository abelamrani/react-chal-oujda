import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// Commons
import Header from "common/Header";
import Footer from "common/Footer";

// Pages
import Home from "pages/Home";
import About from "pages/About";
import Contact from "pages/Contact";

// Mocks
import navList from "mocks/navList";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header appTitle="Sqli App" navLinks={navList} />
          <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={About} />
            <Route path="/contact" component={Contact} />

            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

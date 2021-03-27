import React, { Component } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Blogs from "./components/Blogs";
import Portfolio from "./components/Portfolio";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="pages-stack">
          <Home />
          <About />
          <Portfolio />
          <Blogs />
          <Contact />
        </div>
        <button className="menu-button">
          <span>Menu</span>
        </button>
      </div>
    );
  }
}

export default App;

import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import PostDetail from "./components/PostDetail";
import Blog from "./components/Blog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={About} path="/about" />
        <Route component={Contact} path="/contact" />
        <Route component={PostDetail} path="/blog/:slug" />
        <Route component={Blog} path="/blog" />
        <Route component={Home} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

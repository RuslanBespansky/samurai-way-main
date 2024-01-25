import React, { useState } from "react";
import "./App.css";
import { Console } from "console";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

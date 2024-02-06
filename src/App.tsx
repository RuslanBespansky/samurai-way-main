import React, { useState } from "react";
import "./App.css";
import { Console } from "console";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Profile } from "./components/profile/Profile";
import { Dialogs } from "./components/dialogs/Dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import { News } from "./components/news/News";
import { Music } from "./components/music/Music";
import { Seting } from "./components/seting/Seting";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route path="/dialogs" component={Dialogs} />
          <Route path="/profile" component={Profile} />
          <Route path="/news" component={News}/>
          <Route path="/music" component={Music}/>
          <Route path="/seting" component={Seting}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

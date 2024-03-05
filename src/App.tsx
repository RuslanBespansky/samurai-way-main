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

function App(props: any) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Nav />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                state={props.state.dialogsPage}
                
              />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/seting" render={() => <Seting />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

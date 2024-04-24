import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import store, { StoreType } from "./State";




export let rerenderEntireTree = () => {
    ReactDOM.render(
      <React.StrictMode>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        changeNewPostText={store.changeNewPostText.bind(store)}
      />
      </React.StrictMode>,
      document.getElementById("root")
    );
  };
  
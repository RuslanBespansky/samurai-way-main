import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import state, { RootStateType, addPost, changeNewPostText } from "./redux/State";
import { rerenderEntireTree } from "./redux/Render";

import store from "./redux/State";



store.subscribe(rerenderEntireTree)
rerenderEntireTree()



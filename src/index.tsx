import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {findAllByDisplayValue} from "@testing-library/react";
import  state  from "./redux/State";




ReactDOM.render(<App state = {state}/>, document.getElementById("root"));



 

  
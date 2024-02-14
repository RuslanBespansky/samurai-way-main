import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {findAllByDisplayValue} from "@testing-library/react";

let postData = [
    { id: 1, message: "Hi, how are you?", like: 15 },
    { id: 2, message: "It's  my firs post", like: 8 },
    { id: 3, message: "It's  me", like: 23 },
    { id: 4, message: "HELLO", like: 5 },
  ];


 let dialogsData = [
    { id: 1, name: "Ruslan" },
    { id: 2, name: "Max" },
    { id: 3, name: "Inna" },
    { id: 4, name: "Artur" },
    { id: 5, name: "Lena" },
    { id: 6, name: "Veronika" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Hello" },
  ];

ReactDOM.render(<App dialogsData ={dialogsData}  messages = {messages} postData ={postData}/>, document.getElementById("root"));


//  export let dialogsData = [
//     { id: 1, name: "Ruslan" },
//     { id: 2, nam

 

  
import React from "react";
import classes from "./Myposts_css.module.css";
import { Post } from "./post/Post";
export const MyPosts = () => {
  return (
    <div>
      {" "}
      my post
      <div>
        <textarea></textarea>
        <button>Add post</button>
        
      </div>
     <div >
      <Post message = {"Hi, how are you?"} like={15} /> 
      <Post message = "It's  my firs post"  like={9}/> 
     
     </div>
      
    
    </div>
  );
};

import { useRef } from "react";
import React from "react";
import classes from "./Myposts_css.module.css";
import { Post } from "./post/Post";



export const MyPosts = (props:any) => {
  

let postsElements =props.postData.map((p:any) =>  <Post message={p.message} like={p.like} />);

let newPostElement = useRef(null);

let addPost = () => {
  let text = newPostElement.current;
  alert("HuI");
}


  return (
    <div className={classes.postsBlock}>
      {" "}
      <h3>my post</h3>
      <div>
        <div>
          <textarea ref = {newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>

        {postsElements}
      
      </div>
    </div>
  );
};

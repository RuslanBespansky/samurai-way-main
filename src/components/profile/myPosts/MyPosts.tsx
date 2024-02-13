import React from "react";
import classes from "./Myposts_css.module.css";
import { Post } from "./post/Post";
export const MyPosts = () => {
  let postData = [
    { id: 1, message: "Hi, how are you?", like: 15 },
    { id: 2, message: "It's  my firs post", like: 8 },
    { id: 3, message: "It's  me", like: 23 },
    { id: 4, message: "HELLO", like: 5 },
  ];

let postsElements = postData.map(p =>  <Post message={p.message} like={p.like} />);


  return (
    <div className={classes.postsBlock}>
      {" "}
      <h3>my post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>

        {postsElements}
      
      </div>
    </div>
  );
};

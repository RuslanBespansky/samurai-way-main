import React from "react";
import classes from "./Myposts_css.module.css";
import { Post } from "./post/Post";




export const MyPosts = (props:any) => {
  

let postsElements =props.postData.map((p:any) =>  <Post message={p.message} like={p.like} />);


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

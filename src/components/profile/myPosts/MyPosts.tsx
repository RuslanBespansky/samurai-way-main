import React from "react";
import classes from "./Myposts_css.module.css";
import { Post } from "./post/Post";
export const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
  
      {" "}
     <h3>
     my post
      </h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        <Post message={"Hi, how are you?"} like={15} />
        <Post message="It's  my firs post" like={9} />
      </div>
    </div>
  );
};

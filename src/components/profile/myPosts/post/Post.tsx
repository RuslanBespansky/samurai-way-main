import React from "react";
import classes from "./Post_css.module.css";

type PostProps = {
  message:string
  like:number
}


export const Post = (props:PostProps) => {
  return (
    <div className={classes.item}>
      {" "}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaQ9cTfkxnZYQGwL-wKFXeQGC0ba86S2SvgQ&usqp=CAU"
        alt=""
      />
      {props.message}
      <div>
        <span > {props.like} like</span>
      </div>
    </div>
  );
};

import React from "react";
import classes from "./Friends_css.module.css";

export default function Friends() {
  return (
    <div className={classes.friends}>
      <span>Friends</span>
      <div className={classes.circleFriends}>
        {" "}
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
        <div className={classes.circle}></div>
      </div>
      <div className={classes.nameFriends}><span></span><span></span><span></span></div>
    </div>
  );
}

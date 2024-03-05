import { NavLink } from "react-router-dom";
import classes from "./../Dialogs_css.module.css";
import React from "react";


export const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
      <div className={classes.dialog + " " + classes.active}>
        <img  className={classes.img} src="https://images2.imgbox.com/5e/a5/5GyxIzy3_o.jpg" alt="" />
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    );
  };
import { NavLink } from "react-router-dom";
import classes from "./../Dialogs_css.module.css";
import React from "react";


export const DialogItem = (props: any) => {
    let path = "/dialogs/" + props.id;
    return (
      <div className={classes.dialog + " " + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
      </div>
    );
  };
import classes from "./../Dialogs_css.module.css";
import React from "react";


export const Message = (props: any) => {
    return <div className={classes.message}>{props.message}</div>;
  };
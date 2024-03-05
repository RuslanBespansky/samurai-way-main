import classes from "./../Dialogs_css.module.css";
import React from "react";


export const Message = (props: any) => {
    return (<div className= {classes.messageInput}>
     
      <div className={classes.message}> <div className= {classes.inputMessage}></div> {props.message}</div>
      </div>
    )
  };
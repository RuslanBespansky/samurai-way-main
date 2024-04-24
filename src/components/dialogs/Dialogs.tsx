import React from "react";
import classes from "./Dialogs_css.module.css";

import { DialogItem } from "./dialogItem/DialogItem";
import { Message } from "./message/Message";





export const Dialogs = (props:any) => {
 

  let dialogsElements = props.state.dialogsData.map((d:any) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElements =props.state.messages.map((m:any) => ( 
    <Message message={m.message} id={m.id} />
  ));

  return (
    
    <div className={classes.dialogs}>
      
      <div className={classes.dialogs_item}> {dialogsElements}</div>
      <div className={classes.messages}>
        {messageElements}
       
      </div>
    </div>
  );
};

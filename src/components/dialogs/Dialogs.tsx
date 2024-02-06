import React from "react";
import classes from "./Dialogs_css.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props: any) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={classes.dialog + " " + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props:any)  => {
  return (
    <div className={classes.message}>{props.message}</div>

  )
}



export const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>
        <DialogItem name="Ruslan" id="1" />

        <DialogItem name="Max" id="2" />

        <DialogItem name="Inna" id="3" />

        <DialogItem name="Artur" id="4" />

        <DialogItem name="Katya" id="5" />

        <DialogItem name="Veronika" id="6" />
      </div>
      <div className={classes.messages}>
       <Message message = "Hi"/>
       <Message message = "How are you?"/>
       <Message message = "Hello"/>
       
      </div>
    </div>
  );
};

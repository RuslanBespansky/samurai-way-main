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

const Message = (props: any) => {
  return <div className={classes.message}>{props.message}</div>;
};

export const Dialogs = () => {
  let dialogsData = [
    { id: 1, name: "Ruslan" },
    { id: 2, name: "Max" },
    { id: 3, name: "Inna" },
    { id: 4, name: "Artur" },
    { id: 5, name: "Lena" },
    { id: 6, name: "Veronika" },
  ];

  let messages = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Hello" },
  ];

  let dialogsElements = dialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogs_item}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messageElements}
       
      </div>
    </div>
  );
};

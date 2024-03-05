import React from "react";
import classes from "./Profile_css.module.css";
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./myPosts/profileinfo/ProfileInfo";
export const Profile = (props:any) => {

  

  return (
    <div>
      <ProfileInfo />

      <MyPosts postData ={props.state.postData} />
    </div>
  );
};

import React from "react";
import classes from "./Profile_css.module.css";
import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./myPosts/profileinfo/ProfileInfo";
export const Profile = () => {
  return (
    <div>
      <ProfileInfo />

      <MyPosts />
    </div>
  );
};

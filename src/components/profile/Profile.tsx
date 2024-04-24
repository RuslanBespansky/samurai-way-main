import React from "react";

import { MyPosts } from "./myPosts/MyPosts";
import { ProfileInfo } from "./myPosts/profileinfo/ProfileInfo";
import { RootStateType } from "../../redux/State";

type ProfileType = {
  state: RootStateType;
  addPost: (postMessage: string) => void;
  newPostText: string;
  changeNewPostText: (newText: string) => void;
};

export const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />

      <MyPosts
        postData={props.state.profilePage.postData}
        addPost={props.addPost}
        newPostText={props.state.profilePage.newPostText}
        changeNewPostText={props.changeNewPostText}
      />
    </div>
  );
};

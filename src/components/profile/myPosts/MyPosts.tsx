import { ChangeEvent } from "react";
import React from "react";
import classes from "./Myposts_css.module.css";
import { Post } from "./post/Post";

import { PostDataType } from "../../../redux/State";

type MyPostsType = {
  postData: Array<PostDataType>;
  addPost: (postMessage: string) => void;
  newPostText: string;
  changeNewPostText: (newText: string) => void;
};

export const MyPosts = (props: MyPostsType) => {
  let postsElements = props.postData.map((p: any) => (
    <Post message={p.message} like={p.like} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  type addPostType = {
    message: string;
    addPost: (postMessage: string) => void;
  };

  let addPost = () => {
    // let text = newPostElement.current?.value;
    // props.addPost(text);
    if (newPostElement.current) {
      props.addPost(newPostElement.current.value);
    }
  };

  let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewPostText(e.currentTarget.value);
  };

  return (
    <div className={classes.postsBlock}>
      {" "}
      <h3>my post</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMassage from "./WelcomeMassage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, fatch } = useContext(PostListData);
  

  return (
    <>
      {fatch && <LoadingSpinner />}
      {!fatch && postList.length === 0 && <WelcomeMassage />}
      {!fatch && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;

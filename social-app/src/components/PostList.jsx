import React, { useContext, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMassage from "./WelcomeMassage";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [dataFetch, setDataFetch] = useState(false);
  if (!dataFetch) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetch(true);
  }

  // const handleOnGetPostClick = (posts) => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };
  

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMassage  />
      )}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;

import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMassage from "./WelcomeMassage";
import LoadingSpinner from "./LoadingSpinner";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fatch, setFetch] = useState(false);

  useEffect(() => {
    setFetch(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetch(false);
      });
  }, []);

  return (
    <>
      {fatch && <LoadingSpinner />}
      {!fatch && postList.length === 0 && <WelcomeMassage />}
      {!fatch && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;

import React, { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/post-list-store";
import WelcomeMassage from "./WelcomeMassage";

function PostList() {
  const {postList} = useContext(PostListData);
  return (
    <>
    {postList.length==0 && <WelcomeMassage/>}
    {postList.map((post)=>(<Post key={post.id} post={post} />))}</>

      
  );
}

export default PostList;

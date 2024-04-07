import { createContext, useEffect, useReducer, useState } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "Delete_Post") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }

   else if (action.type === "Add_Initial_Post") {
    newPostList = action.payload.posts
  } 
  
  else if (action.type === "Add_Post") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, []);
  const addPost = (post) => {
    dispatch({
      type: "Add_Post",
      payload: post
        
    });
  };
  const addInitialPosts = (posts) => {
    dispatch({
      type: "Add_Initial_Post",
      payload: { posts },
    });
  };
  const deletePost = (postId) => {
    dispatch({
      type: "Delete_Post",
      payload: {
        postId,
      },
    });
  };
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
    <PostList.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
// const DEFULT_POST_LIST = [
//   {
//     id: "1",
//     userId:"user-19",
//     title: "Going to Mumbai for celebrating vacation",
//     body: "go to bed",
//     hastag: ["vacation", "happy"],
//     reactions: "3",
//   },
//   {
//     id: "2",
//     userId:'user-9',
//     title: "hi",
//     body: "go to bed",
//     hastag: ["sleepMood", "GoodNight"],
//     reaction: "19",
//   },
// ];
export default PostListProvider;

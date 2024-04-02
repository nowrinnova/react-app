import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "Delete_Post") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
    
  }
  return newPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, DEFULT_POST_LIST);
  const addPost = () => {
    dispatch({
      type:"Add_Post",
    })
  };
  const deletePost = (postId) => {
    dispatch({
      type: "Delete_Post",
      payload: {
        postId,
      },
    });
  };
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai for celebrating vacation",
    body: "go to bed",
    hastag: ["vacation", "happy"],
    reaction: "3",
  },
  {
    id: "2",
    title: "hi",
    body: "go to bed",
    hastag: ["sleepMood", "GoodNight"],
    reaction: "19",
  },
];
export default PostListProvider;

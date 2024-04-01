import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  return currentPostList;
};
const PostListProvider = ({ children }) => {
  const [postList, dispatch] = useReducer(postListReducer, DEFULT_POST_LIST);
  const addPost = () => {};
  const deletePost = () => {};
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};
const DEFULT_POST_LIST = [
  {
    id: "1",
    title: "hi",
    body: "go to bed",
  },
  { id: "2", title: "hi", body: "go to bed" },
];
export default PostListProvider;

import { useState } from "react";
import "./App.css";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";
import PostListProvider from "./store/post-list-store";

function App() {
  const [state, setState] = useState("Create Post");
  return (
    <PostListProvider >
      {" "}
      <div className="container">
        <SideBar state={state} setState={setState}></SideBar>
        {state === "Home" ? <PostList></PostList> : <CreatePost></CreatePost>}
      </div>
    </PostListProvider>
  );
}

export default App;

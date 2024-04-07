import { useState } from "react";
import {Outlet} from "react-router-dom"
import "./App.css";
import CreatePost from "../components/CreatePost";
import PostList from "../components/PostList";
import SideBar from "../components/SideBar";
import PostListProvider from "../store/post-list-store";


function App() {
  const [state, setState] = useState("Home");
  return (
    <PostListProvider>
      <div className="container">
        <SideBar state={state} setState={setState}></SideBar>
        <div>
          <Outlet/>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;

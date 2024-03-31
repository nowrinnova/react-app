import "./App.css";
import PostList from "./components/PostList";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="container">
        <SideBar></SideBar>
        <PostList></PostList>
      </div>
    </>
  );
}

export default App;

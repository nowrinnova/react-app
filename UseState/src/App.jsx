import "./App.css";
import CreatePost from "./components/UseState/CreatePost";
import HomePage from "./components/UseState/HomePage";
import ReducerHookTutorial from "./components/UseState/ReducerHookTutorial";
import SideBar from "./components/UseState/SideBar";
function App() {
  return (
    <>
      {/* <StateTutorial></StateTutorial> */}
      {/* <ReducerHookTutorial></ReducerHookTutorial> */}
      <div className="container">
        <SideBar></SideBar>
        <HomePage></HomePage>
        <CreatePost></CreatePost>
      </div>
    </>
  );
}

export default App;

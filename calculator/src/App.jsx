import "./App.css";
import Buttoncontainer from "./components/Buttoncontainer";
import Display from "./components/display";

function App() {
  const array=['c','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return (
    <>
      <div className="calculator-border">
        <Display />
        <div className="button-container">
          <Buttoncontainer buttonValue={array}></Buttoncontainer>
        </div>
      </div>
    </>
  );
}

export default App;

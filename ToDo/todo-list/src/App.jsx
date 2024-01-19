import "./App.css";
import Addname from "./components/Addname";
import Addtodo from "./Addtodo";
import Todoitems from "./components/Todoitems";
function App() {
  const todoelement = [
    {
      name: "nova",
      date: "12/2/2023",
    },
    {
      name: "nowsaba",
      date: "12/2/2023",
    },
    {
      name: "nasrin",
      date: "12/2/2023",
    },
  ];
  return (
    <>
      <center>
        <Addname></Addname>
        <Addtodo></Addtodo>
        <Todoitems todoItem={todoelement}></Todoitems>
      </center>
    </>
  );
}
export default App;

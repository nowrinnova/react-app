import "./App.css";
import Addname from "./components/Addname";
import Addtodo from "./Addtodo";
import Todoitems from "./components/Todoitems";
import { useState } from "react";
function App() {
  const initialtodoelement = [
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

  let [todoElement, setTodoElement] = useState(initialtodoelement);
  const handleNewItem = (name, date) => {
    console.log(`user name:${name} and date is ${date}`);
    const newTodoItem=[...todoElement,{name:name,date:date}];
    setTodoElement(newTodoItem);

  };
  return (
    <>
      <center>
        <Addname></Addname>
        <Addtodo onNewItem={handleNewItem}></Addtodo>
        <Todoitems todoItem={todoElement}></Todoitems>
      </center>
    </>
  );
}
export default App;

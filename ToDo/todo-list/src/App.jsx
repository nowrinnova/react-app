import "./App.css";
import Addname from "./components/Addname";
import Addtodo from "./Addtodo";
import Todoitems from "./components/Todoitems";
import WelcomeMassage from  "./components/WelcomeMassage"
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
    const newTodoItems=[...todoElement,{name:name,date:date}];
    setTodoElement(newTodoItems);

  };
  const handleDeleteItem=(todoname)=>{
    const newTodoItems=todoElement.filter((item)=>item.name !== todoname);
    setTodoElement(newTodoItems);

  }
  return (
    <>
      <center>
        <Addname></Addname>
        <Addtodo onNewItem={handleNewItem}></Addtodo>
        {todoElement.length===0 && <WelcomeMassage></WelcomeMassage>}
        <Todoitems todoItem={todoElement} onDeleteItem={handleDeleteItem}></Todoitems>
      </center>
    </>
  );
}
export default App;

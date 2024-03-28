import { useState } from "react";
import Header from "./component/Header";
import Home from "./component/Home";
function App() {
  const initialtodoList=[{
    name:"Bye Milk",
    date:"17/2/2024",
  },
  {
    name:"Go To Office",
    date:"18/2/2024",
  }
]
const [todoList,setTodoList]=useState(initialtodoList);
// const handleNewItem =(name,date)=>{
//   console.log(`user name:${name} and date is ${date}`);
                                                          //[---another way to add new array to old array ]
//   const newTodoList=[...todoList,{name:name,date:date}]
//   setTodoList(newTodoList);
// }
const handleNewItem =(name,date)=>{
  console.log(`user name:${name} and date is ${date}`);
  setTodoList((currentVal)=>[...currentVal,{name:name,date:date}
  ]);
}

const handleDeleteItem =(todoname)=>{
  const newTodoList = todoList.filter((item)=>item.name !== todoname) ;
  setTodoList(newTodoList);

}
  return (
    <>
      <Header></Header>
      <Home todoList={todoList} onNewItem={handleNewItem} onDeleteItem={handleDeleteItem}></Home>
      
    </>
  );
}

export default App;

import Header from "./component/Header";
import Home from "./component/Home";
function App() {
  const todoList=[{
    name:"Bye Milk",
    date:"17/2/2024",
  },
  {
    name:"Go To Office",
    date:"18/2/2024",
  }
]
  return (
    <>
      <Header></Header>
      <Home todoList={todoList}></Home>
      
    </>
  );
}

export default App;

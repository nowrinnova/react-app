import TodoItem from "./ToDoItem";

const ToDoItems = ({todoList}) => {
  return <>
   {todoList.map((item) => (
          <TodoItem todoname={item.name} tododate={item.date} ></TodoItem>
        ))}
  </>;
};
export default ToDoItems;

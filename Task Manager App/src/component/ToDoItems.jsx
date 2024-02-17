import TodoItem from "./ToDoItem";

const ToDoItems = ({todoList, onDeleteItem}) => {
  return <>
   {todoList.map((item) => (
          <TodoItem todoname={item.name} tododate={item.date} onDeleteItem={onDeleteItem} ></TodoItem>
        ))}
  </>;
};
export default ToDoItems;

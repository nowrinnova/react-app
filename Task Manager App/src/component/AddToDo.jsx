import { useState } from "react";
import styles from "./AddToDo.module.css";
import { IoAdd } from "react-icons/io5";
const AddToDo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  const handleTodoName = (event) => {
    setTodoName(event.target.value);
  };
  const handleTodoDate = (event) => {
    setTodoDate(event.target.value);
  };
  const HandleAddTodo = (event) => {
event.preventDefault();
console.log(event);
    // onNewItem(todoName, todoDate);
    // setTodoName("");
    // setTodoDate("");
  };
  return (
    <>
      <center>
        <h6 className={styles.addToDoMassage}>
          Add Task <i className="fa-solid fa-plus"></i>
        </h6>
      </center>
      <div className={styles.addToDo_container}>
        <div className="container text-center">
          <form className="row"  onSubmit={HandleAddTodo}>
            <div className="col-4">
              <input
                className="addName"
                type="text"
                placeholder="add task"
                onChange={handleTodoName}
              />
            </div>
            <div className="col-4">
              <input
                className="addDate"
                type="date"
                onChange={handleTodoDate}
              />
            </div>
            <div className="col-2">
              <button className={styles.addToDo} >
                <IoAdd />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default AddToDo;

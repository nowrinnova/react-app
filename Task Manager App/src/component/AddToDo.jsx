import { useState, useRef } from "react";
import styles from "./AddToDo.module.css";
import { IoAdd } from "react-icons/io5";
const AddToDo = ({ onNewItem }) => {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const HandleAddTodo = (event) => {
    event.preventDefault();
    // const todoDate= todoDateElement.current.value;
    // const todoName= todoNameElement.current.value;
    onNewItem(todoNameElement.current.value, todoDateElement.current.value);
    todoDateElement.current.value='';
    todoNameElement.current.value='';
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
          <form className="row" onSubmit={HandleAddTodo}>
            <div className="col-4">
              <input
                className="addName"
                type="text"
                placeholder="add task"
                ref={todoNameElement}
              />
            </div>
            <div className="col-4">
              <input className="addDate" type="date" ref={todoDateElement} />
            </div>
            <div className="col-2">
              <button className={styles.addToDo}>
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

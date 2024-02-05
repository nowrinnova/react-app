import { useState } from "react";

function Addtodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  const handleNameChange = (event) => {
    setTodoName (event.target.value) ;
  }
  const handleDateChange = (event) => {
    setTodoDate  (event.target.value) ;
  }
  const handleAddButton = () => {
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  }
  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter the name"
              className="input-typ"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input type="date" value={todoDate} onChange={handleDateChange} />
          </div>
          <div className="col-4">
            <button
              className="btn btn-success kg-btn"
              onClick={handleAddButton}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtodo;

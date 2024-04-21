import React, { useRef } from "react";
import { useDispatch } from "react-redux";

function Controls() {
  const inputRef =useRef();
  const inputSubtractRef= useRef();
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch({ type: "increment" });
  };
  const handleDecrement = () => {
    dispatch({ type: "decrement" });
  };
const handleAdd=()=>{
  dispatch({
    type:"Add",
    payload:inputRef.current.value,
  })
}
const handleSubtract=()=>{
  dispatch({
    type:"Subtract",
    payload:inputSubtractRef.current.value,
  })
}
  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center controls-row">
        <input type="text" placeholder="Enter the number"  ref={inputRef}/>
        <button
          type="button"
          className="btn btn-info"
          onClick={handleAdd}
        >
          Add
        </button>
        <input type="text" placeholder="Enter the number"  ref={inputSubtractRef}/>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleSubtract}
        >
          subtract
        </button>
      </div>
    </>
  );
}
export default Controls;

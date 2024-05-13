import React from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../store/controler";
function Buttons() {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        className="btn btn-success btn"
        onClick={() => dispatch(increment())}
      >
        +
      </button>
      <button
        type="button"
        className="btn btn-danger btn"
        onClick={() => dispatch(decrement())}
      >
        -
      </button>
      <button type="button" className="btn btn-primary btn">
        {" "}
        5 Add
      </button>
    </div>
  );
}

export default Buttons;

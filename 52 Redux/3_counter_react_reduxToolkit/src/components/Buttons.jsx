import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement, add5, add, sub } from "../store/controler";
import { storedata } from "../store/displayData";
function Buttons() {
  const dispatch = useDispatch();
  const inputdata = useRef();
  const handleAdd = () => {
    dispatch(
      add({ num: inputdata.current.value }),
      (inputdata.current.value = "")
    );
  };
  const handleSub = () => {
    dispatch(
      sub({ num: inputdata.current.value }),
      (inputdata.current.value = "")
    );
  };
  const handleData = () => {
    dispatch(
      storedata(
        {
         a:[{
          type:"student",
          study:"class 9"
         },
         {
          type:"doctor",
          study:"BongoBondhu Medical Collage"
         },
         {
          type:"Engineer",
          study:"AIUB university"
         },
         ]
         

        })
    );
  };

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
      <button
        type="button"
        className="btn btn-primary btn"
        onClick={() => dispatch(add5())}
      >
        {" "}
        5 Add
      </button>
      <br />
      <input placeholder="enter number" ref={inputdata} />

      <button type="button" className="btn btn-warning btn" onClick={handleAdd}>
        Add
      </button>
      <button type="button" className="btn btn-danger btn" onClick={handleSub}>
        Subtract
      </button>
      <br />
      <button type="button" className="btn btn-dark" onClick={handleData}>
        submit
      </button>
    </div>
  );
}

export default Buttons;

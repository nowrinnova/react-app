import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement ,add5,add} from "../store/controler";
function Buttons() {
  const dispatch = useDispatch();
  const inputdata=useRef();
  const handleInput =()=>{
    dispatch(add({num:inputdata.current.value}),inputdata.current.value="")
  }

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
      <button type="button" className="btn btn-primary btn" onClick={()=>dispatch(add5())}>
        {" "}
        5 Add
      </button>
      <br />
      <input  placeholder="enter number"  ref={inputdata} />
      
      <button type="button" className="btn btn-warning btn" onClick={handleInput} >
        Add
      </button>
    </div>
  );
  
}

export default Buttons;

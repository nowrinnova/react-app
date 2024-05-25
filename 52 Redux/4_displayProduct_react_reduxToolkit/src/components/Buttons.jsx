import React from "react";
import { getData } from "../store/display";
import { useDispatch } from "react-redux";
function Buttons() {
  const dispatch = useDispatch();
  const handleItem = () => {
    // dispatch(
    //   fetch("https://dummyjson.com/products")
    //     .then((res) => res.json())
    //     .then((obj) => storeItem(obj.products))
    // );
  };
  return (
    <div>
      <center>
        <button type="button" className="btn btn-danger" onClick={()=>dispatch(getData)}>
          Danger..
        </button>
      </center>
    </div>
  );
}

export default Buttons;

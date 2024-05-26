import React from "react";
import { useDispatch } from "react-redux";
import {fatch} from "../store/fatchApi";
import { useSelector } from "react-redux";
function ApiFetch() {
  const dispatch=useDispatch()
  const handleApi = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      // .then((data) => data.products)
      .then(obj=>
        dispatch(fatch(obj.products))
        )
  };
  

  return (
    
    <div>
      <button type="button" className="btn btn-primary" onClick={handleApi}>
        fetch
      </button>
      
    </div>
  );
}

export default ApiFetch;

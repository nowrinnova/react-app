import React from "react";
import { useSelector } from "react-redux";
function DisplayFatchApi() {
  const displayProducts = useSelector((state) => {
    return state.fatchData.array;
   
  });
  return (
    <div>
      <ul>
        {displayProducts.map((ele) => {
          <li key={ele.id}>{ele.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default DisplayFatchApi;

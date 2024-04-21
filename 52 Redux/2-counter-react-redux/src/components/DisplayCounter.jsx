import React from "react";
import { useSelector } from "react-redux";
function DisplayCounter() {
  const counter = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter Current value {counter}</p>;
}
export default DisplayCounter;
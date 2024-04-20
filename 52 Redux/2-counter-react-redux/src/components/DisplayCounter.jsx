import React from "react";
import { useSelector } from "react-redux";
function DisplayCounter() {
  const counter = useSelector((store) => store.counter);
  return <p class="lead mb-4">Counter Current value {counter}</p>;
}
export default DisplayCounter;
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMassage from "./components/ErrorMassage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
function App() {
  let [foodItems,setFoodItems]=useState(['sabji','dal','roti'])
  let [textToShow ,setTextState]=useState("Food Item Is Entered By Users");

  const onKeyDown = (event) => {
    if (event.key==='Enter'){
      let newFoodItem=event.target.value;
      event.target.value='';
      let newFoodItems=[...foodItems, newFoodItem];
      setFoodItems(newFoodItems);
      setTextState(`new item added:${newFoodItem}`);

    }
    ;
  };
  return (
    <>
      {" "}
      <Container>
        <center>
          <h1>healty food</h1>
        </center>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
        <ErrorMassage items={foodItems}></ErrorMassage>
      </Container>
      <Container>
        <p>
          Healthy food is a nutritious food that contains all the necessary
          elements for our body, such as protein, vitamin, fats, and
          carbohydrates.2 It is essential to eat a good mixture of foods from
          different groups, such as rice, cereals, potatoes, vegetables, meat,
          fishes, eggs, nuts, and milk, in plenty, and moderately.
        </p>
      </Container>
    </>
  );
}
export default App;

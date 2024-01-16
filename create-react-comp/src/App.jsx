// import Hello from "./Hello";
import FoodItems from "./components/FoodItems"; 
import ErrorMassage from "./components/ErrorMassage";
function App(){
  let foodItems =['dal','goru','murgi','dim','milk','water'];
  // let foodItems=[];
  return <>
   <center><h1>healty food</h1></center> 
  <FoodItems items={foodItems}></FoodItems>
  <ErrorMassage items={foodItems}></ErrorMassage>
    
  </>
}
export default App ; 

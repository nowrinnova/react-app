import Item from "./Item";

const FoodItems =({items})=>{
  const handleBuyButtonClicked=(event)=>{
    console.log(`${items} item is clicked`)
        } 
  // let foodItems=['dal'];
  return (<ul className="list-group" >
    {items.map(item=> 
    <Item key={item} foodItem={item} handleBuyButtonClicked={handleBuyButtonClicked}></Item>)}</ul>);};
export default FoodItems;
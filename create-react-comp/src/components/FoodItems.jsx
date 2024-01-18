import Item from "./Item";

const FoodItems =({items})=>{
  let foodItems=['dal'];
  return (<ul classNameName="list-group">
    {items.map(item=> 
    <Item foodItem={item}></Item>)}</ul>);};
export default FoodItems;
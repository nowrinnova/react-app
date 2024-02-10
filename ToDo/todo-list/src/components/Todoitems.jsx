import Todoitem from "./Todoitem";

function Todoitems({ todoItem ,onDeleteItem}) {
  return (
    <>
      <div className="container">
        {todoItem.map((item) => (
          <Todoitem todoname={item.name} tododate={item.date} onDeleteItem={onDeleteItem}></Todoitem>
        ))}
      </div>
    </>
  );
}
export default Todoitems;

import Todoitem from "./Todoitem";

function Todoitems({ todoItem }) {
  return (
    <>
      <div className="container">
        {todoItem.map((item) => (
          <Todoitem todoname={item.name} tododate={item.date}></Todoitem>
        ))}
      </div>
    </>
  );
}
export default Todoitems;

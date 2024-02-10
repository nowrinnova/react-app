function Todoitem({ todoname, tododate ,onDeleteItem }) {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-4">{todoname}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-4">
            <button className="btn btn-danger kg-btn" onClick={()=>onDeleteItem(todoname)}> Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todoitem;

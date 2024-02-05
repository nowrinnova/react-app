function Todoitem({ todoname, tododate }) {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col-4">{todoname}</div>
          <div className="col-4">{tododate}</div>
          <div className="col-4">
            <button className="btn btn-danger kg-btn"> Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todoitem;

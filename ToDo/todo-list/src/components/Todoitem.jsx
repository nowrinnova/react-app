function Todoitem({ todoname, tododate }) {
  return (
    <>
      <div class="container ">
        <div class="row">
          <div class="col-4">{todoname}</div>
          <div class="col-4">{tododate}</div>
          <div class="col-4">
            <button className="btn btn-danger kg-btn"> Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Todoitem;

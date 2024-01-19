function Addtodo() {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col-4">
            <input
              type="text"
              placeholder="Enter the name"
              className="input-typ"
            />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>
          <div class="col-4">
            <button className="btn btn-success kg-btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtodo;

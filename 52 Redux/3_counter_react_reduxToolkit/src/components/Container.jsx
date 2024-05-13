import React from "react";

function Container({ children }) {
  return (
    <center>
      {" "}
      <div>
        <div className="card" style={{ width: "80rem" }}>
          <div className="card-body">{children}</div>
        </div>
      </div>
    </center>
  );
}

export default Container;

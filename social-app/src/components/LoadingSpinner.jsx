import React from "react";

function LoadingSpinner() {
  return (
    <div className="d-flex align-items-center">
      <strong role="status">Loading...</strong>
      <div className="spinner-border ms-auto" aria-hidden="true"></div>
    </div>
  );
}

export default LoadingSpinner;

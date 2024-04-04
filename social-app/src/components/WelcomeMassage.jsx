import React from "react";

function WelcomeMassage({onGetPostClick}) {
  return (
    
      <center>
        <h1>There is no post avaiable </h1>
<button onClick={onGetPostClick}>submit</button>
      </center>
    
  );
}

export default WelcomeMassage;

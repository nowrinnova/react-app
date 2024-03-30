import { useState } from "react";

const StateTutorial = () => {
  const [status, setNewState] = useState(0);
  const handleOnInc = () => {
    setNewState(status + 1);
  };
  const handleOnDec = () => {
    setNewState(status - 1);
  };

  return (
    <>
      <h1>{status}</h1>
      <button onClick={handleOnInc}>Inc</button>
      <button onClick={handleOnDec}>Dec</button>
    </>
  );
};
export default StateTutorial;

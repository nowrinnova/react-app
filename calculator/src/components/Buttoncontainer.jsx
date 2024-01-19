import style from "./Buttoncontainer.module.css";
function Buttoncontainer({ buttonValue }) {
  return (
    <>
      <center>
        {" "}
        <div className={style.container}>
          {buttonValue.map((item) => (
            <button className={style.button}>{item}</button>
          ))}
        </div>
      </center>
    </>
  );
}
export default Buttoncontainer;

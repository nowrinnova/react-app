import style from "./Display.module.css";
function Display() {
  return (
    <>
      <center>
        <input type="text" className={style.display} readOnly />
      </center>
    </>
  );
}
export default Display;

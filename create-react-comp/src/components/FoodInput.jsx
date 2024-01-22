import style from "./FoodInput.module.css";
const FoodInput = ({handleKeyDown}) => {
  return (
    <>
      <input
        className={style.input}
        type="text"
        placeholder="Enter you fav food"
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
export default FoodInput;

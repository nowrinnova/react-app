import styles from "./Items.module.css";
const Item = ({ foodItem}) => {
  const handleBuyButtonClicked=(event)=>{
    console.log(event)
    console.log(`${foodItem} item is clicked`)
        }
  return (
  
    <>
      <div className={styles.container}>
        <li key={foodItem} className="list-group-item">
          <span className={styles.span}> {foodItem}</span>
          <button
            className={`${styles.button} btn btn-info`}
            onClick={(event)=>handleBuyButtonClicked(event)}
          >
            buy
          </button>
        </li>
      </div>
    </>
  );
};
export default Item;

import styles from "./AddToDo.module.css";
const AddToDo =()=>{
  return <>
  <h4 className={styles.addToDoMassage}>Add Your Task</h4>
  <div className="addToDo_container">
  <input  className={styles.addName} type="text" placeholder="Enter your name" />
  <input  className={styles.addDate} type="date"  />
  </div>
  
  </>
}
export default AddToDo;
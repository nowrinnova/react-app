import styles from "./AddToDo.module.css";
const AddToDo =()=>{
  return <>
  <center><h6 className={styles.addToDoMassage}>Add Task <i className="fa-solid fa-plus"></i></h6></center>
  <div className={styles.addToDo_container}>
  <div className="container text-center">
  <div className="row">
    <div className="col-4"><input className="addName" type="text" placeholder="add task" /></div>
    <div className="col-4"><input className="addDate" type="date"  /></div>
    <div className="col-2"><button className={styles.addToDo}>Add</button></div>
  </div>
</div>
  </div>
  
  </>
}
export default AddToDo;
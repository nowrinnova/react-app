import styles from "./AddToDo.module.css";
import { AiFillDelete } from "react-icons/ai";
const TodoItem = ({todoname ,tododate ,onDeleteItem}) => {
  return (
    <>
      {" "}
      <div className="container text-center">
        <div className="row">
          <div className="col-4">
            <p>{todoname}</p>
          </div>
          <div className="col-4">
           {tododate}
          </div>
          <div className="col-2">
            <button className={styles.removeToDo} onClick={()=>onDeleteItem(todoname)}> <AiFillDelete /></button>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoItem;

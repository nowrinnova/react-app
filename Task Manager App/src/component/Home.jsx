import AddToDo from "./AddToDo";
import ToDoItems from "./ToDoItems";
import styles from "./Home.module.css";
const Home = ({todoList}) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_container}>hii</div>
        <div className={styles.right_container}>
          <div className={styles.right_container_navbar}>
            <span className={styles.navbar_heading}>Task Managment App</span>
            <div className={styles.navbar_heading_right}>
              <i className="fa-solid fa-user-plus"></i>
              <i className="fa-solid fa-sliders"></i>
              <i className="fa-solid fa-message"></i>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <hr />
          <AddToDo></AddToDo>
          <ToDoItems todoList={todoList}></ToDoItems>
        </div>
      </div>
    </>
  );
};
export default Home;

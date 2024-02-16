import styles from "./Home.module.css";
import AddToDo from "./AddToDo";
const Home = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.left_container}>hii</div>
        <div className={styles.right_container}>
          <div className={styles.right_container_navbar}>
            <span className={styles.navbar_heading}>Task Managment App</span>
            <div className={styles.navbar_heading_right}>
              <i class="fa-solid fa-user-plus"></i>
              <i class="fa-solid fa-sliders"></i>
              <i class="fa-solid fa-message"></i>
              <i class="fa-solid fa-ellipsis"></i>
            </div>
          </div>
         <hr />
          <AddToDo></AddToDo>
        </div>

      </div>
    </>
  );
};
export default Home;

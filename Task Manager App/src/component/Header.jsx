import styles from "./Header.module.css";
const Container = () => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.dot1}></span>
        <span className={styles.dot2}></span>
        <span className={styles.dot3}></span>
        <div class={styles.menu_bar}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </>
  );
};
export default Container;

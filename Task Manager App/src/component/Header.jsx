import styles from "./Header.module.css";
const Container = () => {
  return (
    <>
      <div className={styles.container}>
        <span className={styles.dot1}>dot</span>
        <span className={styles.dot2}>dot</span>
        <span className={styles.dot3}>dot</span>
        <span className={styles.menu_bar}>
          <i class="fa-solid fa-bars"></i>
        </span>
      </div>
    </>
  );
};
export default Container;

import styles from "./AddMovie.module.css";

const AddMovie = () => {
  return (
    <div className={styles.container}>
      <div className={styles.addMovie}>
        <div className={styles.addMovie__left}>
          <img
            className={styles.addMovie__image}
            src="https://picsum.photos/536/345"
            alt=""
            
          />
        </div>
        <div className={styles.addMovie__right}>
            <h1 className={styles.addMovie__title}>Add Movie</h1>

            <p className={styles.addMovie__inputTitle}>Title</p>
            <input className={styles.addMovie__addInput} type="text" />

            <p className={styles.addMovie__inputTitle}>Year</p>
            <input className={styles.addMovie__addInput} type="text" />

            <div>
            <button className={styles.addMovie__buttonInput}>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AddMovie;

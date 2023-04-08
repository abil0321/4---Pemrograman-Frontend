import styles from "./AddMovie.module.css";
import {useState} from "react";
import {nanoid} from "nanoid";
import Error from "../Alert/Error";


const AddMovie = (props) => {

  const [title, setTitle] = useState("");
  const [isTitleError, setIsTitleError] = useState(false);

  const [date, setDate] = useState("");
  const [isDateError, setIsDateError] = useState(false);

  const {movies, setMovies} = props;


  const handleSubmit = (event) => {
    event.preventDefault();

    if (title === "") {
      setIsTitleError(true);
      return;
    }else if (date === "") {
      setIsDateError(true);
      return;
    }

    const newMovie = {
      id: nanoid(),
      title: title,
      year: date,
      type: "Movie",
      poster: "https://picsum.photos/300/400"
    }
    setIsTitleError(false);
    setIsDateError(false);

    setMovies([...movies, newMovie]);
  }

  const handleInputChange = (event) => {
    setTitle(event.target.value);
  }

  const handleInputDate = (event) => {
    setDate(event.target.value);
  }


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
        <form className={styles.addMovie__right } onSubmit={handleSubmit}>
            <h1 className={styles.addMovie__title}>Add Movie</h1>

            <p className={styles.addMovie__inputTitle}>Title</p>
            <input className={styles.addMovie__addInput} type="text" value={title} onChange={handleInputChange} />
            {isTitleError ? <Error>Title Wajib di Isi</Error> : ""} <br />

            <p className={styles.addMovie__inputTitle}>Year</p>
            <input className={styles.addMovie__addInput} type="text" value={date} onChange={handleInputDate}/> <br />
            {isDateError && <Error>Date Wajib di Isi</Error>}

            <div>
            <button className={styles.addMovie__buttonInput}>Submit</button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;

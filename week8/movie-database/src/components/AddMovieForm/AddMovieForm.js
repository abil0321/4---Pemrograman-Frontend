import { nanoid } from "nanoid";
import { useState } from "react";
import Alert from "../Alert/Alert";
import styles from "./AddMovieForm.module.css";

// Menangkap props
function AddMovieForm(props) {
  /**
   * Ini hanya snippet(potongan) code.
   * Kode yang lainnya tetap sama.
   */

  // Destructing props: state movies
  const { movies, setMovies } = props;

  // Membuat state title dan date
 const [formData, setFormData] = useState({
    title: "",
    date: "",
    poster:"",
    type: "",
  });
  const {title, date, poster, type} = formData

  // Membuat state: isTitleError, isDateError
  const [formErrors, setFormErrors] = useState({
    isTitleError: false,
    isDateError: false,
    isPosterError: false,
    isTypeError: false,
  });

  const { isTitleError, isDateError, isPosterError, isTypeError } = formErrors;


  function handleChange(e){
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }


  function validate() {
    const errors = {};

    if (title === "") {
      errors.isTitleError = true;
    }

    if (date === "") {
      errors.isDateError = true;
    }

    if (poster === "") {
      errors.isPosterError = true;
    }

    if (type === "") {
      errors.isTypeError = true;
    }

    setFormErrors(errors);

    return Object.keys(errors);
  }

  function addMovie(){
     const movie = {
        id: nanoid(),
        title: title,
        year: date,
        type: type,
        poster: poster,
      };

      // SOLVED: HOW TO ADD MOVIE TO MOVIES :)
      setMovies([...movies, movie]);
  }

  function handleSubmit(e){
    e.preventDefault();
    
    if (validate()) {
      addMovie();
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.form}>
        <div className={styles.form__left}>
          <img
            className={styles.form__image}
            src="https://picsum.photos/536/354"
            alt=""
          />
        </div>
        <div className={styles.form__right}>
          <h2 className={styles.form__title}>Add Movie Form</h2>
          <form onSubmit={handleSubmit}>


            <div className={styles.form__group}>
              <label htmlFor="title" className={styles.form__label}>
                Title
              </label>
              <input
                id="title"
                className={styles.form__input}
                type="text"
                name="title"
                // Memberikan value input: title
                value={title}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isTitleError true maka render error
               */}
              {isTitleError && <Alert>Title Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="date" className={styles.form__label}>
                Year
              </label>
              <input
                id="date"
                className={styles.form__input}
                type="text"
                name="date"
                // Memberikan value input: date
                value={date}
                // Memberikan event onChange
                onChange={handleChange}
              />
              {/*
               * Menambahkan infline if: operator &&
               * Jika isDateError true maka render error
               */}
              {isDateError && <Alert>Date Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
            <label htmlFor="image" className={styles.form__label}>
                Image
              </label>

              <input
                id="image"
                className={styles.form__input}
                type="text"
                name="poster"
                // Memberikan value input: date
                value={poster}
                // Memberikan event onChange
                onChange={handleChange}
              />

              {isPosterError && <Alert>Link Gambar Wajib Diisi</Alert>}
            </div>

            <div className={styles.form__group}>
              <label htmlFor="type" className={styles.form__label}>
                Type
              </label>
            
              
                <select className={styles.form__dropbtn} value={type} name="type" onChange={handleChange}>
  	              
    	              <option selected>Pilih ...</option>
    	              <option value="Comedy">Comedy</option>
    	              <option value="Action">Action</option>
    	              <option value="Thriler">Thriler</option>
    	              <option value="Horor">Horor</option>
    	              <option value="Drama">Drama</option>
    	              <option value="dll ...">dll ...</option>
   	               
                </select>
                {isTypeError && <Alert>Category Wajib Dipilih</Alert>}
               
           </div>

            <div>
              <button className={styles.form__button}>Add Movie</button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
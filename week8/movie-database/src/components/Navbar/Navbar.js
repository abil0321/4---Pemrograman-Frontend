/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div>
          <h1 className={styles.navbar__brand}>Movie App</h1>
        </div>
        <div>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <Link to={'/'}>Home</Link>
            </li>
            <li className={styles.navbar__item}>
            <Link to={'/movie/create'}>Add Movie</Link>
            </li>
            <li className={styles.navbar__item}>
            <Link to={'/movie/popular'}>Popular</Link>
            </li>
            <li className={styles.navbar__item}>
            <Link to={'/movie/now'}>Now Playing</Link>
            </li>
            <li className={styles.navbar__item}>
            <Link to={'/movie/top'}>Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
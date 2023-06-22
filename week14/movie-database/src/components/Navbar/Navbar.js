/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import { Link } from "react-router-dom";
import StyledNavbar from "./NavbarStyledComponent";

function Navbar() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>Movie App</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link className="navbar__link" to={"/"}>Home</Link>
            </li>
            <li>
              <Link className="navbar__link" to={"/movie/create"}>Add Movie</Link>
            </li>
            <li>
              <Link className="navbar__link" to={"/movie/popular"}>Popular</Link>
            </li>
            <li>
              <Link className="navbar__link" to={"/movie/now"}>Now Playing</Link>
            </li>
            <li>
              <Link className="navbar__link" to={"/movie/top"}>Top Rated</Link>
            </li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;

// import styles from "./Navbar.module.css";
import StyledNavbar from "./NavbarStyledComponenet";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>COVID ID</h1>
        </div>
        <div>
          <ul>
            <li>
              <Link className="link" to="/">
                Global
              </Link>
            </li>
            <li>
              <Link className="link" to="/covid/indo">
                Indonesia
              </Link>
            </li>
            <li>
              <Link className="link" to="/covid/provinsi">
                Provinsi
              </Link>
            </li>
            <li>
              <Link className="link" to="/covid/about">
                About
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;

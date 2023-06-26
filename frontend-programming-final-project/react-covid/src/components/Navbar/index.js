// import styles from "./Navbar.module.css";
import StyledNavbar from "./NavbarStyledComponenet";

function Navbar() {
  return (
    <StyledNavbar>
        <nav>
          <div>
            <h1>COVID ID</h1>
          </div>
          <div>
            <ul>
              <li>Global</li>
              <li>Indonesia</li>
              <li>Provinsi</li>
              <li>About</li>
            </ul>
          </div>
        </nav>
    </StyledNavbar>
  );
}

export default Navbar;

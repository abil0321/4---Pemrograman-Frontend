// import styles from "./Footer.module.css";
import StyledFooter from "./FooterStyledComponent";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <footer>
        <div>
          <h1>COVID ID</h1>
          <p>
            Developed by Muhammad Salsabil
          </p>
        </div>
        <div>
          <ul>
          <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/covid/global">
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
      </footer>
    </StyledFooter>
  );
};
export default Footer;

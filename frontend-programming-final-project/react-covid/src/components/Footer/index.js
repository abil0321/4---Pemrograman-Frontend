// import styles from "./Footer.module.css";
import StyledFooter from "./FooterStyledComponent";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="title">
        <h1>COVID ID</h1>
        <span>Developed by Muhammad Salsabil</span>
      </div>
      
      <ul>
        {/* <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li> */}
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
    </StyledFooter>
  );
};
export default Footer;

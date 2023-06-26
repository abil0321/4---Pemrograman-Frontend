// import styles from "./Footer.module.css";
import StyledFooter from "./FooterStyledComponent";

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
            <li>Global</li>
            <li>Indonesia</li>
            <li>Provinsi</li>
            <li>About</li>
          </ul>
        </div>
      </footer>
    </StyledFooter>
  );
};
export default Footer;

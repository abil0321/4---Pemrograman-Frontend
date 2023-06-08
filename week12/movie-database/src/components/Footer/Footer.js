/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import FooterStyled from "./FooterStyledComponent";

function Footer() {
  /**
   * Menggunakan styles yang sudah diimport.
   * Memanggilnya menggunakan expression.
   */
  return (
    <FooterStyled>
      <footer >
        <h2>Movie App</h2>
        <p>
          Created by aufaroot18 & Editted by salsabilmuhammad45
        </p>
      </footer>
    </FooterStyled>
  );
}

export default Footer;

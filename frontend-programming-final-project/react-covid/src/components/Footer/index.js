import styles from "./Footer.module.css";

const Footer = () => {
    return (
      <div className={styles.container}>
      <footer className={styles.footer}>
        <div>
          <h1 className={styles.footer__brand}>COVID ID</h1>
          <p className={styles.footer__subbrand}>Developed by Muhammad Salsabil</p>
        </div>
        <div>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>Global</li>
            <li className={styles.footer__item}>Indonesia</li>
            <li className={styles.footer__item}>Provinsi</li>
            <li className={styles.footer__item}>About</li>
          </ul>
        </div>
      </footer>
    </div>
    );
};
export default Footer;

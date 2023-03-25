import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.container}>
            <footer className={styles.footer}>
                <h2 className={styles.footer__brand}>Movie App</h2>
                <p className={styles.footer__author}>@salsabilmuhammad45</p>
            </footer>
        </div>
    );
};
export default Footer;
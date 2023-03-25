import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.hero}>
                <div className={styles.hero__left}>
                    <div className={styles.hero__title}>Spiderman</div>
                    <div className={styles.hero__genre}>Action, Drama</div>
                    <p className={styles.hero__description}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, iusto?
                    </p>
                    <button className={styles.hero__button}>Watch now!!</button>
                </div>
                <div className={styles.hero__right}>
                    <img className={styles.hero__image} src="https://picsum.photos/536/345" alt="" srcset="" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
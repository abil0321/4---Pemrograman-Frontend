import styles from "./Hero.module.css";
import HeroImage from "./../../assets/images/Covid.png"; 

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
            <span className={styles.hero__subtitle}>
            Monitoring Perkembangan Covid
            </span>
          <p className={styles.hero__description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          <button className={styles.hero__button}>Watch</button>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={HeroImage}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;

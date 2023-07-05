// import styles from "./Hero.module.css";
import StyledHero from "./HeroStyledComponent";
import HeroImage from "./../../assets/images/Covid.png"; 
import Button from "../ui/Button/Button";

function Hero() {
  return (
    <StyledHero>
      <section>
        <div className="hero__left">
          <h2>Covid ID</h2>
            <span>
            Monitoring Perkembangan Covid
            </span>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          <Button variant="aqua">Submit</Button>
        </div>
        <div className="hero__right">
          <img
            src={HeroImage}
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;

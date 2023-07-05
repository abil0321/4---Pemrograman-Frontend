import styled from "styled-components";

const StyledHero = styled.div`
  /* Small Screen */
  margin: 2rem auto;
  padding: 1rem;
  

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  .hero__left {
    margin-bottom: 2.5rem;
  }

  h2 {
    color: #06d6a0;
    margin-bottom: 0rem;
    font-size: 2.44rem;
  }

  span {
    color: #118ab2;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 10px;
    background-color: #06d6a0;
    color: #fff;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
     * Nothing TODO Here.
     * We dont change style Hero. 
     */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;

    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    .hero__left {
      flex-basis: 40%;
    }

    .hero__right {
      flex-basis: 60%;
    }

    h2 {
      color: #06d6a0;
      margin-bottom: 0rem;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 61px;
      line-height: 92px;
    }

    p {
      color: #64748b;
      margin-bottom: 2rem;
      margin-top: 2rem;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 38px;
    }

    span {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 38px;
    }

    button {
      width: 223px;
      height: 65px;
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 25px;
      line-height: 38px;
    }
  }
`;
export default StyledHero;

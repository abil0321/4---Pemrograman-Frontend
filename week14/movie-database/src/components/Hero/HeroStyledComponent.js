import styled from "styled-components";

const StyledHero = styled.div`
  /* Small Screen */

  margin: 5rem auto;
  padding: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
    /* border: 2px solid red; */
  }

  .hero__left {
    margin-bottom: 1rem;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
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
      padding-left: 2rem;
    }

    .hero__right {
      flex-basis: 60%;
      display: flex;
      justify-content: right;
      padding-right: 2rem;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

export default StyledHero;

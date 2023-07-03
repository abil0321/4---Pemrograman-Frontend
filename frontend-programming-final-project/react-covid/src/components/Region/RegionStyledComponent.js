import styled from "styled-components";

const StyledRegion = styled.div`
  /* Small Screen */
    padding: 2rem 1rem;
    background-color: #f8f9fa;
    margin-top: 2rem;

  h2 {
    color: #06d6a0;
    font-size: 50px;
    font-family: "Poppins";
    font-style: normal;
  }

  img{
    width: 3rem;
  }

  .status{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto;
  }
  .status_title{
    color: gray;
    font-size: 20px;
    font-family: "Poppins";
    font-style: normal;
  }

  .confirm{
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-size: xx-large;
    color: #06d6a0;
  }

  .recover{
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-size: xx-large;
    color: #118ab2;
  }

  .death{
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-size: xx-large;
    color: #ef476f;
  }

  p {
    color: #118ab2;
    font-size: 20px;
    font-family: "Poppins";
    font-style: normal;
  }

  .indonesia__brand {
    text-align: center;
    line-height: 80%;
    margin-bottom: 3rem;
  }

  .indonesia__container__card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-bottom: 2rem;
  }

  .indonesia__card {
    background-color: #fff;
    border: 2px solid #fff;
    border-radius: 10%;
    padding: 5%;
    width: 70%;
    -webkit-box-shadow: 10px 10px 5px #ccc;
    -moz-box-shadow: 10px 10px 5px #ccc;
    box-shadow: 10px 10px 5px #ccc;
  }

  h1 {
    text-align: center;
    color: #073b4c;
    font-family: "Poppins";
    font-style: normal;
  }

  .indonesia__card__positif {
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-size: xx-large;
    color: #06d6a0;
  }

  .indonesia__card__sembuh {
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-size: xx-large;
    color: #118ab2;
  }

  .indonesia__card__meninggal {
    text-align: center;
    font-family: "Poppins";
    font-style: normal;
    font-size: xx-large;
    color: #ef476f;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    
    .indonesia__container__card {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 1rem;
    }

    .indonesia__card {
      width: 20%;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    h1 {
      font-weight: 500;
      font-size: 39px;
      line-height: 58px;
      /* identical to box height */
    }
  }
`;

export default StyledRegion;

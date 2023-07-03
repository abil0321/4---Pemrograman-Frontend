import styled from "styled-components";

const StyledProvinsi = styled.div`
  /* Small Screen */

  padding-bottom: 10rem;

  .provinsi__container {
    display: flex;
    flex-direction: column;
    /* text-align: center; */
    align-items: center;
    margin-bottom: 0;
  }

  .provinsi {
    text-align: center;
    padding-bottom: 1rem;
  }

  h1 {
    color: #06d6a0;
    font-family: "Poppins";
    font-style: normal;
  }

  span {
    font-family: "Poppins";
    font-style: normal;
    /* Secondary */
    color: #118ab2;
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
    span {
      font-weight: 400;
      font-size: 25px;
      line-height: 38px;
      /* identical to box height */
    }

    h1 {
      margin-bottom: 0rem;
      font-weight: 500;
      font-size: 61px;
      line-height: 92px;
    }
  }
`;

export default StyledProvinsi;

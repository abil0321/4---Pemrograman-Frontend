import styled from "styled-components";

const StyledFooter = styled.div`
  /* Small Screen */
  background-color: #06d6a0;
  padding: 1rem;
  color: #fff;

  footer {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
  }

  h1 {
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .footer {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
      margin: 0;
      margin-left: 122px;
    }

    p {
      margin: 0;
      margin-left: 122px;
    }

    ul {
      flex-direction: row;
      margin-right: 122px;
    }

    li {
      margin: 0 1rem;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    /* 
     * Nothing TODO HERE.
     * We haven't styling footer.
     */

    h1 {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 500;
      font-size: 39px;
      line-height: 58px;
    }

    li {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 25px;
      line-height: 38px;
    }
  }
`;

export default StyledFooter;

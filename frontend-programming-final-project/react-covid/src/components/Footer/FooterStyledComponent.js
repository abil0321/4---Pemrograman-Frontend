import styled from "styled-components";

const StyledFooter = styled.footer`
  /* Small Screen */
  margin: 0;
  background-color: #06d6a0;
  padding: 1rem;
  color: #fff;
  /* width: 100%; */
  display: flex;
  flex-direction: column-reverse;
  /* justify-content: space-between; */

  .title{
    text-align: center;
  }


  h1 {
    margin-bottom: 1px;
    font-size: 1rem;
  }
  span{
    font-size: 0.7rem;
    
  }

  ul {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-evenly;
    list-style: none;
    padding-left: 0;
    /* margin-right: 1.5rem; */
    /* border: 2px solid red; */
  }

  li {
    /* margin-right: 1rem;  */
    
  }

  .link {
    text-decoration: none;
    color: white;
  }

  .link:hover {
    color: greenyellow;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    h1 {
      margin: 0;
      /* border: 2px solid red; */
      text-align: right;
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
    margin: 0;
    background-color: #06d6a0;
    padding: 1rem;
    color: #fff;
    display: flex;
    justify-content: space-around;

    span {
      margin-left: 3rem;
    }

    ul {
      display: flex;
      /* flex-direction: column; */
      justify-content: space-evenly;
      list-style: none;
      margin-right: 1.5rem;
    }

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

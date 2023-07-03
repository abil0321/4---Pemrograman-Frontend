import styled from "styled-components";

const StyledNavbar = styled.div`
  /* Small Screen */
    background-color: #06d6a0;
    padding: 1rem;
    color: #fff;
    width: auto;

  nav {
    display: flex;
    /* flex-direction: column; */
    justify-content: space-between;
  }

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 72px;
    /* identical to box height */

    color: #ffffff;
    margin-bottom: 1rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    text-decoration: none;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 25px;
    line-height: 38px;
    /* identical to box height */

    color: #ffffff;
  }

  li {
    margin-bottom: 1rem; 
    text-decoration: none;
  }

  .link{
    text-decoration: none;
    color: white;
  }

  .link:hover {
    color: greenyellow;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .navbar {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    h1 {
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
     * We haven't styling Navbar.
     */

    h1 {
      font-size: 48px;
      line-height: 72px;
      /* identical to box height */

      margin-bottom: 1rem;
    }

    ul {
      font-size: 25px;
      line-height: 38px;
      /* identical to box height */
    }
  }
`;

export default StyledNavbar;

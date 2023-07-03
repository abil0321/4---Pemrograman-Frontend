import styled from "styled-components";

const StyledRegions = styled.div`
border: 2px solid red;
  margin: 5rem auto;
  section {
    text-align: center;
  }

  h2 {
    margin-bottom: 1rem;
    font-size: 2.44rem;
    color: #4361ee;
  }

  .region__container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    .region__container {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  /* Large Screen */
  @media (min-width: 992px) {
    max-width: 1200px;
  }
`;

export default StyledRegions;

import styled from "styled-components";

const StyledBiodata = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  
  .imgBiodata {
    /* border: 2px solid red; */
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    table-layout: auto;
  }

  td {
    border: 1px solid #64748b;
    text-align: center;
    padding: 1rem;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    text-align: center;
    vertical-align: middle;
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
    table,
    th,
    td {
      font-size: 16px;
    }

  }
`;

export default StyledBiodata;

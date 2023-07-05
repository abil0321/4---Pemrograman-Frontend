import styled from "styled-components";

const StyledTabelProvinsi = styled.table`
  /* Small Screen */
    width: 100%;
    border-collapse: collapse;
    table-layout: auto ;


  table,
  th,
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


      width: 60%;
    }

`;

export default StyledTabelProvinsi;

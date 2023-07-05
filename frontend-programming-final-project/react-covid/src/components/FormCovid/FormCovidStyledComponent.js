import styled from "styled-components";

const StyledForm = styled.div`
/* Small Screen */
  margin: 1rem 1rem;
  padding: 1rem;


section {
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
}

.form__left {
  display: none;
}

img {
  max-width: 100%;
  border-radius: 25px;
  height: auto;
}

h2 {
  font-family: "Poppins";
  font-style: normal;
  /* identical to box height */

  /* Primary */

  color: #06d6a0;
  margin-bottom: 1rem;
}

.form__group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  margin-bottom: 1rem;
  font-family: "Poppins";
  font-style: normal;
  /* identical to box height */

  /* Gray Color */

  color: #64748b;
}

input {
  outline: none;
  padding: 1rem 0.5rem;
  background: #ffffff;
  /* Primary */

  border: 2px solid #06d6a0;
  border-radius: 10px;
}

input:focus {
  border: 3px solid #4361ee;
}

select {
  outline: none;
  padding: 1rem 0.5rem;
  background: #ffffff;
  /* Primary */

  border: 2px solid #06d6a0;
  border-radius: 10px;
}

.form__dropdown {
  position: relative;
  display: inline-block;
}

select:focus {
    border: 3px solid #4361ee;
  }

option {
  border-radius: 10px;
  color: #06d6a0;
  font-family: "Poppins";
  font-style: normal;
}

/* button {
  padding: 0.8rem 2rem;
  border: none;
  display: block;
  margin: 0;
  width: 100%;
  background: #06d6a0;
  border-radius: 10px;

  font-family: "Poppins";
  font-style: normal; */
  /* identical to box height */
/* 
  color: #ffffff;
} */

/* Large Screen */
@media (min-width: 992px) {
    max-width: 1200px;
    margin: 5rem auto;


  section {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .form__left {
    display: block;
    flex-basis: 60%;
  }

  .form__right {
    flex-basis: 40%;
  }

  h2 {
    font-weight: 500;
    font-size: 61px;
    line-height: 92px;
    /* identical to box height */
  }

  label {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */
  }

  button {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */
  }

  option {
    font-weight: 400;
    font-size: 20px;
    line-height: 36px;
    margin: 1rem;
  }
}

`;

export default StyledForm;
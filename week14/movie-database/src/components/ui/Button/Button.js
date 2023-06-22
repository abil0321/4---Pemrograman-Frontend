import styled, { css } from "styled-components";

// const colors = {
//   primary: "#4361ee",
//   secondary: "#b5179e",
// };

const Button = styled.button`
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
  background-color: ${(props) => {
    // if (props.variant === "primary") {
    //     return "blue";
    // }else if (props.variant === "secondary") {
    //     return "#b5179e";
    // }else {
    //     return "#4361ee";
    // }

    if (props.variant) {
      return props.theme.colors[props.variant];
    } else {
      return props.theme.colors["primary"];
    }
  }};

  font-size: ${(props) => {
    if (props.size) {
      return props.theme.fontSize[props.size]
    }else {
      return props.theme.fontSize["md"];
    }
  }};

  padding: ${(props) => {
    if (props.size) {
      return props.theme.padding[props.size]
    }else {
      return props.theme.padding["md"];
    }
  }};

  ${(props) => {
    return (
      props.full &&
      css`
        display: block;
        width: 100%;
      `
    );
  }}

  
`;
export default Button;

import styled from "styled-components";

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 25px;
  border: 3px solid;

  border-color: ${(props) => {
    if (props.variant) {
      return props.theme.colors[props.variant];
    } else {
      return props.theme.colors["none"];
    }
  }};
`;

export default Image;

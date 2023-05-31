import styled from "styled-components";

const Paragraph = styled.p`
  margin-bottom: 1rem;

  color: ${(props) => {
    if (props.variant) {
      return props.theme.colors[props.variant];
    } else {
      return props.theme.colors["paragraph"];
    }
  }};

`;

export default Paragraph;
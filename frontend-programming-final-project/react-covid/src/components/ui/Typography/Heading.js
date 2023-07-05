import styled from "styled-components";

const Heading = styled.h2`
  margin-bottom: 1rem;
  font-size: 2.44rem;

  color: ${(props) => {
    if (props.variant) {
      return props.theme.colors[props.variant];
    } else {
      return props.theme.colors["primary"];
    }
  }};

`;

export default Heading;
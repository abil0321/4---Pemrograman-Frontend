// import styles from "./Error.module.css";
import StyledError from "./ErrorStyledComponent";

const Error = (props) => {
  return (
    <StyledError>
      <p>{props.children} *</p>
    </StyledError>
  );
};

export default Error;
import styles from "./Error.module.css";

const Error = (props) => {
    return(
        
        <p className={ styles.error}>{props.children} *</p>
    );
}

export default Error;
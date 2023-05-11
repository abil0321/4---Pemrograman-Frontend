import styles from "./Container.module.css";

const Container = (props) => {
    return(
        
        <div className={styles.container}>
            <main>{props.children}</main>
        </div>
    )
}

export default Container;
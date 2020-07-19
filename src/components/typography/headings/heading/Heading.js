import React from "react";
import styles from "./Heading.module.css";

function Heading(props) {
    const variantClass = props.variant === "dark" ? styles.dark : null;

    return <h2 className={`${styles.heading} ${variantClass}`}>{props.children}</h2>;
}

export default Heading;

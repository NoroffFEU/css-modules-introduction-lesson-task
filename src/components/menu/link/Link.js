import React from "react";
import styles from "./Link.module.css";

function Link(props) {
    let activeClass = "";

    if (props.active) {
        activeClass = styles.active;
    }

    return <a className={`${styles.link} ${activeClass}`}>{props.children}</a>;
}

export default Link;

import React from "react";
import styles from "./Link.module.css";

function Link(props) {
    let activeClass = "";

    if (props.active) {
        activeClass = styles.active;
    }

    return (
        <a href={props.href} className={`${styles.link} ${activeClass}`}>
            {props.children}
        </a>
    );
}

export default Link;

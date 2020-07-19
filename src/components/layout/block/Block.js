import React from "react";
import styles from "./Block.module.css";

function Block(props) {
    return <div className={`${styles.block} ${props.secondary ? styles.secondary : null}`}>{props.children}</div>;
}

export default Block;

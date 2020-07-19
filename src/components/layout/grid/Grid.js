import React from "react";
import styles from "./Grid.module.css";
import Heading from "../../typography/headings/heading/Heading";
import Block from "../block/Block";

function Grid() {
    return (
        <div className={styles.grid}>
            <div className={styles.headingOne}>
                <Heading variant="dark">Heading One</Heading>
                Nam nulla ligula, rutrum non aliquam vel, rutrum id justo. Lorem ipso facto.
            </div>
            <div className={styles.headingTwo}>
                <Heading>Heading Two</Heading>
                Nam nulla ligula, rutrum non aliquam vel.
            </div>
            <div className={styles.blocks}>
                <Block secondary>One</Block>
                <Block>Two</Block>
            </div>
            <div className="block-three">
                <Block secondary>Three</Block>
            </div>
        </div>
    );
}

export default Grid;

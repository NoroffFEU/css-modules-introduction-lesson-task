import React from "react";
import Link from "../link/Link";
import styles from "./Nav.module.css";

function Nav() {
    return (
        <nav className={styles.nav}>
            <Link href="/" active>
                Home
            </Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
        </nav>
    );
}

export default Nav;

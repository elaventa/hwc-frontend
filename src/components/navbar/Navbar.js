"use client";
import React from "react";
import Link from "next/link";
import Logo from "../../assets/hwc-logo.jpeg";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/home">
                <Image
                    src={Logo}
                    className={styles.logo}
                    alt=""
                    width={130}
                    height={130}
                />{" "}
            </Link>
            <ul className={styles.navItems}>
                <li className={styles.navItem}> Home</li>
                <li className={styles.navItem}> About</li>
                <li className={styles.navItem}>
                    {" "}
                    Prequalifier{" "}
                    <RiArrowDropDownLine className={styles.dropdownicon} />
                    <ul>
                        <li>Regisration</li>
                        <li>Rules And Regulations</li>
                        <li>Terms And Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </li>
                <li className={styles.navItem}> Start Category</li>
                <li className={styles.navItem}> Book your ticket</li>
                <li className={styles.navItem}>Media</li>
                <li className={styles.navItem}>Contact</li>
            </ul>
        </nav>
    );
}

export default Navbar;

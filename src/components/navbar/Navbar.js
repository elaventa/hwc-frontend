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
            <Link href="/">
                <Image
                    src={Logo}
                    className={styles.logo}
                    alt=""
                    width={130}
                    height={130}
                />{" "}
            </Link>
            <ul className={styles.navItems}>
                <li className={styles.navItem}> <Link href="/">Home</Link></li>
                <li className={styles.navItem}> <Link href="/">About</Link></li>
                <li className={styles.navItem}>
                    {" "}
                    Prequalifier{" "}
                    <RiArrowDropDownLine className={styles.dropdownicon} />
                    <ul>
                        <li><Link href="/">Regisration</Link></li>
                        <li><Link href="/">Rules And Regulations</Link></li>
                        <li><Link href="/">Terms And Conditions</Link></li>
                        <li><Link href="/">Privacy Policy</Link></li>
                    </ul>
                </li>
                <li className={styles.navItem}><Link href="/"> Start Category</Link></li>
                <li className={styles.navItem}> <Link href="/">Book your ticket</Link></li>
                <li className={styles.navItem}><Link href="/">Media</Link></li>
                <li className={styles.navItem}><Link href="/">Contact</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;

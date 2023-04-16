"use client";
import Link from "next/link";
import Logo from "../../assets/logo.png";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    };

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <Image
                    placeholder="blur"
                    loading="lazy"
                    src={Logo}
                    className={styles.logo}
                    alt=""
                    width={130}
                    height={130}
                />
            </Link>
            <ul
                className={[styles.navItems, clicked ? styles.true : ""].join(
                    " "
                )}
            >
                <li onClick={handleClick} className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li onClick={handleClick} className={styles.navItem}>
                    <Link href="/registration">Register</Link>
                </li>
                {/* <li className={styles.navItem}>
                    Prequalifier
                    <RiArrowDropDownLine className={styles.dropdownicon} />
                    <ul className={styles.navItems}>
                        <li className={styles.navItem}>
                            <Link href="/">Regisration</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/">Rules And Regulations</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/">Terms And Conditions</Link>
                        </li>
                        <li className={styles.navItem}>
                            <Link href="/">Privacy Policy</Link>
                        </li>
                    </ul>
                </li>
                <li className={styles.navItem}>
                    <Link href="/"> Start Category</Link>
                </li> */}
                <li onClick={handleClick} className={styles.navItem}>
                    <Link href="/">Book your tickets</Link>
                </li>
                <li onClick={handleClick} className={styles.navItem}>
                    <Link href="/media">Media</Link>
                </li>
            </ul>

            <div className={styles.mobileNav}>
                <div
                    onClick={handleClick}
                    className={`${styles.hamburger} ${
                        clicked ? styles.true : ""
                    }`}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

import Image from "next/image";
import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png";
import Link from "next/link";
import Social from "../Social/Social";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerContent}>
                <Image loading="lazy" placeholder="blur" className={styles.logo} src={logo} alt="hwc logo" />
                <div className={styles.col}>
                    <h2 className={styles.footerTitle}>Competitions</h2>
                    <ul>
                        <li>Pro Qualifiers</li>
                        <li>Pro Show India</li>
                        <li>Amateur Olympia India</li>
                    </ul>

                    <br />
                    <br />
                    <h2 className={styles.footerTitle}>STAR CATEGORY</h2>
                    <ul>
                        <li>Registration</li>
                        <li>Rules and Regulations</li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h2 className={styles.footerTitle}>Important Links</h2>

                    <ul>
                        <Link href="#">
                            {" "}
                            <li>Book your Tickets</li>
                        </Link>
                        <Link href="/media">
                            <li>Media</li>
                        </Link>
                        <Link href="/about">
                            <li>About Us</li>
                        </Link>
                        <Link href="/contact">
                            <li>Contact</li>
                        </Link>
                    </ul>

                    <br />
                    <h2 className={styles.footerTitle}>Other</h2>

                    <ul>
                        <Link href="/privacy-policy">
                            <li>Privacy Policy</li>
                        </Link>
                        <Link href="terms-and-conditions">
                            <li>Terms and Conditions</li>
                        </Link>
                    </ul>
                </div>

                <div className={styles.col}>
                    <p>
                        HARD WORK CLASSIC PVT LTD34/265, <br />
                        Anand Nagar,Vakola, <br />
                        Santacruz East,Mumbai 400055 <br />
                        Maharashtra , India
                    </p>

                    <br />

                    <p className={styles.bold}>
                        <a href="tel:+">+91 85913 36124</a>
                    </p>
                    <p className={styles.bold}>
                        {" "}
                        <a href="mailto:">hardworkclassic@gmail.com</a>{" "}
                    </p>

                    <br />
                    <br />
                    <Social />
                </div>
            </section>

            <div className={styles.credits}>
                <p>© Copyrights Hard Work Classic. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

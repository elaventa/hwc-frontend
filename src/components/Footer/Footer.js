import Image from "next/image";
import styles from "./Footer.module.scss";
import logo from "../../assets/logo.png";
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.footerContent}>
                <Image className={styles.logo} src={logo} alt="hwc logo" />
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
                        <li> Book your Tickets</li>
                        <li>Media</li>
                        <li>About Us</li>
                        <li>Contact</li>
                    </ul>

                    <br />
                    <h2 className={styles.footerTitle}>Other</h2>

                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms and Conditions</li>
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

                    <p className={styles.bold}>+91 85913 36124</p>
                    <p className={styles.bold}>hardworkclassic@gmail.com</p>
                </div>
            </section>

            <div className={styles.credits}>
                <p>© Copyrights Hard Work Classic. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;

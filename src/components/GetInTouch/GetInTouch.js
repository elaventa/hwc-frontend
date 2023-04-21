import Image from "next/image";
import styles from "./GetInTouch.module.scss";
import background from "../../assets/GetInTouch.png"
import Social from "../Social/Social";

const GetInTouch = () => {
    return (
        <div className={styles.GetInTouchWrapper}>
            <div className={styles.background}>
                <Image
                    placeholder="blur"
                    loading="lazy"
                    className={styles.image}
                    src={background}
                    alt="syed shehbaz"
                />
            </div>
            <section className={styles.GetInTouchContainer}>

                <div className={styles.contentWrapper}>
                    <h2 className={styles.title}>GET IN TOUCH</h2>

                    <div className={styles.row}>
                        <h3 className={styles.subTitle}>Email</h3>
                        <p className={styles.subContent}> <a href="mailto:info@hardworkclassic.com"> info@hardworkclassic.com</a></p>
                    </div>

                    <div className={styles.row}>
                        <h3 className={styles.subTitle}>Phone</h3>
                        <p className={styles.subContent}><a href="tel:+918197120172"> +91 81971 20172</a></p>
                    </div>

                    <div className={styles.row}>
                        <h3 className={styles.subTitle}>Social</h3>
                        <Social />
                    </div>

                </div>

                <form className={styles.form}>
                    <label htmlFor="name">NAME</label>
                    <input id="name" type="text" />
                    <label htmlFor="email">EMAIL ID</label>
                    <input id="email" type="email" />
                    <label htmlFor="subject">SUBJECT</label>
                    <input id="subject" type="text" />
                    <label htmlFor="message">MESSAGE</label>
                    <textarea id="message" cols="30" rows="10"></textarea>

                    <input type="submit" />
                </form>
            </section>
        </div>
    );
};

export default GetInTouch;

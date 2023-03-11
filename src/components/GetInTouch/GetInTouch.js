import Image from "next/image";
import styles from "./GetInTouch.module.scss";
import background from "../../assets/GetInTouch.png"

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
                    <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                    <div className={styles.row}>
                        <h3 className={styles.subTitle}>Email</h3>
                        <p className={styles.subContent}>hardworkclassic@gmail.com</p>
                    </div>

                    <div className={styles.row}>
                        <h3 className={styles.subTitle}>Phone</h3>
                        <p className={styles.subContent}>+91 9747 406 685</p>
                    </div>

                    <div className={styles.row}>
                        <h3 className={styles.subTitle}>Social</h3>
                        <p className={styles.subContent}></p>
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
